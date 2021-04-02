import { Xt } from './xt'

/**
 * Scrolltoanchor
 */
class Scrolltoanchor {
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
    // set self
    Xt.set(self.componentName, self.object, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // class
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    // click
    let clickHandler = Xt.dataStorage.put(
      self.object,
      `click/${self.ns}`,
      self.eventChange.bind(self).bind(self, false, null)
    )
    self.object.addEventListener('click', clickHandler)
    // hash
    let hashHandler = Xt.dataStorage.put(
      window,
      `hashchange/${self.ns}`,
      self.eventChange.bind(self).bind(self, true, null)
    )
    addEventListener('hashchange', hashHandler)
    // scroll
    self.scrollElements = [
      document.scrollingElement,
      ...document.querySelectorAll(self.options.scrollElements),
    ].reverse()
    for (const scrollElement of self.scrollElements) {
      if (scrollElement) {
        let scrollHandler = Xt.dataStorage.put(
          scrollElement,
          `scroll/${self.ns}`,
          self.eventScrollHandler.bind(self).bind(self, scrollElement)
        )
        if (scrollElement === document.scrollingElement) {
          addEventListener('scroll', scrollHandler)
        } else {
          scrollElement.addEventListener('scroll', scrollHandler)
        }
        scrollElement.addEventListener(`scroll.trigger.${self.componentNs}`, scrollHandler)
        // initial
        requestAnimationFrame(() => {
          self.scrollElement = scrollElement
          self.eventStart()
          self.eventScrollHandler(scrollElement)
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
      const el = self.object.querySelector(options.elements.replace('#', hash))
      if (el) {
        self.eventChange(false, el)
      }
    }
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
    // reset
    self.target = null
    // hashchange
    if (hashchange) {
      const hash = location.hash
      el = self.object.querySelector(options.elements.replace('#', hash))
    }
    // check because of event propagation
    el = el ? el : e.target
    // not null and HTML element and not window
    if (el && el.nodeName && el !== window) {
      el = el.closest(options.elements)
      if (el && el.matches(options.elements)) {
        // event
        const loc = new URL(el.getAttribute('href'), location)
        if (loc.hash && loc.pathname === location.pathname) {
          if (!hashchange || location.hash === el.hash) {
            const hash = hashchange ? loc.hash : el.hash.toString()
            self.target = self.object.querySelector(hash)
            if (self.target && Xt.visible(self.target)) {
              // prevent page hash with automatic scroll
              if (e) {
                e.preventDefault()
              }
              // current scrollElement
              for (const scrollElement of self.scrollElements) {
                if (scrollElement) {
                  if (scrollElement.contains(self.target)) {
                    self.scrollElement = scrollElement
                    break
                  }
                }
              }
              // els
              let els = Array.from(self.scrollElement.querySelectorAll(options.elements))
              // class
              for (const other of els) {
                other.classList.remove(...self.classes)
              }
              el.classList.add(...self.classes)
              // prevent page hash with automatic scroll
              if (options.hash && location.hash !== el.hash) {
                history.pushState({}, '', loc.hash)
              }
              // vars
              self.scrollPosition = options.scrollPosition({ self })
              self.scrollSpace = options.scrollSpace({ self })
              self.scrollDistance = options.scrollDistance({ self })
              self.position = self.scrollPosition - self.scrollSpace - self.scrollDistance
              // val
              const min = 0
              const max = self.scrollElement.scrollHeight - self.scrollElement.clientHeight
              self.position = self.position < min ? min : self.position
              self.position = self.position > max ? max : self.position
              // listener dispatch
              self.object.dispatchEvent(new CustomEvent(`change.${self.componentNs}`))
            }
          }
        }
      }
    }
  }

  /**
   * scroll handler
   * @param {Node|HTMLElement|EventTarget|Window} scrollElement Scroll element
   */
  eventScrollHandler(scrollElement) {
    const self = this
    const options = self.options
    // timeout
    clearTimeout(Xt.dataStorage.get(scrollElement, `${self.ns}ScrollTimeout`))
    Xt.dataStorage.set(
      scrollElement,
      `${self.ns}ScrollTimeout`,
      setTimeout(() => {
        // handler
        self.eventScroll(scrollElement)
      }, options.scrollDelay)
    )
  }

  /**
   * scroll
   */
  eventScroll(scrollElement) {
    const self = this
    const options = self.options
    // reset
    self.target = null
    // scroll
    let found = false
    let scrollTop = scrollElement.scrollTop
    // fake scroll position if on bottom of the page
    const scrollMax = scrollElement.scrollHeight
    if (scrollTop + scrollElement.clientHeight >= scrollMax) {
      scrollTop = scrollMax
    }
    // els
    let els = Array.from(scrollElement.querySelectorAll(options.elements))
    els = els.filter(x => !x.closest('.xt-ignore')) // filter out ignore
    // filter out other scrollElement
    let elsFiltered = els
    for (const scrollElementOther of self.scrollElements.filter(x => x !== scrollElement)) {
      if (scrollElementOther) {
        for (const el of els) {
          if (scrollElementOther.contains(el)) {
            elsFiltered = elsFiltered.filter(x => x !== el) // filter out ignore
          }
        }
      }
    }
    els = elsFiltered.length > 0 ? elsFiltered : els
    // loop
    for (const el of els) {
      // event
      const loc = new URL(el.getAttribute('href'), location)
      if (loc.hash) {
        self.target = document.querySelector(loc.hash)
        if (self.target && Xt.visible(self.target)) {
          // current scrollElement
          for (const scrollElement of self.scrollElements) {
            if (scrollElement) {
              if (scrollElement.contains(self.target)) {
                self.scrollElement = scrollElement
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
            const matches = options.matches.replace('{hash}', loc.hash)
            const currents = els.filter(x => x.matches(matches))
            found = !!currents.length
            // reset others
            for (const other of els.filter(x => !currents.includes(x))) {
              other.classList.remove(...self.classes)
            }
            // class
            for (const current of currents) {
              if (!current.classList.contains('active')) {
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
    let clickHandler = Xt.dataStorage.get(self.object, `click/${self.ns}`)
    self.object.removeEventListener('click', clickHandler)
    let hashHandler = Xt.dataStorage.get(window, `hashchange/${self.ns}`)
    removeEventListener('hashchange', hashHandler)
    for (const scrollElement of self.scrollElements) {
      if (scrollElement) {
        let scrollHandler = Xt.dataStorage.get(scrollElement, `scroll/${self.ns}`)
        if (scrollElement === document.scrollingElement) {
          removeEventListener('scroll', scrollHandler)
        } else {
          scrollElement.removeEventListener('scroll', scrollHandler)
        }
        scrollElement.removeEventListener(`scroll.trigger.${self.componentNs}`, scrollHandler)
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

Scrolltoanchor.componentName = 'xt-scrolltoanchor'
Scrolltoanchor.optionsDefault = {
  // elements
  elements: '[href*="#"]',
  matches: '[href$="{hash}"]',
  scrollElements: '.xt-overlay',
  // class
  class: 'active',
  // event
  scrollDelay: 75,
  hash: false,
  // scroll
  scrollPosition: ({ self }) => {
    const rect = self.target.getBoundingClientRect()
    let position = rect.top + self.scrollElement.scrollTop
    if (self.scrollElement !== document.scrollingElement) {
      const rectScrollElement = self.scrollElement.getBoundingClientRect()
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

Xt.Scrolltoanchor = Scrolltoanchor
