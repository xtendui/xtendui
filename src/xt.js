/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

//
// constructor
//

export const Xt = {}

if (typeof window !== 'undefined') {
  //
  // vars
  //

  Xt.running = {}
  Xt.currents = {} // Xt currents based on namespace (so shared between Xt objects)
  Xt.optionsGlobal = {}
  Xt.mountArr = []
  Xt.unmountArr = []
  Xt.scrollDelay = false
  Xt.resizeDelay = 75
  Xt.medialoadedDelay = false
  Xt.focusables = 'a, button, details, input, iframe, select, textarea, .xt-dismiss'
  Xt.supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent)
  Xt.durationTimescale = 1
  Xt.autoTimescale = 1
  Xt.scrolltoHashforce = null

  //
  // initialization
  //

  /**
   * ready
   * @param {Function} fnc Function to execute on dom ready
   */
  Xt.ready = fnc => {
    if (document.readyState === 'complete') {
      requestAnimationFrame(() => {
        fnc()
      })
    } else {
      document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
          requestAnimationFrame(() => {
            fnc()
          })
        }
      })
    }
  }

  /**
   * init
   */
  Xt.ready(() => {
    document.querySelector('body').classList.add('xt-ready')
    if (!Xt.supportScroll) {
      document.querySelector('body').classList.add('xt-noscroll')
    }
    Xt.setScrollbarWidth()
    Xt.innerHeightSet()
    Xt.mountCheck(document.documentElement)
    Xt.observer.disconnect()
    Xt.observer.observe(document.documentElement, {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: true,
    })
  })

  //
  // observer
  //

  /**
   * observer
   */
  Xt.observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // added
        for (const added of mutation.addedNodes) {
          if (added.nodeType === 1) {
            Xt.mountCheck(added)
          }
        }
        // removed
        for (const removed of mutation.removedNodes) {
          if (removed.nodeType === 1) {
            Xt.unmountCheck(removed)
          }
        }
      }
    }
  })

  /**
   * mount
   * @param {Object} obj
   */
  Xt.mount = obj => {
    Xt.mountArr.push(obj)
  }

  /**
   * unmount
   * @param {Object} obj
   */
  Xt.unmount = obj => {
    Xt.unmountArr.push(obj)
  }

  /**
   * mountCheck
   * @param {Node|HTMLElement|EventTarget|Window} added
   */
  Xt.mountCheck = (added = document.documentElement) => {
    for (const obj of Xt.mountArr) {
      // ignore
      const ignoreStr = obj.ignore ? obj.ignore : obj.ignore === false ? false : '.xt-ignore'
      if (ignoreStr) {
        const ignore = added.closest(ignoreStr)
        if (ignore) {
          Xt.ignoreOnce(ignore) // fix ignore once for mount when moving
          continue
        }
      }
      // check
      const refs = []
      if (added.matches(obj.matches)) {
        refs.push(added)
      }
      for (const ref of added.querySelectorAll(obj.matches)) {
        refs.push(ref)
      }
      // call
      if (refs.length) {
        for (const [index, ref] of refs.entries()) {
          // fix multiple initialization
          obj.done = obj.done ? obj.done : []
          if (obj.done.includes(ref)) {
            return
          }
          obj.done.push(ref)
          // call
          const call = obj.mount({ ref, obj, index })
          // destroy
          if (call) {
            Xt.unmount({
              ref: ref,
              matches: obj.matches,
              unmount: call,
              unmountRemove: () => {
                // fix multiple initialization
                obj.done = obj.done.filter(x => x !== ref)
                // unmount remove
                Xt.unmountArr = Xt.unmountArr.filter(x => {
                  return x.ref !== ref && x.matches !== obj.matches
                })
              },
            })
          }
        }
      }
    }
  }

  /**
   * unmountCheck
   * @param {Node|HTMLElement|EventTarget|Window} removed
   */
  Xt.unmountCheck = (removed = document.documentElement) => {
    for (const obj of Xt.unmountArr) {
      // check
      if (removed === obj.ref || removed.contains(obj.ref)) {
        if (obj.ref.closest('.xt-ignore')) {
          return
        }
        // call
        obj.unmount(obj)
        obj.unmountRemove()
      }
    }
  }

  //
  // component
  //

  /**
   * set component
   * @param {String} name Component name
   * @param {Node|HTMLElement|EventTarget|Window} element Component's element
   * @param {Object} self Component' self
   */
  Xt.set = (name, element, self) => {
    Xt.dataStorage.set(element, name, self)
  }

  /**
   * get component
   * @param {String} name Component name
   * @param {Node|HTMLElement|EventTarget|Window} element Component's element
   * @return {Object}
   */
  Xt.get = (name, element) => {
    return Xt.dataStorage.get(element, name)
  }

  /**
   * remove component
   * @param {String} name Component name
   * @param {Node|HTMLElement|EventTarget|Window} element Component's element
   * @return {Object}
   */
  Xt.remove = (name, element) => {
    return Xt.dataStorage.remove(element, name)
  }

  //
  // dataStorage
  // map storage for HTML elements
  //

  Xt.dataStorage = {
    /**
     * properties
     */
    _storage: new Map(),

    /**
     * set key/obj pair on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @param {*} obj
     * @return {*}
     */
    set: (el, key, obj) => {
      // new map if not already there
      if (!Xt.dataStorage._storage.has(el)) {
        Xt.dataStorage._storage.set(el, new Map())
      }
      // set
      const getEl = Xt.dataStorage._storage.get(el)
      getEl.set(key, obj)
      // return
      return getEl.get(key)
    },

    /**
     * put key/obj pair on element's map, return old if exist already
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @param {*} obj
     * @return {*}
     */
    put: (el, key, obj) => {
      // new map if not already there
      if (!Xt.dataStorage._storage.has(el)) {
        Xt.dataStorage._storage.set(el, new Map())
      }
      // return if already set
      const getEl = Xt.dataStorage._storage.get(el)
      const getKey = getEl.get(key)
      if (getKey) {
        return getKey
      }
      // set
      getEl.set(key, obj)
      // return
      return getEl.get(key)
    },

    /**
     * get obj from key on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @return {*}
     */
    get: (el, key) => {
      const getEl = Xt.dataStorage._storage.get(el)
      // null if empty
      if (!getEl) {
        return null
      }
      // return
      return getEl.get(key)
    },

    /**
     * get all obj/key on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @return {*}
     */
    getAll: el => {
      const getEl = Xt.dataStorage._storage.get(el)
      // null if empty
      if (!getEl) {
        return null
      }
      // return
      return getEl
    },

    /**
     * has key on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @return {Boolean}
     */
    has: (el, key) => {
      // return
      return Xt.dataStorage._storage.get(el).has(key)
    },

    /**
     * remove element's map key
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @return {Boolean}
     */
    remove: (el, key) => {
      const getEl = Xt.dataStorage._storage.get(el)
      // null if empty
      if (!getEl) {
        return null
      }
      // remove
      const ret = getEl.delete(key)
      // remove storage if empty
      if (getEl.size === false) {
        Xt.dataStorage._storage.delete(el)
      }
      // return
      return ret
    },
  }

  //
  // classHtml
  // util to remember classHtml state
  //

  Xt.classHtml = {
    /**
     * properties
     */
    currents: [],

    /**
     * add classHtml currents
     * @param {Object} obj Object
     */
    add: obj => {
      Xt.classHtml.currents.push(obj)
    },

    /**
     * remove classHtml currents
     * @param {Object} obj Object
     */
    remove: obj => {
      Xt.classHtml.currents = Xt.classHtml.currents.filter(x => x.c !== obj.c || x.ns !== obj.ns)
    },

    /**
     * get classHtml currents
     * @param {Object} obj Object
     * @return {Array} Currents
     */
    get: obj => {
      return Xt.classHtml.currents.filter(x => x.c === obj.c)
    },
  }

  //
  // focus
  // util to remember focus on key or interactions events
  //

  Xt.focus = {
    /**
     * properties
     */
    block: false,
    current: null,

    /**
     * enable focus change events
     * @param {Boolean} keepAll
     */
    on: (keepAll = false) => {
      // event key
      const focusChangeKeyHandler = Xt.dataStorage.put(document, 'keyup/focus', Xt.focus.changeKey)
      document.addEventListener('keyup', focusChangeKeyHandler)
      // fix switch mode
      if (!keepAll) {
        // event mouse
        const focusChangeOtherHandler = Xt.dataStorage.get(document, 'mousedown touchstart pointerdown/focus')
        document.removeEventListener('mousedown', focusChangeOtherHandler, true)
        document.removeEventListener('touchstart', focusChangeOtherHandler, true)
        document.removeEventListener('pointerdown', focusChangeOtherHandler, true)
      }
    },

    /**
     * disable focus change events
     * @param {Boolean} keepAll
     */
    off: (keepAll = false) => {
      // fix switch mode
      if (!keepAll) {
        // event
        const focusChangeKeyHandler = Xt.dataStorage.get(document, 'keyup/focus')
        document.removeEventListener('keyup', focusChangeKeyHandler)
      }
      // event mouse
      const focusChangeOtherHandler = Xt.dataStorage.put(
        document,
        'mousedown touchstart pointerdown/focus',
        Xt.focus.changeOther
      )
      document.addEventListener('mousedown', focusChangeOtherHandler)
      document.addEventListener('touchstart', focusChangeOtherHandler, {
        passive: true,
      })
      document.addEventListener('pointerdown', focusChangeOtherHandler, {
        passive: true,
      })
    },

    /**
     * focus change on key events
     * @param {Event} e Event
     */
    changeKey: e => {
      const code = e.keyCode ? e.keyCode : e.which
      // key tab
      if (code === 9) {
        if (!Xt.focus.block) {
          // remember Xt.focus
          Xt.focus.current = document.activeElement
        }
        if (!document.querySelector('body').classList.contains('xt-focus-visible')) {
          // focus-visible
          document.querySelector('body').classList.add('xt-focus-visible')
          // fix switch mode
          Xt.focus.off()
        }
      }
    },

    /**
     * focus change on other events
     * @param {Event} e Event
     */
    changeOther: e => {
      if (!Xt.focus.block) {
        // remember Xt.focus
        Xt.focus.current = e.target
      }
      if (document.querySelector('body').classList.contains('xt-focus-visible')) {
        // focus-visible
        document.querySelector('body').classList.remove('xt-focus-visible')
        // fix switch mode
        Xt.focus.on()
      }
    },
  }

  requestAnimationFrame(() => {
    Xt.focus.on()
  })

  //
  // focusLimit
  // util to limit focus inside HTML elements
  //

  Xt.focusLimit = {
    /**
     * properties
     */
    actives: [],

    /**
     * activate focusLimit to an element
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    on: el => {
      // vars
      Xt.focusLimit.focusables = Array.from(el.querySelectorAll(Xt.focusables)).filter(x =>
        x.matches(':not([disabled]), :not([tabindex="-1"])')
      )
      if (Xt.focusLimit.focusables.length) {
        Xt.focusLimit.first = Xt.focusLimit.focusables[0]
        Xt.focusLimit.last = Xt.focusLimit.focusables[Xt.focusLimit.focusables.length - 1]
        // event
        const focusLimitHandler = Xt.dataStorage.put(document, 'keydown/focusLimit', Xt.focusLimit.limit)
        document.addEventListener('keydown', focusLimitHandler)
      }
      // fix Xt.focus when clicking and not used tab before
      Xt.focus.current = Xt.focus.current ? Xt.focus.current : document.activeElement
      // fix switch mode
      Xt.focus.off(true)
      // actives
      Xt.focus.block = true
      Xt.focusLimit.actives.push(el)
    },

    /**
     * deactivate focusLimit to an element
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    off: el => {
      // event
      const focusLimitHandler = Xt.dataStorage.get(document, 'keydown/focusLimit')
      document.removeEventListener('keydown', focusLimitHandler)
      // actives
      Xt.focusLimit.actives = Xt.focusLimit.actives.filter(x => x !== el)
      if (Xt.focusLimit.actives.length) {
        const active = Xt.focusLimit.actives[Xt.focusLimit.actives.length - 1]
        Xt.focusLimit.actives = Xt.focusLimit.actives.filter(x => x !== active)
        Xt.focusLimit.on(active)
      } else {
        // fix switch mode
        Xt.focus.on()
        // actives
        Xt.focus.block = false
        Xt.focus.current.focus()
      }
    },

    /**
     * limit even on focus when activated
     * @param {Event} e Event
     */
    limit: e => {
      const code = e.keyCode ? e.keyCode : e.which
      // key tab
      if (code === 9) {
        if (!Xt.focusLimit.focusables.includes(document.activeElement)) {
          if (e.shiftKey) {
            Xt.focusLimit.last.focus()
            e.preventDefault()
          } else {
            Xt.focusLimit.first.focus()
            e.preventDefault()
          }
        }
      }
    },
  }

  //
  // util
  //

  /**
   * friction
   * @param {Node|HTMLElement|EventTarget|Window} el Element
   * @param {Object} obj Object with x and y values
   * @param {Boolean} transform Use transforms instead of position
   */
  Xt.friction = (el, obj, transform = true) => {
    cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionFrame'))
    cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionInitFrame'))
    Xt.dataStorage.set(
      el,
      'xtFrictionInitFrame',
      requestAnimationFrame(() => {
        let xCurrent
        let yCurrent
        if (transform) {
          const translate = Xt.getTranslate(el)
          xCurrent = translate[0]
          yCurrent = translate[1]
        } else {
          const rect = el.getBoundingClientRect()
          xCurrent = rect.left
          yCurrent = rect.top
        }
        let xDist = obj.x - xCurrent
        let yDist = obj.y - yCurrent
        // momentum
        const fncFriction = obj.friction
        // set
        if (fncFriction && Xt.dataStorage.get(el, 'xtFrictionX') && Xt.durationTimescale !== 1000) {
          // friction
          xCurrent += fncFriction({ delta: Math.abs(xDist) }) * Math.sign(xDist)
          yCurrent += fncFriction({ delta: Math.abs(yDist) }) * Math.sign(yDist)
          if (transform) {
            el.style.transform = `translateX(${xCurrent}px) translateY(${yCurrent}px)`
          } else {
            el.style.left = `${xCurrent}px`
            el.style.top = `${yCurrent}px`
          }
        } else {
          // instant
          xCurrent = obj.x
          yCurrent = obj.y
          // set
          if (transform) {
            el.style.transform = `translateX(${xCurrent}px) translateY(${yCurrent}px)`
          } else {
            el.style.top = `${yCurrent}px`
            el.style.left = `${xCurrent}px`
          }
        }
        // next interaction friction
        Xt.dataStorage.set(el, 'xtFrictionX', xCurrent)
        Xt.dataStorage.set(el, 'xtFrictionY', yCurrent)
        // loop
        if (fncFriction && Xt.durationTimescale !== 1000) {
          const frictionLimit = obj.frictionLimit ? obj.frictionLimit : 1.5
          xDist = obj.x - xCurrent
          yDist = obj.y - yCurrent
          cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionFrame'))
          Xt.dataStorage.set(
            el,
            'xtFrictionFrame',
            requestAnimationFrame(() => {
              if (Math.abs(xDist) >= frictionLimit || Math.abs(yDist) >= frictionLimit) {
                // continue friction
                Xt.friction(el, obj, transform)
              } else {
                // next interaction instant
                Xt.dataStorage.remove(el, 'xtFrictionX')
                Xt.dataStorage.remove(el, 'xtFrictionY')
              }
            })
          )
        }
      })
    )
  }

  /**
   * Return translate values https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
   * @param {Node|HTMLElement|EventTarget|Window} element Element to check target
   * @return {Array} Values [x, y]
   */
  Xt.getTranslate = element => {
    const transArr = []
    const style = getComputedStyle(element)
    const transform = style.transform
    let mat = transform.match(/^matrix3d\((.+)\)$/)
    if (mat) {
      transArr.push(parseFloat(mat[1].split(', ')[13]))
    } else {
      mat = transform.match(/^matrix\((.+)\)$/)
      mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : transArr.push(0)
      mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : transArr.push(0)
    }
    return transArr
  }

  /**
   * Contains for multiple elements
   * @param {NodeList|Array} elements Elements to check if contains
   * @param {Node|HTMLElement|EventTarget|Window} target Element to check if contained
   * @return {Boolean}
   */
  Xt.contains = (elements, target) => {
    for (const el of elements) {
      if (el.contains(target)) {
        return true
      }
    }
    return false
  }

  /**
   * Get unique id
   * @return {String} Unique id
   */
  Xt.getuniqueId = () => {
    Xt.uid = Xt.uid !== undefined ? Xt.uid : 0
    return `xt-${Xt.uid++}`
  }

  /**
   * Merge deep array of objects
   * @param {Array} arr Array of objects to merge
   * @return {Object} Merged object
   */
  Xt.merge = arr => {
    const final = {}
    for (const obj of arr) {
      if (obj) {
        for (const [key, value] of Object.entries(obj)) {
          if (
            value !== null &&
            typeof value === 'object' &&
            !Array.isArray(value) && // not array
            !value.nodeName && // not HTML element
            value !== window // not window
          ) {
            final[key] = Xt.merge([final[key], value])
          } else {
            final[key] = value
          }
        }
      }
    }
    return final
  }

  /**
   * Merge deep reset object only when equals to check
   * @param {Object} start object Start object
   * @param {Object} reset object Reset object
   * @param {Object} check object Check with start object to reset with reset object
   * @return {Object} Merged object
   */
  Xt.mergeReset = (start, reset, check) => {
    const final = start
    for (const [key, value] of Object.entries(check)) {
      if (
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) && // not array
        !value.nodeName && // not HTML element
        value !== window // not window
      ) {
        final[key] = Xt.mergeReset(start[key], reset[key], check[key])
      } else {
        if (start[key] === check[key]) {
          final[key] = reset[key]
        }
      }
    }
    return final
  }

  /**
   * Make an array when element is only one
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} el
   * @return {NodeList|Array}
   */
  Xt.arrSingle = el => {
    if (!el) {
      return []
    }
    if (el.length === undefined || el.tagName === 'FORM') {
      const arr = new Array(1)
      arr[0] = el
      return arr
    } else {
      return el
    }
  }

  /**
   * Create HTML elements from html string
   * @param {String} str Html string (only 1 root html tag)
   * @return {Node} HTML elements
   */
  Xt.createElement = str => {
    const template = document.createElement('template')
    template.innerHTML = str.trim()
    return template.content.firstChild
  }

  /**
   * Set scrollbar width of document
   */
  Xt.setScrollbarWidth = () => {
    if (Xt.scrollbarWidth === undefined) {
      const scrollbarWidthHandler = Xt.dataStorage.put(window, 'resize/scrollbar', Xt.setScrollbarWidth)
      removeEventListener('resize', scrollbarWidthHandler)
      addEventListener('resize', scrollbarWidthHandler)
    }
    // add outer
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.width = '100%'
    outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
    outer.classList.add('xt-ignore', 'xt-overflow-main')
    document.body.append(outer)
    // force scrollbars
    outer.style.overflow = 'scroll'
    // add inner
    const inner = document.createElement('div')
    inner.style.width = '100%'
    inner.classList.add('xt-ignore')
    outer.append(inner)
    // return
    const widthNoScroll = outer.offsetWidth
    const widthWithScroll = inner.offsetWidth
    Xt.scrollbarWidth = widthNoScroll - widthWithScroll
    document.documentElement.style.setProperty('--scrollbar-width', `${Xt.scrollbarWidth}px`)
    // remove
    outer.remove()
  }

  /**
   * if full width return '' else return value in px
   * @param {Number|String} width
   * @return {String} Value in px
   */
  Xt.normalizeWidth = width => {
    width = parseFloat(width)
    if (!width || width + Xt.scrollbarWidth >= window.innerWidth) {
      width = ''
    } else {
      width += 'px'
    }
    return width
  }

  /**
   * addScript
   * @param {String} url
   * @param {Function} callback
   */
  Xt.addScript = (url, callback = null) => {
    if (!document.querySelector(`script[src="${url}"]`)) {
      const script = document.createElement('script')
      if (callback) {
        script.onload = callback
      }
      script.type = 'text/javascript'
      script.src = url
      document.body.append(script)
    }
  }

  /**
   * ignoreOnce
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  Xt.ignoreOnce = el => {
    if (el.classList.contains('xt-ignore-once')) {
      // fix react when componentDidMount
      requestAnimationFrame(() => {
        el.classList.remove('xt-ignore', 'xt-ignore-once')
      })
    }
  }

  /**
   * animation on classes
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {String} suffix Timeout suffix
   */
  Xt.on = (el, suffix = '') => {
    if (!el.classList.contains('on')) {
      el.classList.add('on')
      el.classList.remove('in')
      el.classList.remove('out')
      clearTimeout(Xt.dataStorage.get(el, `AnimTimeout${suffix}`))
      cancelAnimationFrame(Xt.dataStorage.get(el, `AnimFrame${suffix}`))
      // keep the same level of raf for activation
      Xt.dataStorage.put(
        el,
        `AnimFrame${suffix}`,
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.add('in')
          })
        })
      )
    }
  }

  /**
   * animation off classes
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {String} suffix Timeout suffix
   * @param {Number} timing Optional force time
   */
  Xt.off = (el, suffix = '', timing = null) => {
    if (el.classList.contains('on')) {
      el.classList.remove('on')
      el.classList.remove('in')
      el.classList.add('out')
      clearTimeout(Xt.dataStorage.get(el, `AnimTimeout${suffix}`))
      cancelAnimationFrame(Xt.dataStorage.get(el, `AnimFrame${suffix}`))
      Xt.animTimeout(
        el,
        () => {
          el.classList.remove('out')
        },
        `AnimFrame${suffix}`,
        timing,
        'Out'
      )
    }
  }

  /**
   * execute function after transition or animation
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {Function} func Function to execute after transition or animation
   * @param {String} suffix Timeout suffix
   * @param {Number} timing Optional force time
   * @param {String} actionCurrent Current action
   */
  Xt.animTimeout = (el, func, suffix = '', timing = null, actionCurrent = null) => {
    clearTimeout(Xt.dataStorage.get(el, `AnimTimeout${suffix}`))
    timing = Xt.animTime(el, timing, actionCurrent)
    Xt.dataStorage.set(el, `AnimTimeout${suffix}`, setTimeout(func, timing))
  }

  /**
   * clear animTimeout
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {String} suffix Timeout suffix
   */
  Xt.animTimeoutClear = (el, suffix = '') => {
    clearTimeout(Xt.dataStorage.get(el, `AnimTimeout${suffix}`))
  }

  /**
   * get transition or animation time
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {Number} timing Force duration in milliseconds
   * @param {String} actionCurrent Current action
   * @return {Number} Time in milliseconds
   */
  Xt.animTime = (el, timing = null, actionCurrent = null) => {
    const custom =
      (actionCurrent && el.getAttribute(`data-xt-duration-${actionCurrent}`)) || el.getAttribute('data-xt-duration')
    if (custom) {
      return parseFloat(custom) / Xt.durationTimescale
    } else if (typeof timing === 'function') {
      return timing
    } else if (timing || timing === 0) {
      return timing / Xt.durationTimescale
    }
  }

  /**
   * get delay time
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {Number} timing Force duration in milliseconds
   * @param {String} actionCurrent Current action
   * @return {Number} Time in milliseconds
   */
  Xt.delayTime = (el, timing = null, actionCurrent = null) => {
    const custom =
      (actionCurrent && el.getAttribute(`data-xt-delay-${actionCurrent}`)) || el.getAttribute('data-xt-delay')
    if (custom) {
      return parseFloat(custom) / Xt.durationTimescale
    } else if (typeof timing === 'function') {
      return timing
    } else if (timing || timing === 0) {
      return timing / Xt.durationTimescale
    }
  }

  /**
   * return window percent if percent string
   * @param {Number|String} num Number to check
   * @return {Number}
   */
  Xt.windowPercent = num => {
    if (typeof num === 'string' || num instanceof String) {
      if (num.indexOf('%') !== -1) {
        num = (Xt.innerHeight * parseFloat(num)) / 100
      }
    }
    return num
  }

  /**
   * query array of elements or element
   * @param {Node|HTMLElement|NodeList|Array} element Element to search from
   * @param {String} query Query for querySelectorAll
   * @return {Array}
   */
  Xt.queryAll = (elements, query) => {
    // not when no query or empty array
    if (!query || elements.length === 0) {
      return []
    }
    if (!elements.length) {
      // search element
      return Xt.arrSingle(elements.querySelectorAll(query))
    } else {
      // search array
      const arr = []
      for (const el of elements) {
        arr.push(...el.querySelectorAll(query))
      }
      return arr
    }
  }

  /**
   * check element visibility
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @return {Boolean}
   */
  Xt.visible = el => {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
  }

  /**
   * Fix resize event multiple calls and adds delay on resize and scroll events
   * @param {Event|Object} e Event
   * @param {Node|HTMLElement|EventTarget|Window} element Element to save timeout
   * @param {Function} func Function to execute
   * @param {String} prefix Timeout prefix
   * @param {Boolean} instant If instant
   */
  Xt.eventDelay = ({ event, element, func, prefix = '', instant = false }) => {
    const container = document.documentElement
    cancelAnimationFrame(Xt.dataStorage.get(element, `${prefix}Frame`))
    clearTimeout(Xt.dataStorage.get(element, `${prefix}Timeout`))
    if (event) {
      const delay =
        event.detail !== undefined && event.detail.delay !== undefined
          ? event.detail.delay
          : instant
          ? 0
          : Xt[`${event.type}Delay`]
      if (event.type === 'resize') {
        const w = window.innerWidth
        const h = window.innerHeight
        // multiple calls check
        if (
          (event.detail === undefined || event.detail.force === undefined) && // not when setting delay on event
          Xt.dataStorage.get(container, 'xtEventDelayWidth') === w && // when width changes
          (matchMedia('(hover: none)').matches || Xt.dataStorage.get(container, 'xtEventDelayHeight') === h) // when height changes not touch
        ) {
          // only width no height because it changes on scroll on mobile
          return
        }
        // save after a frame to execute all eventDelay
        cancelAnimationFrame(Xt.dataStorage.get(container, 'xtEventDelayFrame'))
        Xt.dataStorage.set(
          container,
          'xtEventDelayFrame',
          requestAnimationFrame(() => {
            Xt.dataStorage.set(container, 'xtEventDelayWidth', w)
            Xt.dataStorage.set(container, 'xtEventDelayHeight', h)
          })
        )
      }
      // delay
      if (!delay) {
        Xt.dataStorage.set(element, `${prefix}Frame`, requestAnimationFrame(func.bind(event)))
      } else {
        Xt.dataStorage.set(
          element,
          `${prefix}Timeout`,
          setTimeout(() => {
            // func
            func(event)
          }, delay)
        )
      }
    } else {
      Xt.dataStorage.set(element, `${prefix}Frame`, requestAnimationFrame(func.bind(event)))
    }
  }

  Xt.dataStorage.set(document.documentElement, 'xtEventDelayWidth', window.innerWidth)
  Xt.dataStorage.set(document.documentElement, 'xtEventDelayHeight', window.innerHeight)

  /**
   * utility vars
   */
  Xt.innerHeightSet = () => {
    Xt.innerHeight = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${Xt.innerHeight * 0.01}px`)
  }

  // init

  addEventListener('resize', e => {
    Xt.eventDelay({
      event: e,
      element: document.documentElement,
      prefix: 'xtWindowHeightResize',
      instant: true,
      func: () => {
        Xt.innerHeightSet()
      },
    })
  })
  Xt.innerHeightSet()

  //
}
