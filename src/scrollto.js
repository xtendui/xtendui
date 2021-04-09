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
    self.object = object
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
    Xt.set(self.componentName, self.object, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // class
    self.classes = options.class ? [...options.class.split(' ')] : []
    // scrollto
    let scrolltoHandler = Xt.dataStorage.put(window, `scrollto/${self.ns}`, self.eventScrollto.bind(self, {}))
    addEventListener(`scrollto.trigger.${self.componentNs}`, scrolltoHandler, true)
    // change
    let changeHandler = Xt.dataStorage.put(
      self.object,
      `click/${self.ns}`,
      self.eventChange.bind(self).bind(self, false, null)
    )
    self.object.addEventListener('click', changeHandler)
    // hash
    let hashHandler = Xt.dataStorage.put(
      window,
      `hashchange/${self.ns}`,
      self.eventChange.bind(self).bind(self, true, null)
    )
    addEventListener('hashchange', hashHandler)
    // scroll
    self.scrolls = [document.scrollingElement, ...document.querySelectorAll(options.scrolls)].reverse()
    for (const scroll of self.scrolls) {
      if (scroll) {
        let scrollHandler = Xt.dataStorage.put(
          scroll,
          `scroll/${self.ns}`,
          self.eventScrollactivationHandler.bind(self).bind(self, scroll)
        )
        if (scroll === document.scrollingElement) {
          addEventListener('scroll', scrollHandler)
        } else {
          scroll.addEventListener('scroll', scrollHandler)
        }
        // initial
        requestAnimationFrame(() => {
          self.scroll = scroll
          self.eventStart()
          self.eventScrollactivationHandler(scroll)
        })
      }
    }
    // initialized class
    self.object.classList.add(`${self.componentName}-init`)
    // listener dispatch
    requestAnimationFrame(() => {
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
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
      const el = self.object.querySelector(options.anchors.replace('{hash}', hash))
      if (el) {
        self.eventChange(false, el)
      }
    }
  }

  /**
   * scrollto
   * @param {Node|HTMLElement|EventTarget|Window} el element
   * @param {Node|HTMLElement|EventTarget|Window} tr target
   * @param {Event} e
   */
  eventScrollto({ el = null, tr = null }, e = null) {
    const self = this
    const options = self.options
    // keep after components activations
    requestAnimationFrame(() => {
      // element
      el = el ?? e.target
      // not null and HTML element and not window
      if (el && el.nodeName && el !== window) {
        self.target = tr ?? el
        if (self.target && Xt.visible(self.target)) {
          // vars
          self.scrollPosition = options.scrollPosition({ self })
          self.scrollSpace = options.scrollSpace({ self })
          self.scrollDistance = options.scrollDistance({ self })
          self.position = self.scrollPosition - self.scrollSpace - self.scrollDistance
          // val
          const min = 0
          const max = self.scroll.scrollHeight - self.scroll.clientHeight
          self.position = self.position < min ? min : self.position
          self.position = self.position > max ? max : self.position
          // fix activate also if scroll position remains the same
          if (self.scroll.scrollTop === self.position) {
            self.scroll.dispatchEvent(new CustomEvent('scroll'))
          }
          // listener dispatch
          self.object.dispatchEvent(new CustomEvent(`scrollto.${self.componentNs}`))
        }
      }
    })
  }

  /**
   * change
   * @param {Boolean} hashchange
   * @param {Node|HTMLElement|EventTarget|Window} el Change element
   * @param {Event} e
   */
  eventChange(hashchange = false, el = null, e = null) {
    const self = this
    const options = self.options
    // hashchange
    if (hashchange) {
      const hash = location.hash
      el = self.object.querySelector(options.anchors.replace('{hash}', hash))
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
            const tr = self.object.querySelector(hash)
            if (tr) {
              // prevent page hash with automatic scroll
              if (e) {
                e.preventDefault()
              }
              // current scroll
              for (const scroll of self.scrolls) {
                if (scroll) {
                  if (scroll.contains(tr)) {
                    self.scroll = scroll
                    break
                  }
                }
              }
              // prevent page hash with automatic scroll
              if (options.hash && location.hash !== el.hash) {
                history.pushState({}, '', loc.hash)
              }
              // els
              let els = Array.from(self.scroll.querySelectorAll(options.anchors.replace('{hash}', '#')))
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
   * @param {Node|HTMLElement|EventTarget|Window} scroll Scroll element
   */
  eventScrollactivationHandler(scroll) {
    const self = this
    const options = self.options
    // logic
    if (options.scrollActivation) {
      clearTimeout(Xt.dataStorage.get(scroll, `${self.ns}ScrollTimeout`))
      Xt.dataStorage.set(
        scroll,
        `${self.ns}ScrollTimeout`,
        setTimeout(() => {
          // handler
          self.eventScrollactivation(scroll)
        }, options.scrollDelay)
      )
    }
  }

  /**
   * scroll activation
   */
  eventScrollactivation(scroll) {
    const self = this
    const options = self.options
    // scroll
    let found = false
    let scrollTop = scroll.scrollTop
    self.target = false
    // fake scroll position if on bottom of the page
    const scrollMax = scroll.scrollHeight
    if (scrollTop + scroll.clientHeight >= scrollMax) {
      scrollTop = scrollMax
    }
    // anchors
    let els = Array.from(scroll.querySelectorAll(options.anchors.replace('{hash}', '#')))
    els = els.filter(x => !x.closest('.xt-ignore')) // filter out ignore
    // loop
    for (const el of els) {
      // event
      const loc = new URL(el.getAttribute('href'), location)
      if (loc.hash) {
        self.target = document.querySelector(loc.hash)
        if (self.target && Xt.visible(self.target)) {
          // current scroll
          for (const scroll of self.scrolls) {
            if (scroll) {
              if (scroll.contains(self.target)) {
                self.scroll = scroll
                break
              }
            }
          }
          // vars
          const position = options.scrollPosition({ self })
          const space = options.scrollSpace({ self })
          const distance = options.scrollDistance({ self })
          // check if activating
          if (scrollTop >= Math.floor(position - space - distance)) {
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
              if (!current.classList.contains('xt-active')) {
                current.classList.add(...self.classes)
              }
            }
          }
        }
      }
    }
    // reset others when not found elements and found target
    if (!found && self.target) {
      for (const other of els) {
        other.classList.remove(...self.classes)
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
    // remove events
    let changeHandler = Xt.dataStorage.get(self.object, `click/${self.ns}`)
    self.object.removeEventListener('click', changeHandler)
    let hashHandler = Xt.dataStorage.get(window, `hashchange/${self.ns}`)
    removeEventListener('hashchange', hashHandler)
    for (const scroll of self.scrolls) {
      if (scroll) {
        let scrollHandler = Xt.dataStorage.get(scroll, `scroll/${self.ns}`)
        scroll.removeEventListener('scroll', scrollHandler)
      }
    }
    // initialized class
    self.object.classList.remove(`${self.componentName}-init`)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
  }

  //
}

//
// options
//

Scrollto.componentName = 'xt-scrollto'
Scrollto.optionsDefault = {
  // elements
  anchors: '[href*="{hash}"]',
  scrolls: '.xt-overlay',
  // class
  class: 'xt-active',
  // event
  scrollActivation: true,
  scrollDelay: 150,
  hash: false,
  // scroll
  scrollPosition: ({ self }) => {
    const rect = self.target.getBoundingClientRect()
    let position = rect.top + self.scroll.scrollTop
    if (self.scroll !== document.scrollingElement) {
      const rectScrollElement = self.scroll.getBoundingClientRect()
      position = position - rectScrollElement.top
    }
    return position
  },
  scrollSpace: () => {
    return 0
  },
  scrollDistance: () => {
    return 0
  },
}

//
// export
//

Xt.Scrollto = Scrollto
