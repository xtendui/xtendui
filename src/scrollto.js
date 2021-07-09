/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'

/**
 * Scrollto
 */
class Scrollto {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self.optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self.componentNs = self.componentName.replace('-', '.')
    // init
    self.initVars()
    self.initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  initVars() {
    const self = this
    // options
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.optionsGlobal[self.componentName]])
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
  }

  /**
   * init logic
   */
  initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set(self.componentName, self.container, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
    Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.container, 'xtUniqueId')}`
    // vars
    self.initial = true
    // class
    self.classes = options.class ? [...options.class.split(' ')] : []
    // click
    const changeHandler = Xt.dataStorage.put(self.container, `click/${self.ns}`, self.eventChange.bind(self, {}))
    self.container.addEventListener('click', changeHandler)
    // scrollto
    const scrolltoHandler = Xt.dataStorage.put(window, `scrollto/${self.ns}`, self.eventScrollto.bind(self, {}))
    addEventListener(`scrollto.trigger.${self.componentNs}`, scrolltoHandler, true)
    // hash
    const hashHandler = Xt.dataStorage.put(
      window,
      `hashchange/${self.ns}`,
      self.eventChange.bind(self).bind(self, { hashchange: true })
    )
    addEventListener('hashchange', hashHandler)
    // scroll
    self.scrollers = [document.scrollingElement, ...document.querySelectorAll(options.scrollers)].reverse() // need reverse for proper activation
    for (const scroller of self.scrollers) {
      if (scroller) {
        const scrollHandler = Xt.dataStorage.put(
          scroller,
          `scroll/${self.ns}`,
          self.eventActivationHandler.bind(self).bind(self, { scroller })
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
    // initial
    self.initStart()
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.container.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
      self.initial = false
      // debug
      if (options.debug) {
        // eslint-disable-next-line no-console
        console.log(`${self.componentName} init`, self)
      }
    })
    // initialized class
    self.container.setAttribute(`data-${self.componentName}-init`, '')
  }

  /**
   * init start
   */
  initStart() {
    const self = this
    // initial scrollto
    self.eventStart()
    // document ready fixes wrong activation on page load
    Xt.ready(() => {
      // initial activation
      for (const scroller of self.scrollers) {
        if (scroller) {
          self.eventActivationHandler({ scroller })
        }
      }
    })
  }

  //
  // methods
  //

  /**
   * start trigger current location hash
   */
  eventStart() {
    const self = this
    const options = self.options
    // hash trigger
    const hash = location.hash
    if (hash) {
      const el = self.container.querySelector(options.anchors.replace('{hash}', hash))
      if (el) {
        self.eventChange({ el })
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
  eventScrollto({ el, tr } = {}, e = null) {
    const self = this
    const options = self.options
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
        if (self.initial) {
          // keep the same level of raf for custom listener
          requestAnimationFrame(() => {
            self.eventScrolltoRaf()
          })
        } else {
          self.eventScrolltoRaf()
        }
      }
    }
  }

  /**
   * scrollto requestAnimationFrame
   */
  eventScrolltoRaf() {
    const self = this
    const options = self.options
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
    // listener dispatch
    self.container.dispatchEvent(new CustomEvent(`scrollto.${self.componentNs}`))
  }

  /**
   * change
   * @param {Object} params
   * @param {Boolean} params.hashchange
   * @param {Node|HTMLElement|EventTarget|Window} params.el Change element
   * @param {Event} e
   */
  eventChange({ hashchange = false, el = null }, e = null) {
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
    // check because of event propagation
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
                (options.hash || el.getAttribute('data-xt-scrollto-hash')) &&
                location.hash !== el.hash
              ) {
                history.pushState({}, '', loc.hash)
              }
              // els
              const els = Array.from(self.container.querySelectorAll(options.anchors.replace('{hash}', '#')))
              // class
              for (const other of els) {
                other.classList.remove(...self.classes)
              }
              el.classList.add(...self.classes)
              // scrollto
              self.eventScrollto({ el, tr })
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
  eventActivationHandler({ scroller } = {}) {
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
          self.eventActivation({ scroller })
        }, options.scrollDelay)
      )
    }
  }

  /**
   * scroll activation
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.scroller Scroller element
   */
  eventActivation({ scroller } = {}) {
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
        self.target = document.querySelector(loc.hash)
        if (self.target && Xt.visible(self.target)) {
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
              other.classList.remove(...self.classes)
            }
            // class
            for (const current of currents) {
              if (self.classes.length && !current.classList.contains(...self.classes)) {
                current.classList.add(...self.classes)
              }
            }
          }
        }
      }
    }
    // reset others when not found anchors and found target
    if (!found && self.target) {
      for (const el of els) {
        el.classList.remove(...self.classes)
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
    self.initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    const options = self.options
    // remove events
    const changeHandler = Xt.dataStorage.get(self.container, `click/${self.ns}`)
    self.container.removeEventListener('click', changeHandler)
    const hashHandler = Xt.dataStorage.get(window, `hashchange/${self.ns}`)
    removeEventListener('hashchange', hashHandler)
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
    Xt.remove(self.componentName, self.container)
    // listener dispatch
    self.container.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
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
  anchors: '[href*="{hash}"]',
  scrollers: '.xt-overlay:not([data-xt-overlay-disabled])',
  // class
  class: 'on',
  // event
  events: 'scroll off.xt.overlay',
  scrollActivation: true,
  scrollDelay: 150,
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
    return 0
  },
  duration: () => {
    return 0
  },
}

//
// export
//

Xt.Scrollto = Scrollto
