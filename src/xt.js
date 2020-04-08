//
// constructor
//

export const Xt = {}

//
// vars
//

Xt.debug = false
Xt.mount = []
Xt.unmount = []
Xt.currents = {} // Xt currents based on namespace (so shared between Xt objects)
Xt.optionsGlobal = {}
Xt.resizeDelay = 1000
Xt.scrollDelay = false
Xt.medialoadedDelay = 500
Xt.focusables = 'a, button, details, input, iframe, select, textarea'

//
// call only if in browser mode
// https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
//

if (typeof window !== 'undefined') {
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
    Xt.stickyIndex = 500
    Xt.setScrollbarWidth()
    Xt.windowHeightSet()
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
   * mountCheck
   * @param {Node|HTMLElement|EventTarget|Window} added
   */
  Xt.mountCheck = (added = document.documentElement) => {
    const addedIgnore = added.closest('.xt-ignore')
    if (addedIgnore) {
      Xt.ignoreOnce(addedIgnore) // @FIX ignore once for mount when moving
      return
    }
    for (const obj of Xt.mount) {
      // check
      const els = []
      if (added.matches(obj.matches)) {
        els.push(added)
      }
      for (const element of added.querySelectorAll(obj.matches)) {
        els.push(element)
      }
      // call
      if (els.length) {
        for (const [i, el] of els.entries()) {
          const elIgnore = el.closest('.xt-ignore')
          if (elIgnore) {
            Xt.ignoreOnce(elIgnore) // @FIX ignore once for mount when moving
            continue
          }
          // call
          requestAnimationFrame(() => {
            // @FIX react when componentDidMount
            const destroy = obj.mount(el, i, obj.matches) // object, index, matches
            if (destroy) {
              Xt.unmount.push({
                object: el,
                unmount: destroy,
                unmountRemove: () => {
                  Xt.unmount.filter(x => {
                    return x.object !== el
                  })
                },
              })
            }
          })
        }
      }
    }
  }

  /**
   * unmountCheck
   * @param {Node|HTMLElement|EventTarget|Window} removed
   */
  Xt.unmountCheck = (removed = document.documentElement) => {
    if (removed.closest('.xt-ignore')) {
      return
    }
    for (const obj of Xt.unmount) {
      // check
      if (removed === obj.object || removed.contains(obj.object)) {
        if (obj.object.closest('.xt-ignore')) {
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
   */
  Xt.get = (name, element) => {
    return Xt.dataStorage.get(element, name)
  }

  /**
   * remove component
   * @param {String} name Component name
   * @param {Node|HTMLElement|EventTarget|Window} element Component's element
   */
  Xt.remove = (name, element) => {
    return Xt.dataStorage.remove(element, name)
  }

  /**
   * destroy component if defined and set
   * @param {Object} self Component self
   * @param {Function} fnc Component init
   */
  Xt.destroyAndInit = self => {
    // @FIX multiple initializations
    const old = Xt.get(self.componentName, self.object)
    if (old) {
      old.destroy()
    }
    // set self
    Xt.set(self.componentName, self.object, self)
    // init
    self.init()
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
     * @returns {*}
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
     * @returns {*}
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
     * @returns {*}
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
     * @returns {*}
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
     * @returns {Boolean}
     */
    has: (el, key) => {
      // return
      return Xt.dataStorage._storage.get(el).has(key)
    },

    /**
     * remove element's map key
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @returns {Boolean}
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
  // scrollbar
  // util to remember scrollbar state
  //

  Xt.scrollbar = {
    /**
     * properties
     */
    currents: [],

    /**
     * get scrollbar currents
     * @returns {Array} Currents
     */
    get: () => {
      return Xt.scrollbar.currents
    },

    /**
     * add scrollbar currents
     * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
     */
    add: el => {
      Xt.scrollbar.currents.push(el)
    },

    /**
     * remove scrollbar currents
     * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
     */
    remove: el => {
      Xt.scrollbar.currents = Xt.scrollbar.currents.filter(x => x !== el)
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
     */
    on: () => {
      // event key
      const focusChangeKeyHandler = Xt.dataStorage.put(document, 'keyup/focus', Xt.focus.changeKey)
      document.addEventListener('keyup', focusChangeKeyHandler)
      // event mouse
      const focusChangeOtherHandler = Xt.dataStorage.get(document, 'mousedown touchstart pointerdown/focus')
      document.removeEventListener('mousedown', focusChangeOtherHandler)
      document.removeEventListener('touchstart', focusChangeOtherHandler)
      document.removeEventListener('pointerdown', focusChangeOtherHandler)
    },

    /**
     * disable focus change events
     */
    off: () => {
      // event
      const focusChangeKeyHandler = Xt.dataStorage.get(document, 'keyup/focus')
      document.removeEventListener('keyup', focusChangeKeyHandler)
      // event mouse
      const focusChangeOtherHandler = Xt.dataStorage.put(document, 'mousedown touchstart pointerdown/focus', Xt.focus.changeOther)
      document.addEventListener('mousedown', focusChangeOtherHandler)
      document.addEventListener('touchstart', focusChangeOtherHandler, { passive: true })
      document.addEventListener('pointerdown', focusChangeOtherHandler, { passive: true })
    },

    /**
     * focus change on key events
     * @param {Event} e Event
     */
    changeKey: e => {
      const code = e.keyCode ? e.keyCode : e.which
      if (code === 9) {
        if (!Xt.focus.block) {
          // remember Xt.focus
          Xt.focus.current = document.activeElement
        }
        if (!document.documentElement.classList.contains('xt-focus-visible')) {
          // html.xt-focus-visible
          document.documentElement.classList.add('xt-focus-visible')
          // switch mode
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
      if (document.documentElement.classList.contains('xt-focus-visible')) {
        // html.xt-focus-visible
        document.documentElement.classList.remove('xt-focus-visible')
        // switch mode
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
     * activate focusLimit to an element
     * @param {Node|HTMLElement|EventTarget|Window} el Element
     */
    on: el => {
      Xt.focus.block = true
      el.focus()
      // @FIX Xt.focus when clicking and not used tab before
      Xt.focus.current = Xt.focus.current ? Xt.focus.current : document.activeElement
      // vars
      Xt.focusLimit.focusables = Array.from(el.querySelectorAll(Xt.focusables)).filter(x => x.matches(':not([disabled]), :not([tabindex="-1"])'))
      if (Xt.focusLimit.focusables.length) {
        Xt.focusLimit.first = Xt.focusLimit.focusables[0]
        Xt.focusLimit.last = Xt.focusLimit.focusables[Xt.focusLimit.focusables.length - 1]
        // event
        const focusLimitHandler = Xt.dataStorage.put(document, 'keyup/focusLimit', Xt.focusLimit.limit.bind(this))
        document.addEventListener('keyup', focusLimitHandler)
      }
    },

    /**
     * deactivate focusLimit to an element
     */
    off: () => {
      Xt.focus.block = false
      Xt.focus.current.focus()
      // event
      const focusLimitHandler = Xt.dataStorage.get(document, 'keyup.focusLimit')
      document.removeEventListener('keyup', focusLimitHandler)
    },

    /**
     * limit even on focus when activated
     * @param {Event} e Event
     */
    limit: e => {
      const code = e.keyCode ? e.keyCode : e.which
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
  // friction
  // util to friction values
  //

  Xt.friction = (el, obj) => {
    let xCurrent = Xt.getTranslate(el)[0]
    let yCurrent = Xt.getTranslate(el)[1]
    let xDist = obj.x - xCurrent
    let yDist = obj.y - yCurrent
    // momentum
    let fncFriction
    if (obj.friction === false) {
      fncFriction = false
    } else if (obj.friction === undefined) {
      fncFriction = delta => {
        return delta / 11
      }
    } else {
      fncFriction = obj.friction
    }
    if (fncFriction) {
      xCurrent += fncFriction(Math.abs(xDist)) * Math.sign(xDist)
      yCurrent += fncFriction(Math.abs(yDist)) * Math.sign(yDist)
      // set
      requestAnimationFrame(() => {
        el.style.transform = 'translateX(' + xCurrent + 'px) translateY(' + yCurrent + 'px)'
      })
    } else {
      xCurrent = obj.x
      yCurrent = obj.y
      // set
      el.style.transform = 'translateX(' + xCurrent + 'px) translateY(' + yCurrent + 'px)'
    }
    // loop
    if (fncFriction) {
      const frictionLimit = obj.frictionLimit || 1.5
      xDist = obj.x - xCurrent
      yDist = obj.y - yCurrent
      cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionFrame'))
      if (Math.abs(xDist) >= frictionLimit || Math.abs(yDist >= frictionLimit)) {
        Xt.dataStorage.set(
          el,
          'xtFrictionFrame',
          requestAnimationFrame(() => {
            Xt.friction(el, obj)
          })
        )
      }
    }
  }

  //
  // util
  //

  /**
   * Return translate values https://gist.github.com/aderaaij/a6b666bf756b2db1596b366da921755d
   * @param {Node|HTMLElement|EventTarget|Window} element Element to check target
   * @return {Array} Values [x, y]
   */
  /*
  USAGE:
  Xt.getTranslate(el)[0]; // for translateX
  Xt.getTranslate(el)[1]; // for translateY
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
    let result = false
    for (const el of elements) {
      if (el.contains(target)) {
        result = true
      }
    }
    return result
  }

  /**
   * Get unique id
   * @returns {String} Unique id
   */
  Xt.getuniqueId = () => {
    Xt.uid = Xt.uid !== undefined ? Xt.uid : 0
    return 'xt-' + Xt.uid++
  }

  /**
   * Get unique number
   * @returns {Number} Unique number
   */
  Xt.getStickyIndex = () => {
    return Xt.stickyIndex--
  }

  /**
   * Merge objects
   * @param {Array} arr Array of objects to merge
   * @returns {Object} Merged object
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
            !value.nodeName && // not HTML elemen
            value !== window
          ) {
            // not window
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
   * Make an array when element is only one
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} el
   * @returns {NodeList|Array}
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
    const div = document.createElement('div')
    div.innerHTML = str.trim()
    return div.firstChild
  }

  /**
   * Set scrollbar width of document
   * @param {Boolean} force Force recalc
   */
  Xt.setScrollbarWidth = (force = false) => {
    if (Xt.scrollbarWidth === undefined) {
      const scrollbarWidthHandler = Xt.dataStorage.put(window, 'resize/scrollbar', Xt.setScrollbarWidth.bind(this, true))
      addEventListener('resize', scrollbarWidthHandler)
    }
    if (force || Xt.scrollbarWidth === undefined) {
      // add outer
      const outer = document.createElement('div')
      outer.style.visibility = 'hidden'
      outer.style.width = '100%'
      outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
      outer.classList.add('xt-ignore', 'overflow-style')
      document.body.appendChild(outer)
      // force scrollbars
      outer.style.overflow = 'scroll'
      // add inner
      const inner = document.createElement('div')
      inner.style.width = '100%'
      inner.classList.add('xt-ignore')
      outer.appendChild(inner)
      // return
      const widthNoScroll = outer.offsetWidth
      const widthWithScroll = inner.offsetWidth
      Xt.scrollbarWidth = widthNoScroll - widthWithScroll
      // remove
      outer.remove()
    }
  }

  /**
   * if full width return '' else return value in px
   * @param {Number|String} width
   * @returns {String} Value in px
   */
  Xt.normalizeWidth = width => {
    width = parseFloat(width)
    if (width + Xt.scrollbarWidth >= window.innerWidth) {
      width = ''
    } else {
      width += 'px'
    }
    return width
  }

  /**
   * fix scrollbar spacing when changing overflow adding padding
   * @param {Array|Node|HTMLElement|EventTarget|Window} container
   */
  Xt.scrollbarSpaceOn = container => {
    const width = Xt.scrollbarWidth
    container.style.paddingRight = width + 'px'
    // backdrop
    const backdrops = container.querySelectorAll('.backdrop')
    for (const backdrop of backdrops) {
      backdrop.style.right = width + 'px'
    }
    // xt-fixed
    const elements = container.querySelectorAll('.xt-fixed')
    for (const element of elements) {
      const style = getComputedStyle(element)
      let prop
      if (Xt.normalizeWidth(element.clientWidth) === '') {
        // only if full width
        prop = 'paddingRight'
      } else if (parseFloat(style.right) === 0) {
        // only if right position
        prop = 'right'
      }
      if (prop) {
        const old = element.style[prop]
        let val = parseFloat(style[prop])
        val = old !== '' ? val - parseFloat(old) : val
        const str = 'calc(' + val + 'px + ' + width + 'px)'
        element.classList.add('transition-none')
        requestAnimationFrame(() => {
          element.style[prop] = str
          requestAnimationFrame(() => {
            element.classList.remove('transition-none')
          })
        })
      }
    }
  }

  /**
   * fix scrollbar spacing when changing overflow adding padding
   * @param {Array|Node|HTMLElement|EventTarget|Window} container
   */
  Xt.scrollbarSpaceOff = container => {
    container.style.paddingRight = ''
    // backdrop
    const backdrops = container.querySelectorAll('.backdrop')
    for (const backdrop of backdrops) {
      backdrop.style.right = ''
    }
    // xt-fixed
    const elements = container.querySelectorAll('.xt-fixed')
    for (const element of elements) {
      element.classList.add('transition-none')
      requestAnimationFrame(() => {
        element.style.right = ''
        element.style.paddingRight = ''
        requestAnimationFrame(() => {
          element.classList.remove('transition-none')
        })
      })
    }
  }

  /**
   * addScript
   * @param {String} url
   * @param {Function} callback
   */
  Xt.addScript = (url, callback = null) => {
    if (!document.querySelector('script[src="' + url + '"]')) {
      const script = document.createElement('script')
      if (callback) {
        script.onload = callback
      }
      script.type = 'text/javascript'
      script.src = url
      document.body.appendChild(script)
    }
  }

  /**
   * ignoreOnce
   * @param {Node|HTMLElement|EventTarget|Window} el
   */
  Xt.ignoreOnce = el => {
    if (el.classList.contains('xt-ignore-once')) {
      requestAnimationFrame(() => {
        // @FIX react when componentDidMount
        requestAnimationFrame(() => {
          // @FIX react when componentDidMount
          el.classList.remove('xt-ignore', 'xt-ignore-once')
        })
      })
    }
  }

  /**
   * get transition or animation time
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {Number} timing Force duration in milliseconds
   * @returns {Number} Time in milliseconds
   */
  Xt.animTime = (el, timing = null) => {
    if (timing || timing === 0) {
      return timing
    } else {
      const style = getComputedStyle(el)
      const transition = parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay)
      const animation = parseFloat(style.animationDuration) + parseFloat(style.animationDelay)
      if (transition || animation) {
        timing = Math.max(transition, animation)
      }
      return timing * 1000
    }
  }

  /**
   * execute function after transition or animation
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {Function} func Function to execute after transition or animation
   * @param {String} suffix Timeout suffix
   * @param {Number} timing Optional force time
   */
  Xt.animTimeout = (el, func, suffix = '', timing = null) => {
    clearTimeout(Xt.dataStorage.get(el, 'xtAnimTimeout' + suffix))
    timing = timing || timing === 0 ? timing : Xt.animTime(el)
    Xt.dataStorage.set(el, 'xtAnimTimeout' + suffix, setTimeout(func, timing))
  }

  /**
   * clear animTimeout
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @param {String} suffix Timeout suffix
   */
  Xt.animTimeoutClear = (el, suffix = '') => {
    clearTimeout(Xt.dataStorage.get(el, 'xtAnimTimeout' + suffix))
  }

  /**
   * return window percent if percent string
   * @param {Number|String} num Number to check
   * @returns {Number}
   */
  Xt.windowPercent = num => {
    if (typeof num === 'string' || num instanceof String) {
      if (num.indexOf('%') !== -1) {
        num = (Xt.windowHeight * parseFloat(num)) / 100
      }
    }
    return num
  }

  /**
   * query array of elements or element
   * @param {Node|HTMLElement|NodeList|Array} element Element to search from
   * @param {String} query Query for querySelectorAll
   * @returns {Array}
   */
  Xt.queryAll = (element, query) => {
    if (!query) {
      return []
    }
    if (!element.length) {
      // search element
      return Xt.arrSingle(element.querySelectorAll(query))
    } else {
      // search array
      const arr = []
      for (const el of element) {
        arr.push(...el.querySelectorAll(query))
      }
      return arr
    }
  }

  /**
   * check element visibility
   * @param {Node|HTMLElement|EventTarget|Window} el Element animating
   * @returns {Boolean}
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
  Xt.eventDelay = (e, element, func, prefix = '', instant = false) => {
    const container = document.documentElement
    if (e && e.type && (e.type === 'resize' || e.type === 'scroll')) {
      const delay = e.detail !== undefined && e.detail.delay !== undefined ? e.detail.delay : instant ? 0 : Xt[e.type + 'Delay']
      if (e.type === 'resize') {
        const w = window.innerWidth
        const h = window.innerHeight
        // multiple calls check
        if (
          (e.detail === undefined || e.detail.force === undefined) && // not when setting delay on event
          Xt.dataStorage.get(container, 'xtEventDelayWidth') === w && // when width changes
          (window.matchMedia('(hover: none)').matches || Xt.dataStorage.get(container, 'xtEventDelayHeight') === h) // when height changes not touch
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
        // func
        func(e)
      } else {
        clearTimeout(Xt.dataStorage.get(element, 'xt' + e.type + prefix + 'Timeout'))
        Xt.dataStorage.set(
          element,
          'xt' + e.type + prefix + 'Timeout',
          setTimeout(() => {
            // func
            func(e)
          }, delay)
        )
      }
    } else {
      // func
      func(e)
    }
  }

  Xt.dataStorage.set(document.documentElement, 'xtEventDelayWidth', window.innerWidth)
  Xt.dataStorage.set(document.documentElement, 'xtEventDelayHeight', window.innerHeight)

  /**
   * animate css properties
   * @param {Node|HTMLElement|EventTarget|Window} element Element to save timeout
   * @param {Array} properties Array of css properties camel case
   * @returns {Object}
   */
  /* USAGE:
  // setup
  Xt.animCss(object, ['backgroundColor', 'borderColor', 'boxShadow'])
  // event
  const animCss = Xt.animCss(object, ['backgroundColor', 'borderColor', 'boxShadow'])
  gsap.set(object, {
    backgroundColor: animCss.backgroundColor.current,
    borderColor: animCss.borderColor.current,
    boxShadow: animCss.boxShadow.current,
  })
  gsap.to(object, {
    backgroundColor: animCss.backgroundColor.final,
    borderColor: animCss.borderColor.final,
    boxShadow: animCss.boxShadow.final,
    duration: Xt.vars.timeTiny,
    ease: 'linear',
  })
  */
  Xt.animCss = (element, properties) => {
    let isInitial = false
    // save style
    let style = Xt.dataStorage.get(element, 'xtAnimCssStyle')
    style = style || Xt.dataStorage.set(element, 'xtAnimCssStyle', getComputedStyle(element))
    // save initial
    for (const property of properties) {
      const initialized = Xt.dataStorage.get(element, 'xtAnimCssInitial' + property)
      if (!initialized) {
        isInitial = true
        Xt.dataStorage.set(element, 'xtAnimCssInitial' + property, style[property])
      }
    }
    // populate return
    if (!isInitial) {
      const obj = {}
      for (const property of properties) {
        obj[property] = {}
        // set current to current style or initial
        obj[property].current = element.style[property] || Xt.dataStorage.get(element, 'xtAnimCssInitial' + property)
      }
      element.style = '' // reset style to get final css value
      for (const property of properties) {
        // set final to final css value
        obj[property].final = style[property]
      }
      return obj
    }
  }

  /**
   * Xt.windowHeight
   * vindow height value only on width resize to fix mobile window height changes
   */

  addEventListener('resize', e => {
    Xt.eventDelay(
      e,
      document.documentElement,
      () => {
        Xt.windowHeightSet()
      },
      'xtWindowHeight' + 'Resize',
      true
    )
  })

  Xt.windowHeightSet = () => {
    Xt.windowHeight = window.innerHeight
    /* https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     * height: 100vh;
     * height: calc(var(--vh, 1vh) * 100);
     */
    document.documentElement.style.setProperty('--vh', Xt.windowHeight * 0.01 + 'px')
  }

  //
}
