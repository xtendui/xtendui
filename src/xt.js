/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
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
  Xt.focusTrapArr = []
  Xt.scrollDelay = false
  Xt.resizeDelay = 75
  Xt.medialoadedDelay = false
  Xt.durationTimescale = 1
  Xt.autoTimescale = 1
  Xt.scrolltoHashforce = null

  //
  // initialization
  //

  /**
   * ready
   * @param {Function} func Function to execute on dom ready
   */
  Xt.ready = func => {
    // no raf or ScrollTrigger bugs initialization
    if (document.readyState === 'complete') {
      func()
    } else {
      const complete = () => {
        if (document.readyState === 'complete') {
          func()
          document.removeEventListener('readystatechange', complete)
        }
      }
      document.addEventListener('readystatechange', complete)
    }
  }

  /**
   * init
   */
  Xt.init = () => {
    Xt.ready(() => {
      Xt.observer.disconnect()
      Xt.observer.observe(document.documentElement, {
        characterData: false,
        attributes: false,
        childList: true,
        subtree: true,
      })
      Xt.mountCheck()
    })
  }

  Xt.init()

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
            // always raf on sequential mounts when moving elements (e.g. mount inside sticky)
            cancelAnimationFrame(Xt.dataStorage.get(added, 'xtObserverFrame'))
            Xt.dataStorage.set(
              added,
              'xtObserverFrame',
              requestAnimationFrame(() => {
                Xt.mountCheck({ added })
              })
            )
          }
        }
        // removed
        for (const removed of mutation.removedNodes) {
          if (removed.nodeType === 1) {
            // always raf on sequential mounts when moving elements (e.g. mount inside sticky)
            cancelAnimationFrame(Xt.dataStorage.get(removed, 'xtObserverFrame'))
            Xt.dataStorage.set(
              removed,
              'xtObserverFrame',
              requestAnimationFrame(() => {
                Xt.unmountCheck({ removed })
              })
            )
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
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.added
   */
  Xt.mountCheck = ({ added = document.documentElement } = {}) => {
    for (const obj of Xt.mountArr) {
      // ignore
      const ignoreStr = obj.ignore ? obj.ignore : obj.ignore === false ? false : '.xt-ignore'
      if (ignoreStr) {
        const ignore = added.closest(ignoreStr)
        if (ignore) {
          Xt.ignoreOnce({ el: ignore }) // fix ignore once for mount when moving
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
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.removed
   */
  Xt.unmountCheck = ({ removed = document.documentElement } = {}) => {
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
   * @param {Object} params
   * @param {String} params.name Component name
   * @param {Node|HTMLElement|EventTarget|Window} params.el Component's element
   * @param {Object} params.self Component' self
   */
  Xt.set = ({ name, el, self } = {}) => {
    Xt.dataStorage.set(el, name, self)
  }

  /**
   * get component
   * @param {Object} params
   * @param {String} params.name Component name
   * @param {Node|HTMLElement|EventTarget|Window} params.el Component's element
   * @return {Object}
   */
  Xt.get = ({ name, el } = {}) => {
    return Xt.dataStorage.get(el, name)
  }

  /**
   * remove component
   * @param {Object} params
   * @param {String} params.name Component name
   * @param {Node|HTMLElement|EventTarget|Window} params.el Component's element
   * @return {Object}
   */
  Xt.remove = ({ name, el } = {}) => {
    return Xt.dataStorage.remove(el, name)
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
  // classBody
  // util to remember classBody state
  //

  Xt.classBody = {
    /**
     * properties
     */
    currents: [],

    /**
     * add classBody currents
     * @param {Object} obj Object
     */
    add: obj => {
      Xt.classBody.currents.push(obj)
    },

    /**
     * remove classBody currents
     * @param {Object} obj Object
     */
    remove: obj => {
      Xt.classBody.currents = Xt.classBody.currents.filter(x => x.c !== obj.c || x.ns !== obj.ns)
    },

    /**
     * get classBody currents
     * @param {Object} obj Object
     * @return {Array} Currents
     */
    get: obj => {
      return Xt.classBody.currents.filter(x => x.c === obj.c)
    },
  }

  //
  // util
  //

  /**
   * friction
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element
   * @param {Object} params.obj Object with x and y values
   * @param {Boolean} params.transform Use transforms instead of position
   */
  Xt.friction = ({ el, obj, transform = true } = {}) => {
    cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionFrame'))
    cancelAnimationFrame(Xt.dataStorage.get(el, 'xtFrictionInitFrame'))
    Xt.dataStorage.set(
      el,
      'xtFrictionInitFrame',
      requestAnimationFrame(() => {
        let xCurrent
        let yCurrent
        if (transform) {
          const translate = Xt.getTranslate({ el })
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
                Xt.friction({ el, obj, transform })
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
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element to check target
   * @return {Array} Values [x, y]
   */
  Xt.getTranslate = ({ el } = {}) => {
    const transArr = []
    const style = getComputedStyle(el)
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
   * @param {Object} params
   * @param {NodeList|Array} params.els Elements to check if contains
   * @param {Node|HTMLElement|EventTarget|Window} params.tr Element to check if contained
   * @return {Boolean}
   */
  Xt.contains = ({ els, tr } = {}) => {
    for (const el of els) {
      if (el.contains(tr)) {
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
   * @param {Object} params
   * @param {Object} params.start object Start object
   * @param {Object} params.reset object Reset object
   * @param {Object} params.check object Check with start object to reset with reset object
   * @return {Object} Merged object
   */
  Xt.mergeReset = ({ start, reset, check } = {}) => {
    const final = start
    for (const [key, value] of Object.entries(check)) {
      if (
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) && // not array
        !value.nodeName && // not HTML element
        value !== window // not window
      ) {
        final[key] = Xt.mergeReset({ start: start[key], reset: reset[key], check: check[key] })
      } else {
        if (start[key] === check[key]) {
          final[key] = reset[key]
        }
      }
    }
    return final
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

  Xt.setScrollbarWidth()

  /**
   * addScript
   * @param {Object} params
   * @param {String} params.url
   * @param {Function} params.callback
   */
  Xt.addScript = ({ url, callback = null } = {}) => {
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
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el
   */
  Xt.ignoreOnce = ({ el } = {}) => {
    if (el.classList.contains('xt-ignore-once')) {
      // fix react when componentDidMount
      requestAnimationFrame(() => {
        el.classList.remove('xt-ignore', 'xt-ignore-once')
      })
    }
  }

  /**
   * requestAnimationFrame
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Function} params.func Function to execute after transition or animation
   * @param {String} params.ns Namespace
   */
  Xt.frame = ({ el, func = null, ns = '' } = {}) => {
    cancelAnimationFrame(Xt.dataStorage.get(el, `${ns}Frame`))
    if (func) {
      // needs one raf
      Xt.dataStorage.set(
        el,
        `${ns}Frame`,
        requestAnimationFrame(() => {
          func()
        })
      )
    }
  }

  /**
   * double requestAnimationFrame
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Function} params.func Function to execute after transition or animation
   * @param {String} params.ns Namespace
   */
  Xt.frameDouble = ({ el, func = null, ns = '' } = {}) => {
    cancelAnimationFrame(Xt.dataStorage.get(el, `${ns}FrameDouble`))
    if (func) {
      // needs two raf or sometimes classes doesn't animate properly
      Xt.dataStorage.set(
        el,
        `${ns}FrameDouble`,
        requestAnimationFrame(() => {
          Xt.dataStorage.set(
            el,
            `${ns}FrameDouble`,
            requestAnimationFrame(() => {
              func()
            })
          )
        })
      )
    }
  }

  /**
   * animation on classes
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {String} params.ns Namespace
   * @param {Number} params.duration Duration
   * @param {Boolean} params.raf Use requestAnimationFrame
   */
  Xt.on = ({ el, ns = '', duration = null, raf = true } = {}) => {
    Xt.animTimeout({ el, ns: `${ns}OnOff` })
    el.classList.add('on')
    el.classList.remove('out')
    el.classList.remove('done')
    const func = () => {
      el.classList.add('in')
      Xt.animTimeout({
        el,
        func: () => {
          el.classList.add('done')
        },
        ns: `${ns}OnOff`,
        duration,
        actionCurrent: 'In',
      })
    }
    if (raf) {
      // needs TWO raf or sequential off/on flickr (e.g. display)
      Xt.frameDouble({ el, func })
    } else {
      // fix need to repeat inside frameDouble in case we cancel
      Xt.frameDouble({ el })
      func()
    }
  }

  /**
   * animation off classes
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {String} params.ns Namespace
   * @param {Number} params.duration Duration
   * @param {Boolean} params.raf Use requestAnimationFrame
   */
  Xt.off = ({ el, ns = '', duration = null, raf = true } = {}) => {
    Xt.animTimeout({ el, ns: `${ns}OnOff` })
    // must be outside inside raf or page jumps (e.g. noqueue)
    el.classList.remove('on', false)
    const func = () => {
      el.classList.remove('in')
      el.classList.add('out')
      el.classList.remove('done')
      Xt.animTimeout({
        el,
        func: () => {
          el.classList.remove('out')
        },
        ns: `${ns}OnOff`,
        duration,
        actionCurrent: 'Out',
      })
    }
    if (raf) {
      // needs TWO raf or sequential off/on flickr (e.g. display)
      Xt.frameDouble({ el, func })
    } else {
      // fix need to repeat inside frameDouble in case we cancel
      Xt.frameDouble({ el })
      func()
    }
  }

  /**
   * execute function after transition or animation
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Function} params.func Function to execute after transition or animation
   * @param {String} params.ns Namespace
   * @param {Number} params.duration Duration
   * @param {String} params.actionCurrent Current action
   */
  Xt.animTimeout = ({ el, func = null, ns = '', duration = null, actionCurrent = null } = {}) => {
    clearTimeout(Xt.dataStorage.get(el, `${ns}AnimTimeout`))
    if (func) {
      duration = Xt.animTime({ el, duration, actionCurrent }) ?? 0
      if (!duration) {
        func()
      } else {
        Xt.dataStorage.set(el, `${ns}AnimTimeout`, setTimeout(func, duration))
      }
    }
  }

  /**
   * get transition or animation time
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Number} params.duration Duration
   * @param {String} params.actionCurrent Current action
   */
  Xt.animTime = ({ el, duration = null, actionCurrent = null } = {}) => {
    const custom =
      (actionCurrent && el.getAttribute(`data-xt-duration-${actionCurrent}`)) || el.getAttribute('data-xt-duration')
    if (custom) {
      // if not number return the string
      return isNaN(parseFloat(custom)) ? custom : parseFloat(custom) / Xt.durationTimescale
    } else if (typeof duration === 'function') {
      return duration
    } else if (duration || duration === 0) {
      return duration / Xt.durationTimescale
    }
  }

  /**
   * get delay time
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Number} params.duration Duration
   * @param {String} params.actionCurrent Current action
   */
  Xt.delayTime = ({ el, duration = null, actionCurrent = null } = {}) => {
    const custom =
      (actionCurrent && el.getAttribute(`data-xt-delay-${actionCurrent}`)) || el.getAttribute('data-xt-delay')
    if (custom) {
      // if not number return the string
      return isNaN(parseFloat(custom)) ? custom : parseFloat(custom) / Xt.durationTimescale
    } else if (typeof duration === 'function') {
      return duration
    } else if (duration || duration === 0) {
      return duration / Xt.durationTimescale
    }
  }

  /**
   * query array of elements or element
   * @param {Object} params
   * @param {Node|HTMLElement|NodeList|Array} params.els Element to search from
   * @param {String} params.query Query for querySelectorAll
   * @return {Array}
   */
  Xt.queryAll = ({ els, query } = {}) => {
    // not when no query or empty array
    if (!query || els.length === 0) {
      return []
    }
    if (!els.length) {
      // search element
      return els.querySelectorAll(query)
    } else {
      // search array
      const arr = []
      for (const el of els) {
        arr.push(...el.querySelectorAll(query))
      }
      return arr
    }
  }

  /**
   * check element visibility
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @return {Boolean}
   */
  Xt.visible = ({ el } = {}) => {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
  }

  /**
   * Fix resize event multiple calls and adds delay on resize and scroll events
   * @param {Object} params
   * @param {Event|Object} params.e Event
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {Function} params.func Function to execute after transition or animation
   * @param {String} params.ns Namespace
   * @param {Number} params.duration Duration
   */
  Xt.eventDelay = ({ event, element, func = null, ns = '', duration = null } = {}) => {
    cancelAnimationFrame(Xt.dataStorage.get(element, `${ns}eventDelayFrame`))
    clearTimeout(Xt.dataStorage.get(element, `${ns}eventDelayTimeout`))
    if (func) {
      if (event) {
        const container = document.documentElement
        let delay = event?.detail?.delay
        delay = duration ?? delay ? delay : Xt[`${event.type}Delay`]
        if (event.type === 'resize') {
          const w = window.innerWidth
          const h = window.innerHeight
          // multiple calls check
          if (
            !event?.detail?.force && // not when setting delay on event
            Xt.dataStorage.get(container, 'xtEventDelayWidth') === w && // when width changes
            (matchMedia('(hover: none)').matches || Xt.dataStorage.get(container, 'xtEventDelayHeight') === h) // when height changes not touch
          ) {
            // only width no height because it changes on scroll on mobile
            return
          }
          // save after a frame to execute all eventDelay
          cancelAnimationFrame(Xt.dataStorage.get(container, `${ns}eventDelayFrame`))
          Xt.dataStorage.set(
            container,
            `${ns}eventDelayFrame`,
            requestAnimationFrame(() => {
              Xt.dataStorage.set(container, 'xtEventDelayWidth', w)
              Xt.dataStorage.set(container, 'xtEventDelayHeight', h)
            })
          )
        }
        // delay
        if (!delay) {
          Xt.dataStorage.set(element, `${ns}eventDelayFrame`, requestAnimationFrame(func.bind(event)))
        } else {
          Xt.dataStorage.set(
            element,
            `${ns}eventDelayTimeout`,
            setTimeout(() => {
              // func
              func(event)
            }, delay)
          )
        }
      } else {
        Xt.dataStorage.set(element, `${ns}eventDelayFrame`, requestAnimationFrame(func.bind(event)))
      }
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
      ns: 'xtWindowHeightResize',
      duration: 0,
      func: () => {
        Xt.innerHeightSet()
      },
    })
  })

  Xt.innerHeightSet()

  //
}
