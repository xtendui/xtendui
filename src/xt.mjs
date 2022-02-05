/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import DOMPurify from 'dompurify/dist/purify.es.js'

//
// constructor
//

export const Xt = {}
Xt.DOMPurify = DOMPurify

if (typeof window !== 'undefined') {
  //
  // global
  //

  if (window.XtSetGlobal) {
    global[typeof window.XtSetGlobal === 'string' ? window.XtSetGlobal : 'Xt'] = Xt
  }

  //
  // vars
  //

  Xt._running = {}
  Xt._currents = {} // Xt currents based on namespace (so shared between Xt objects)
  Xt.options = {}
  Xt._mountArr = []
  Xt._unmountArr = []
  Xt.resizeDelay = 200
  Xt.medialoadedDelay = false
  Xt.durationTimescale = 1
  Xt.autoTimescale = 1
  Xt.scrolltoHashforce = null
  Xt.formScrollWindowFactor = 0.2

  //
  // initialization
  //

  /**
   * ready
   * @param {Object} params
   * @param {Function} params.func Function to execute
   * @param {String} params.state States separated by space, can be 'loading' 'interactive' 'complete'
   * @param {Function} params.raf Use requestAnimationFrame if the state is instantly matched
   */
  Xt.ready = ({ func, state = 'interactive complete', raf = false } = {}) => {
    const states = [...state.split(' ')]
    if (states.includes(document.readyState)) {
      if (raf) {
        // raf because we need all functions defined after mount (e.g. all html demos with mount)
        requestAnimationFrame(() => {
          func()
        })
      } else {
        func()
      }
    } else {
      const interactive = () => {
        if (states.includes(document.readyState)) {
          func()
          // needs to be removed or it will call multiple times
          document.removeEventListener('readystatechange', interactive)
        }
      }
      document.addEventListener('readystatechange', interactive)
    }
  }

  //
  // mutationObserver
  //

  /**
   * init
   */
  Xt._mutationObserver = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // added
        for (const added of mutation.addedNodes) {
          if (added.nodeType === 1) {
            Xt._mountCheck({ added })
          }
        }
        // removed
        for (const removed of mutation.removedNodes) {
          if (removed.nodeType === 1) {
            Xt._unmountCheck({ removed })
          }
        }
      }
    }
  })

  Xt.ready({
    func: () => {
      Xt._mutationObserver.disconnect()
      Xt._mutationObserver.observe(document.documentElement, {
        characterData: false,
        attributes: false,
        childList: true,
        subtree: true,
      })
    },
  })

  /**
   * refresh
   */
  Xt.refresh = () => {
    Xt._mountCheck()
  }

  /**
   * mount
   * @param {Object} obj
   */
  Xt.mount = obj => {
    Xt._mountArr.push(obj)
    Xt.ready({
      raf: obj.raf,
      func: () => {
        Xt._mountCheck({ obj })
      },
    })
  }

  /**
   * unmount
   * @param {Object} obj
   */
  Xt.unmount = obj => {
    Xt._unmountArr.push(obj)
  }

  /**
   * mountCheck
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.added
   * @param {Object} params.obj
   */
  Xt._mountCheck = ({ added = document.documentElement, obj } = {}) => {
    // fix multiple mount
    // we do not mount if not in document, it happends for example when you mount ScrollTrigger after overlay menu
    if (!added.closest('html')) {
      return
    }
    const arr = obj ? [obj] : Xt._mountArr
    for (const obj of arr) {
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
          // root
          if (obj.root && !obj.root.contains(ref)) {
            continue
          }
          // ignore
          const ignoreStr = obj.ignoreMount ?? '.xt-ignore'
          if (ignoreStr && ref.closest(ignoreStr)) {
            continue
          }
          // fix multiple mount
          // we don't remount nodes not unmounted
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
              ref,
              root: obj.root,
              ignoreUnmount: obj.ignoreUnmount,
              unmount: call,
              unmountRemove: function () {
                // fix multiple mount
                obj.done = obj.done.filter(x => x !== ref)
                // unmount remove
                Xt._unmountArr = Xt._unmountArr.filter(x => {
                  return x !== this // this is unmount object using function
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
  Xt._unmountCheck = ({ removed = document.documentElement } = {}) => {
    // fix multiple mount
    // we do not mount if in document, it happends for example when you move nodes
    if (removed.closest('html')) {
      return
    }
    for (const obj of Xt._unmountArr) {
      // check
      if (removed === obj.ref || removed.contains(obj.ref)) {
        // root
        if (obj.root && !obj.root.contains(obj.ref)) {
          continue
        }
        // ignore
        const ignoreStr = obj.ignoreUnmount ?? '.xt-ignore'
        if (ignoreStr && obj.ref.closest(ignoreStr)) {
          continue
        }
        // call
        obj.unmount({ obj })
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
  Xt._set = ({ name, el, self } = {}) => {
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
  Xt._remove = ({ name, el } = {}) => {
    return Xt.dataStorage.remove(el, name)
  }

  //
  // methods
  //

  /**
   * init matches
   * @param {Object} params
   * @param {Object} params.self Self object
   * @param {Object} params.optionsInitial Initial options
   */
  Xt._initMatches = ({ self, optionsInitial } = {}) => {
    const options = self.options
    // only on initialization not on reinit because the mql reinit
    if (self.initial === undefined) {
      // remove matches
      if (self.matches) {
        Xt._removeMatches({ self, optionsInitial })
      }
      // matches
      if (options.matches) {
        self.matches = []
        const mqs = Object.entries(options.matches)
        if (mqs.length) {
          for (const [key, value] of mqs) {
            // matches
            const mql = matchMedia(key)
            self.matches.push({ mql, value })
            Xt._eventMatches({ self, mql, value, skipReinit: true, optionsInitial })
            mql.addEventListener('change', Xt._eventMatches.bind(null, { self, mql, value, optionsInitial }))
          }
        }
      }
    }
  }

  /**
   * match
   * @param {Object} params
   * @param {Object} params.self Self object
   * @param {Object} params.mql Match media query list
   * @param {Object} params.value Match media value
   * @param {Boolean} params.skipReinit Skip reinit
   */
  Xt._eventMatches = ({ self, mql, value, skipReinit = false, optionsInitial } = {}) => {
    // fix NEEDED for chrome not removing mql event listener
    if (!self.container.closest('html')) {
      return
    }
    // replace options
    if (mql.matches) {
      // set options value
      self.options = Xt.merge([self.options, value])
    } else {
      // set options value from initial
      self.options = Xt.mergeReset({ start: self.options, reset: optionsInitial, check: value })
    }
    // reinit one time only with raf
    if (!skipReinit) {
      // reinit
      Xt.frame({
        el: self.container,
        ns: `${self.ns}MatchFrame`,
        func: () => {
          Xt._eventReinit({ self })
        },
      })
    }
  }

  /**
   * removeMatches
   * @param {Object} params
   * @param {Object} params.self Self object
   */
  Xt._removeMatches = ({ self, optionsInitial } = {}) => {
    // remove matches
    if (self.matches?.length) {
      for (const obj of self.matches) {
        // matches
        const mql = obj.mql
        const value = obj.value
        mql.removeEventListener('change', Xt._eventMatches.bind(null, { self, mql, value, optionsInitial }))
      }
    }
  }

  /**
   * reinit
   * @param {Object} params
   * @param {Object} params.self Self object
   * @param {Event} e
   */
  Xt._eventReinit = ({ self } = {}, e) => {
    // triggering e.detail.container
    if (!e?.detail?.container || e?.detail?.container.contains(self.container)) {
      // handler
      self.reinit()
    }
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

  Xt._classBody = {
    /**
     * properties
     */
    currents: [],

    /**
     * add classBody currents
     * @param {Object} obj Object
     */
    add: obj => {
      Xt._classBody.currents.push(obj)
    },

    /**
     * remove classBody currents
     * @param {Object} obj Object
     */
    remove: obj => {
      Xt._classBody.currents = Xt._classBody.currents.filter(x => x.c !== obj.c || x.ns !== obj.ns)
    },

    /**
     * get classBody currents
     * @param {Object} obj Object
     * @return {Array} Currents
     */
    get: obj => {
      return Xt._classBody.currents.filter(x => x.c === obj.c)
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
  Xt._friction = ({ el, obj, transform = true } = {}) => {
    Xt.frame({
      el,
      ns: `xtFrictionFrame`,
    })
    Xt.frame({
      el,
      ns: `xtFrictionInitFrame`,
      func: () => {
        // fix loop when not visible
        if (Xt.visible({ el })) {
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
            Xt.frame({
              el,
              ns: `xtFrictionFrame`,
              func: () => {
                if (Math.abs(xDist) >= frictionLimit || Math.abs(yDist) >= frictionLimit) {
                  // continue friction
                  Xt._friction({ el, obj, transform })
                } else {
                  // next interaction instant
                  Xt.dataStorage.remove(el, 'xtFrictionX')
                  Xt.dataStorage.remove(el, 'xtFrictionY')
                }
              },
            })
          }
        }
      },
    })
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
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} params.els Elements to check if contains
   * @param {Node|HTMLElement|EventTarget|Window} params.tr Element to check if contained
   * @return {Boolean}
   */
  Xt.contains = ({ els, tr } = {}) => {
    if (els instanceof HTMLElement) {
      return els.contains(tr)
    }
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
  Xt.uniqueId = () => {
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
          if (Array.isArray(value)) {
            // if array merge arrays (e.g. options.popperjs modifiers)
            final[key] = final[key] ? final[key] : []
            final[key].push(...value)
          } else if (
            value !== null &&
            typeof value === 'object' &&
            !value.nodeName && // not HTML element
            value !== window // not window
          ) {
            // if object deep merge
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
   * Purify html string
   * @param {String} str String
   * @return {String} Purified string
   */

  Xt.sanitize = str => {
    return DOMPurify.sanitize(str)
  }

  /**
   * Create HTML element from html string
   * @param {Object} params
   * @param {Boolean} params.sanitize Sanitize
   * @param {String} params.str String (only 1 root html tag)
   * @return {Node} HTML elements
   */
  Xt.node = ({ sanitize = true, str }) => {
    const template = document.createElement('template')
    template.innerHTML = sanitize ? Xt.sanitize(str.trim()) : str.trim()
    return template.content.firstChild
  }

  /**
   * Create HTML elements from html string
   * @param {Boolean} params.sanitize Sanitize
   * @param {String} params.str Html String
   * @return {Node} HTML elements
   */
  Xt.nodes = ({ sanitize = true, str }) => {
    const template = document.createElement('template')
    template.innerHTML = sanitize ? Xt.sanitize(str.trim()) : str.trim()
    return template.content.childNodes
  }

  /**
   * Add script to document
   * @param {Object} params
   * @param {String} params.url
   * @param {Function} params.callback
   * @param {Boolean} params.defer
   * @param {Boolean} params.async
   */
  Xt.script = ({ url, callback, defer = true, async = true } = {}) => {
    if (!document.querySelector(`script[src="${url}"]`)) {
      const asyncfix = async
      const script = document.createElement('script')
      if (callback) {
        script.onload = callback
      }
      script.type = 'text/javascript'
      script.src = url
      script.defer = defer
      script.async = asyncfix
      document.body.append(script)
    }
  }

  /**
   * requestAnimationFrame
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {String} params.ns Namespace
   * @param {Function} params.func Function to execute after transition or animation
   */
  Xt.frame = ({ el, ns = '', func } = {}) => {
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
   * @param {String} params.ns Namespace
   * @param {Function} params.func Function to execute after transition or animation
   */
  Xt.frameDouble = ({ el, ns = '', func } = {}) => {
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
   * @param {Boolean} params.initial Instant animations with initial
   * @param {Function} params.callback
   */
  Xt.on = ({ el, ns = '', duration, raf = true, initial = false, callback } = {}) => {
    Xt.animTimeout({ el, ns })
    el.classList.add('on')
    el.classList.remove('out')
    const func = () => {
      el.classList.add('in')
      el.classList.remove('done')
      Xt.animTimeout({
        el,
        ns,
        duration,
        actionCurrent: 'In',
        func: () => {
          el.classList.add('done')
          if (callback) {
            callback()
          }
        },
      })
    }
    if (raf) {
      // needs TWO raf or sequential off/on flickr (e.g. display)
      Xt.frameDouble({ el, ns, func })
    } else {
      // fix need to repeat inside frameDouble in case we cancel
      Xt.frameDouble({ el, ns })
      func()
    }
    // initial
    if (initial) {
      el.classList.add('initial')
    }
    Xt.frameDouble({
      el,
      ns: `${ns}Initial`,
      func: () => {
        if (initial) {
          el.classList.remove('initial')
        }
      },
    })
  }

  /**
   * animation off classes
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {String} params.ns Namespace
   * @param {Number} params.duration Duration
   * @param {Boolean} params.raf Use requestAnimationFrame
   * @param {Boolean} params.initial Instant animations with initial
   * @param {Function} params.callback
   */
  Xt.off = ({ el, ns = '', duration, raf = true, initial = false, callback } = {}) => {
    Xt.animTimeout({ el, ns })
    // must be outside inside raf or page jumps (e.g. noqueue)
    el.classList.remove('on')
    const func = () => {
      el.classList.remove('in', 'done')
      el.classList.add('out')
      Xt.animTimeout({
        el,
        ns,
        duration,
        actionCurrent: 'Out',
        func: () => {
          el.classList.remove('out')
          if (callback) {
            callback()
          }
        },
      })
    }
    if (raf) {
      // needs TWO raf or sequential off/on flickr (e.g. backdrop megamenu)
      Xt.frameDouble({ el, ns, func })
    } else {
      // fix need to repeat inside frameDouble in case we cancel
      Xt.frameDouble({ el, ns })
      func()
    }
    // initial
    if (initial) {
      el.classList.add('initial')
    }
    Xt.frameDouble({
      el,
      ns: `${ns}Initial`,
      func: () => {
        if (initial) {
          el.classList.remove('initial')
        }
      },
    })
  }

  /**
   * execute function after transition or animation
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Element animating
   * @param {String} params.ns Namespace
   * @param {Number} params.duration Duration
   * @param {String} params.actionCurrent Current action
   * @param {Function} params.func Function to execute after transition or animation
   */
  Xt.animTimeout = ({ el, ns = '', duration, actionCurrent, func } = {}) => {
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
  Xt.animTime = ({ el, duration, actionCurrent } = {}) => {
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
  Xt.delayTime = ({ el, duration, actionCurrent } = {}) => {
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
   * @param {NodeList|Array|Node|HTMLElement|EventTarget|Window} params.els Element to search from
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
      return Array.from(els.querySelectorAll(query))
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
   * Set scrollbar width of document
   */
  Xt._setScrollbarWidth = () => {
    if (Xt.scrollbarWidth === undefined) {
      const scrollbarWidthHandler = Xt.dataStorage.put(window, 'resize/scrollbar', Xt._setScrollbarWidth)
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

  Xt.ready({
    func: () => {
      Xt._setScrollbarWidth()
    },
  })

  /**
   * resize.xt
   */

  addEventListener('resize', e => {
    // we check also if outerWidth changes because on android doesn't change with ScrollTriggers
    // we check also innerWidth for resize desktop (e.g. inspect and resize)
    const w = window.innerWidth + window.outerWidth
    const h = window.innerHeight + window.outerHeight
    if (
      !e?.detail?.force && // not when setting delay on event
      Xt.dataStorage.get(window, 'xtEventDelayWidth') === w && // when width changes
      (matchMedia('(hover: none)').matches || Xt.dataStorage.get(window, 'xtEventDelayHeight') === h) // when height changes not touch
    ) {
      // only width no height because it changes on scroll on mobile
      return
    }
    Xt.dataStorage.set(
      window,
      `eventDelaySaveTimeout`,
      setTimeout(() => {
        Xt.dataStorage.set(window, 'xtEventDelayWidth', w)
        Xt.dataStorage.set(window, 'xtEventDelayHeight', h)
        dispatchEvent(new CustomEvent('resize.xt', { detail: e?.detail }))
      }, Xt.resizeDelay)
    )
  })

  Xt.dataStorage.set(window, 'xtEventDelayWidth', window.innerWidth + window.outerWidth)
  Xt.dataStorage.set(window, 'xtEventDelayHeight', window.innerHeight + window.outerHeight)

  /**
   * Xt._innerHeightSet and --vh
   */
  Xt._innerHeightSet = () => {
    Xt.innerHeight = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${Xt.innerHeight * 0.01}px`)
  }

  addEventListener('resize.xt', () => {
    Xt._innerHeightSet()
  })

  Xt.ready({
    func: () => {
      Xt._innerHeightSet()
    },
  })

  //
  // plugins
  //

  /**
   * scrolltriggerRerfreshFix fixes refresh on touch screen not on vertical resize
   * @param {Object} params
   * @param {Function} params.ScrollTrigger
   */
  Xt.scrolltriggerRerfreshFix = ({ ScrollTrigger } = {}) => {
    // removed resize we trigger it manually
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    })
    // window resize
    const resize = () => {
      ScrollTrigger.refresh()
    }
    removeEventListener('resize.xt', resize)
    addEventListener('resize.xt', resize)
  }

  //
}
