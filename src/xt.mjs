/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

//
// constructor
//

export const Xt = {}

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
  Xt.resizeSkip = () => matchMedia('(hover: none), (pointer: coarse)').matches
  Xt.resizeDelay = 200
  Xt.medialoadedDelay = 200
  Xt.durationTimescale = 1
  Xt.autoTimescale = 1
  Xt.scrolltoHashforce = null
  Xt.formScrollWindowFactor = 0.2
  Xt._observerArr = []
  Xt.observer = null
  Xt._observerOptions = { root: null, threshold: [0.001] }
  Xt.observerCheck = entry => {
    return entry.intersectionRatio > 0
  }
  Xt._supports_content_visibility = CSS.supports('content-visibility', 'hidden')

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
    const states = state.split(' ')
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

  /**
   * mount
   * @param {Object} obj
   * @param {Boolean} perf Use setTimeout 0
   */
  Xt.mount = (obj, perf = true) => {
    Xt._mountArr.push(obj)
    Xt.ready({
      raf: obj.raf,
      func: () => {
        // after perf or Xt._intersectionObserverInit doesn't work (e.g. alpinejs template)
        Xt.perf({
          func: () => {
            Xt._mountCheck({ obj, perf })
          },
        })
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
   * @param {Object} params.perf
   */
  Xt._mountCheck = ({ added = document.documentElement, obj, perf } = {}) => {
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
          Xt.perf({
            skip: !perf,
            func: () => {
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
            },
          })
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
   * intersection observer
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.container DOM element
   * @param {Promise} params.promise Promise to resolve when container is inside viewport
   * @param {Function} params.func Function to resolve when container is inside viewport
   * @param {Boolean} params.observer If load with IntersectionObserver
   * @param {Function} params.id Id for observer removal
   */
  Xt.observe = ({ container, promise, func, observer, id } = {}) => {
    if (func) {
      observer = observer ?? Xt.observer ?? true
    } else {
      // we execute instantly if not visible because can be in unique mode etc.. DO NOT USE Xt.visible it bugs demo fullscreen
      observer = observer ?? Xt.observer ?? container.offsetHeight > 0
    }
    if (observer) {
      return new Promise(resolve => {
        Xt._observerArr.push({
          container,
          resolve,
          promise,
          func,
          id,
        })
        Xt._intersectionObserver.observe(container)
      })
    } else {
      if (func) {
        func(true)
      }
      if (promise) {
        return new Promise(resolve => {
          resolve(promise)
        })
      }
    }
  }

  /**
   * intersection observer disconnect
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.container DOM element
   * @param {Function} params.id Id for observer removal
   */
  Xt.unobserve = ({ container, id } = {}) => {
    Xt._observerArr = Xt._observerArr.filter(x => x.id !== id || x.container !== container)
    // keepAlive if there is still some containers
    const keepAlive = Xt._observerArr.some(x => x.container === container)
    if (!keepAlive) {
      Xt._intersectionObserver.unobserve(container)
    }
  }

  /**
   * intersection observer has already
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.container DOM element
   * @param {Function} params.id Id to remove observer
   */
  Xt.hasobserve = ({ container, id } = {}) => {
    return Xt._observerArr.some(x => x.id === id && x.container === container)
  }

  /**
   * set component
   * @param {Object} params
   * @param {String} params.name Component name
   * @param {Node|HTMLElement|EventTarget|Window} params.el Component's element
   * @param {Promise} params.selfPromise Promise with argument self
   */
  Xt._set = ({ name, el, selfPromise } = {}) => {
    Xt.dataStorage.set(el, name, selfPromise)
  }

  /**
   * get component
   * @param {Object} params
   * @param {String} params.name Component name
   * @param {Node|HTMLElement|EventTarget|Window} params.el Component's element
   * @param {Boolean} params.observer If load with IntersectionObserver
   * @return {Object}
   */
  Xt.get = ({ name, el } = {}) => {
    let promise = Xt.dataStorage.get(el, name)
    if (!promise) {
      promise = new Promise(resolve => {
        const setup = () => {
          Xt.dataStorage.get(el, name).then(selfPromise => {
            resolve(selfPromise)
          })
        }
        // this is the order: Xt._set before self._init and Xt.get listen to setup.xt to have self variables ready
        el.addEventListener(`setup.xt.${name.split('-').pop()}`, setup, { once: true })
      })
    }
    return promise
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
            if (mql.addEventListener) {
              mql.addEventListener('change', Xt._eventMatches.bind(null, { self, mql, value, optionsInitial }))
            } else {
              mql.addListener(Xt._eventMatches.bind(null, { self, mql, value, optionsInitial }))
            }
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
        if (mql.removeEventListener) {
          mql.removeEventListener('change', Xt._eventMatches.bind(null, { self, mql, value, optionsInitial }))
        } else {
          mql.removeListener(Xt._eventMatches.bind(null, { self, mql, value, optionsInitial }))
        }
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

  /**
   * load
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.container DOM element
   * @param {Object} params.name Class Name
   * @param {Object} params.suffix Class suffix
   * @param {Boolean} params.observer If load with IntersectionObserver
   */
  Xt._load = ({ container, name, suffix, observer } = {}) => {
    let promise
    if (!Xt[name].loaded[name]) {
      promise = import(`./modules/${name.toLowerCase()}${suffix}.mjs`).then(module => {
        if (!Xt[name].loaded[name]) {
          Xt[name].loaded[name] = true
          Object.setPrototypeOf(Xt[name].prototype, module[`${name}${suffix}`].prototype)
        }
      })
    } else {
      promise = Promise.resolve()
    }
    return Xt.observe({ container, promise, observer })
  }

  //
  // dataStorage
  // map storage for HTML elements
  //

  Xt.dataStorage = {
    /**
     * properties
     */
    _storage: new WeakMap(),

    /**
     * set key/obj pair on element's map
     * @param {Node|HTMLElement|EventTarget|Window} el
     * @param {String} key
     * @param {*} obj
     * @return {*}
     */
    set: (el, key, obj) => {
      if (!el) return
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
      if (!getEl.size) {
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
    return Xt.sanitizeFnc ? Xt.sanitizeFnc(str) : str
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
        }),
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
            }),
          )
        }),
      )
    }
  }

  /**
   * perf
   * @param {Function} params.func Function to execute after setTimeout 0
   * @param {Boolean} params.skip Skip setTimeout 0
   */
  Xt.perf = ({ func, skip } = {}) => {
    if (skip) {
      func()
    } else {
      setTimeout(() => {
        func()
      }, 0)
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
    let visible = true
    if (el.checkVisibility) {
      visible = el.checkVisibility()
    }
    if (visible) {
      visible = el.offsetHeight > 0 || el.getClientRects().length > 0
    }
    return visible
  }

  /**
   * Set scrollbar width of document
   */
  Xt._setScrollbarWidth = () => {
    Xt.perf({
      func: () => {
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
      },
    })
  }

  Xt.ready({
    func: () => {
      Xt.perf({
        func: () => {
          Xt._setScrollbarWidth()
        },
      })
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
      (Xt.resizeSkip() || Xt.dataStorage.get(window, 'xtEventDelayHeight') === h) // when height changes not touch
    ) {
      // only width no height because it changes on scroll on mobile
      return
    }
    clearTimeout(Xt.dataStorage.get(window, `eventDelaySaveTimeout`))
    Xt.dataStorage.set(
      window,
      `eventDelaySaveTimeout`,
      setTimeout(() => {
        Xt.dataStorage.set(window, 'xtEventDelayWidth', w)
        Xt.dataStorage.set(window, 'xtEventDelayHeight', h)
        dispatchEvent(new CustomEvent('resize.xt', { detail: e?.detail }))
      }, Xt.resizeDelay),
    )
  })

  Xt.dataStorage.set(window, 'xtEventDelayWidth', window.innerWidth + window.outerWidth)
  Xt.dataStorage.set(window, 'xtEventDelayHeight', window.innerHeight + window.outerHeight)

  /**
   * Xt._innerHeightSet
   */
  Xt._innerHeightSet = () => {
    Xt.innerHeight = window.innerHeight
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
    Xt.ready({
      func: () => {
        Xt.frame({
          func: () => {
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
          },
        })
      },
    })
  }

  //
  // mutationObserver
  //

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

  //
  // intersectionObserver
  //

  Xt._intersectionObserverInit = () => {
    Xt._intersectionObserver = new IntersectionObserver(function (entries, observer) {
      for (const entry of entries) {
        const container = entry.target
        if (Xt.observerCheck(entry)) {
          const objects = Xt._observerArr.filter(x => x.container === container)
          // keepAlive if there is a func otherwise we don't need observer anymore
          const keepAlive = objects.some(x => x.func)
          if (!keepAlive) {
            observer.unobserve(container)
            Xt._observerArr = Xt._observerArr.filter(x => x.container !== container)
          }
          // logic
          for (const obj of objects) {
            if (obj.func) {
              obj.func(true)
            }
            if (obj.resolve) {
              obj.resolve(obj.promise)
            }
          }
        } else {
          const objects = Xt._observerArr.filter(x => x.container === container)
          const keepAlive = objects.some(x => x.func)
          if (keepAlive) {
            // logic
            for (const obj of objects) {
              if (obj.func) {
                obj.func(false)
              }
            }
          }
        }
      }
    }, Xt._observerOptions)
  }

  //
  // init
  //

  Xt.ready({
    func: () => {
      // no perf or github test gives error "Cannot read properties of undefined (reading 'observe')"
      Xt._intersectionObserverInit()
      Xt.perf({
        func: () => {
          // after perf or Xt._intersectionObserverInit doesn't work (e.g. alpinejs template)
          Xt._mutationObserver.disconnect()
          Xt._mutationObserver.observe(document.documentElement, {
            characterData: false,
            attributes: false,
            childList: true,
            subtree: true,
          })
        },
      })
    },
  })
}
