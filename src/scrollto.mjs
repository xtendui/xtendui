/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'

/**
 * Scrollto
 */
class Scrollto {
  /**
   * fields
   */
  _optionsCustom
  _optionsDefault
  _componentNs
  _classes
  componentName
  ns
  options
  initial
  disabled = false
  container
  hashchange
  target
  scrollers
  scroller
  position
  space
  duration

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self._optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self._componentNs = self.componentName.replace('-', '.')
    // init
    self._initVars()
    self._initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  _initVars() {
    const self = this
    // options
    self._optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
    self.options = Xt.merge([self._optionsDefault, self._optionsCustom])
  }

  /**
   * init logic
   */
  _initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt._set({ name: self.componentName, el: self.container, self })
    // namespace
    self.ns = self.ns ?? Xt.uniqueId()
    // vars
    self.initial = true
    // class
    self._classes = options.class ? [...options.class.split(' ')] : []
    // click
    const changeHandler = Xt.dataStorage.put(self.container, `click/${self.ns}`, self._eventChange.bind(self, {}))
    self.container.addEventListener('click', changeHandler)
    // scrollto
    const scrolltoHandler = Xt.dataStorage.put(window, `scrollto/${self.ns}`, self._eventScrollto.bind(self, {}))
    addEventListener(`scrollto.trigger.${self._componentNs}`, scrolltoHandler, true)
    // hash
    const hashHandler = Xt.dataStorage.put(
      window,
      `hashchange/${self.ns}`,
      self._eventChange.bind(self).bind(self, { hashchange: true })
    )
    addEventListener('hashchange', hashHandler)
    // scroll
    self.scrollers = [document.scrollingElement, ...document.querySelectorAll(options.scrollers)].reverse() // need reverse for proper activation
    for (const scroller of self.scrollers) {
      if (scroller) {
        const scrollHandler = Xt.dataStorage.put(
          scroller,
          `scroll/${self.ns}`,
          self._eventActivationHandler.bind(self).bind(self, { scroller })
        )
        const events = options.events ? [...options.events.split(' ')] : []
        if (scroller === document.scrollingElement) {
          for (const event of events) {
            addEventListener(event, scrollHandler)
          }
        } else {
          for (const event of events) {
            scroller.addEventListener(event, scrollHandler)
          }
        }
      }
    }
    // need readyState complete to properly scroll after page load browsers scrolling
    Xt.ready({
      state: 'complete',
      func: () => {
        // init
        // needs frameDouble after ondone
        Xt.frameDouble({
          el: self.container,
          ns: `${self.ns}Init`,
          func: () => {
            // initial needs to be inside raf for content added (e.g. react)
            self._initStart()
            // initialized class
            self.container.setAttribute(`data-${self.componentName}-init`, '')
            // dispatch event
            self.container.dispatchEvent(new CustomEvent(`init.${self._componentNs}`))
            self.initial = false
            // debug
            if (options.debug) {
              // eslint-disable-next-line no-console
              console.debug(`${self.componentName} init`, self)
            }
          },
        })
      },
    })
  }

  /**
   * init start
   */
  _initStart() {
    const self = this
    // initial scrollto
    self._eventStart()
    // initial activation
    for (const scroller of self.scrollers) {
      if (scroller) {
        self._eventActivationHandler({ scroller })
      }
    }
  }

  //
  // methods
  //

  /**
   * start trigger current location hash
   */
  _eventStart() {
    const self = this
    const options = self.options
    // hash trigger
    const hash = location.hash
    if (hash) {
      const el = self.container.querySelector(options.anchors.replace('{hash}', hash))
      if (el) {
        self._eventChange({ el })
      }
    }
  }

  /**
   * scrollto
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el element
   * @param {Node|HTMLElement|EventTarget|Window} params.tr target
   * @param {Event} e
   */
  _eventScrollto({ el, tr } = {}, e) {
    const self = this
    const options = self.options
    // hashchange
    self.hashchange = el ? self.hashchange : false
    // element
    el = el ?? e.target
    // not null and HTML element and not window
    if (el && el.nodeName && el !== window) {
      self.target = tr ?? el
      if (self.target) {
        // current scroll
        for (const scroller of self.scrollers) {
          if (scroller) {
            if (scroller.contains(self.target)) {
              self.scroller = scroller
              break
            }
          }
        }
        // openauto.trigger.xt
        if (options.hash || el.getAttribute('data-xt-scrollto-hash')) {
          self.target.dispatchEvent(new CustomEvent('openauto.trigger.xt'))
        }
        // logic
        self._eventScrolltoLogic()
      }
    }
  }

  /**
   * scrollto logic
   */
  _eventScrolltoLogic() {
    const self = this
    const options = self.options
    // fix when multiple self.targets use only visible (e.g. scrollto: 'elements')
    if (Xt.visible({ el: self.target })) {
      // force no hashchange
      self.hashchange = Xt.scrolltoHashforce ?? self.hashchange
      Xt.scrolltoHashforce = null
      // vars
      self.position = options.position({ self })
      self.space = options.space({ self })
      self.duration = options.duration({ self })
      self.position = self.position - self.space
      // val
      const min = 0
      const max = self.scroller.scrollHeight - self.scroller.clientHeight
      self.position = self.position < min ? min : self.position
      self.position = self.position > max ? max : self.position
      // fix activate also if scroll position remains the same
      if (self.scroller.scrollTop === self.position) {
        self.scroller.dispatchEvent(new CustomEvent('scroll'))
      }
      // dispatch event
      self.container.dispatchEvent(new CustomEvent(`scrollto.${self._componentNs}`))
    }
  }

  /**
   * change
   * @param {Object} params
   * @param {Boolean} params.hashchange
   * @param {Node|HTMLElement|EventTarget|Window} params.el Change element
   * @param {Event} e
   */
  _eventChange({ hashchange = false, el }, e) {
    const self = this
    const options = self.options
    // hashchange
    self.hashchange = false
    if (hashchange) {
      self.hashchange = true
      const hash = location.hash
      const elCheck = self.container.querySelector(options.anchors.replace('{hash}', hash))
      // do not listen to hash change when no hash on element
      if (elCheck) {
        if (options.hash || elCheck.getAttribute('data-xt-scrollto-hash')) {
          el = elCheck
        }
      }
    }
    // useCapture event propagation check
    el = el ?? e.target
    // not null and HTML element and not window
    if (el && el.nodeName && el !== window) {
      el = el.closest(options.anchors.replace('{hash}', '#'))
      if (el && el.matches(options.anchors.replace('{hash}', '#'))) {
        // event
        const loc = new URL(el.getAttribute('href'), location)
        if (loc.hash && loc.pathname === location.pathname) {
          if (!hashchange || location.hash === el.hash) {
            const hash = hashchange ? loc.hash : el.hash.toString()
            const tr = self.container.querySelector(hash)
            if (tr) {
              // prevent page hash on click anchors
              if (e) {
                e.preventDefault()
              }
              // current scroll
              for (const scroller of self.scrollers) {
                if (scroller) {
                  if (scroller.contains(tr)) {
                    self.scroller = scroller
                    break
                  }
                }
              }
              // prevent page hash with automatic scroll
              if (
                !hashchange &&
                (options.hash || el.getAttribute('data-xt-scrollto-hash') === 'true') &&
                el.getAttribute('data-xt-scrollto-hash') !== 'false' &&
                location.hash !== el.hash
              ) {
                history.pushState({}, '', loc.hash)
              }
              // els
              const els = Array.from(self.container.querySelectorAll(options.anchors.replace('{hash}', '#')))
              // class
              for (const other of els) {
                other.classList.remove(...self._classes)
              }
              el.classList.add(...self._classes)
              // scrollto
              self._eventScrollto({ el, tr })
            }
          }
        }
      }
    }
  }

  /**
   * scroll activation handler
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.scroller Scroller element
   */
  _eventActivationHandler({ scroller } = {}) {
    const self = this
    const options = self.options
    // logic
    if (options.scrollActivation) {
      clearTimeout(Xt.dataStorage.get(scroller, `${self.ns}ScrollTimeout`))
      Xt.dataStorage.set(
        scroller,
        `${self.ns}ScrollTimeout`,
        setTimeout(() => {
          // handler
          self._eventActivation({ scroller })
        }, options.scrollDelay)
      )
    }
  }

  /**
   * scroll activation
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.scroller Scroller element
   */
  _eventActivation({ scroller } = {}) {
    const self = this
    const options = self.options
    // scroll
    self.target = false
    self.scroller = scroller
    let found = false
    let scrollTop = self.scroller.scrollTop
    // fake scroll position if on bottom of the page
    const scrollMax = self.scroller.scrollHeight
    if (scrollTop + self.scroller.clientHeight >= scrollMax) {
      scrollTop = scrollMax
    }
    // anchors
    const els = Array.from(self.container.querySelectorAll(options.anchors.replace('{hash}', '#')))
    // loop
    for (const el of els) {
      // fix don't activate if elements is inside a inner scroller
      for (const scroller of self.scrollers) {
        if (scroller) {
          if (scroller === self.scroller) {
            break
          }
          if (scroller.contains(el)) {
            return
          }
        }
      }
      // event
      const loc = new URL(el.getAttribute('href'), location)
      if (loc.hash) {
        // fix error is not a valid selector (e.g. _C1385.02)
        try {
          document.createDocumentFragment().querySelector(loc.hash)
        } catch {
          continue
        }
        self.target = document.querySelector(loc.hash)
        if (self.target && Xt.visible({ el: self.target })) {
          // vars
          const position = options.position({ self })
          const space = options.space({ self })
          // check if activating
          if (scrollTop >= Math.floor(position - space)) {
            // loop multiple els of
            const matches = options.anchors.replace('{hash}', loc.hash)
            const currents = els.filter(x => x.matches(matches))
            found = !!currents.length
            // reset others
            for (const other of els.filter(x => !currents.includes(x))) {
              other.classList.remove(...self._classes)
            }
            // class
            for (const current of currents) {
              if (self._classes.length && !current.classList.contains(...self._classes)) {
                current.classList.add(...self._classes)
              }
            }
          }
        }
      }
    }
    // reset others when not found anchors and found target
    if (!found && self.target) {
      for (const el of els) {
        el.classList.remove(...self._classes)
      }
    }
  }

  //
  // status
  //

  /**
   * enable
   */
  enable() {
    const self = this
    if (self.disabled) {
      // enable
      self.disabled = false
      // dispatch event
      self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
    }
  }

  /**
   * disable
   * @param {Object} params
   * @param {Boolean} params.skipEvent Skip dispatch event
   */
  disable({ skipEvent = false } = {}) {
    const self = this
    if (!self.disabled) {
      // disable
      self.disabled = true
      // dispatch event
      if (!skipEvent) {
        self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
      }
    }
  }

  //
  // util
  //

  /**
   * reinit
   */
  reinit() {
    const self = this
    // reinit
    self._initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    const options = self.options
    // click
    const changeHandler = Xt.dataStorage.get(self.container, `click/${self.ns}`)
    self.container.removeEventListener('click', changeHandler)
    // scrollto
    const scrolltoHandler = Xt.dataStorage.get(window, `scrollto/${self.ns}`)
    removeEventListener(`scrollto.trigger.${self._componentNs}`, scrolltoHandler, true)
    // hash
    const hashHandler = Xt.dataStorage.get(window, `hashchange/${self.ns}`)
    removeEventListener('hashchange', hashHandler)
    // scroll
    for (const scroller of self.scrollers) {
      if (scroller) {
        const scrollHandler = Xt.dataStorage.get(scroller, `scroll/${self.ns}`)
        const events = options.events ? [...options.events.split(' ')] : []
        if (scroller === document.scrollingElement) {
          for (const event of events) {
            removeEventListener(event, scrollHandler)
          }
        } else {
          for (const event of events) {
            scroller.removeEventListener(event, scrollHandler)
          }
        }
      }
    }
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt._remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self._componentNs}`))
    // delete
    delete this
  }

  //
}

//
// options
//

Scrollto.componentName = 'xt-scrollto'
Scrollto.optionsDefault = {
  debug: false,
  // elements
  anchors: '[href*="{hash}"]:not([href$="#"])',
  scrollers: '.xt-overlay:not([data-xt-overlay-disabled])',
  // class
  class: 'on',
  // event
  events: 'scroll off.xt.overlay',
  scrollActivation: true,
  scrollDelay: 200,
  hash: false,
  // scroll
  position: ({ self }) => {
    const rect = self.target.getBoundingClientRect()
    let position = rect.top + self.scroller.scrollTop
    if (self.scroller !== document.scrollingElement) {
      const rectScrollElement = self.scroller.getBoundingClientRect()
      position = position - rectScrollElement.top
    }
    return position
  },
  space: () => {
    return window.innerHeight / 6
  },
  duration: ({ self }) => {
    const overlay = self.target.closest('.xt-overlay')
    // instant scroll on initial or hashchange or inside overlay and not already activated
    if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
    return 1
  },
}

//
// export
//

Xt.Scrollto = Scrollto
