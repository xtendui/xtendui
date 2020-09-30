import { Xt } from 'xtend-library'

/**
 * ScrollToAnchor
 */
class ScrollToAnchor {
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
    self.componentNamespace = self.componentName.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    Xt.destroyAndInit(self)
  }

  //
  // init
  //

  /**
   * init
   */
  init() {
    const self = this
    // options
    self.options = Xt.merge([self.constructor.optionsDefault, self.optionsCustom])
    // class
    self.classes = self.options.class ? [...self.options.class.split(' ')] : []
    // click
    self.object.addEventListener('click', self.eventChange.bind(self).bind(self, false, null))
    // hash
    addEventListener('hashchange', self.eventChange.bind(self).bind(self, true, null))
    // scroll
    for (const scrollElement of self.options.scrollElements) {
      if (scrollElement) {
        if (scrollElement === document.scrollingElement) {
          addEventListener('scroll', self.eventScrollHandler.bind(self).bind(self, scrollElement))
        } else {
          scrollElement.addEventListener('scroll', self.eventScrollHandler.bind(self).bind(self, scrollElement))
        }
        // initial
        requestAnimationFrame(() => {
          self.scrollElementCurrent = scrollElement
          self.eventScrollHandler(scrollElement)
          self.eventStart()
        })
      }
    }
    // initialized class
    self.object.classList.add(self.componentName)
    // @FIX raf because after .xt custom listeners
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('init.xt.scrolltoanchor'))
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
    // reset self.target
    self.target = null
    // hashchange
    if (hashchange) {
      const hash = location.hash
      el = self.object.querySelector(options.elements.replace('#', hash))
    }
    // useCapture delegation
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
              // prevent page hash
              if (e) {
                e.preventDefault()
              }
              // current scrollElement
              for (const scrollElement of options.scrollElements) {
                if (scrollElement) {
                  if (scrollElement.contains(self.target)) {
                    self.scrollElementCurrent = scrollElement
                  }
                }
              }
              // els
              let els = Array.from(self.scrollElementCurrent.querySelectorAll(options.elements))
              // class
              for (const other of els) {
                other.classList.remove(...self.classes)
              }
              el.classList.add(...self.classes)
              // no location.hash or page scrolls
              if (location.hash !== el.hash) {
                history.pushState({}, '', loc.hash)
              }
              // vars
              self.scrollSpace = options.scrollSpace(self, self.scrollElementCurrent)
              self.scrollDistance = options.scrollDistance(self, self.scrollElementCurrent)
              self.position = options.position(self, self.scrollElementCurrent)
              // listener dispatch
              self.object.dispatchEvent(new CustomEvent('change.xt.scrolltoanchor'))
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
    clearTimeout(Xt.dataStorage.get(scrollElement, self.componentNamespace + 'ScrollTimeout'))
    Xt.dataStorage.set(
      scrollElement,
      self.componentNamespace + 'ScrollTimeout',
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
    // reset self.target
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
    for (const scrollElementOther of options.scrollElements.filter(x => x !== scrollElement)) {
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
          for (const scrollElement of options.scrollElements) {
            if (scrollElement) {
              if (scrollElement.contains(self.target)) {
                self.scrollElementCurrent = scrollElement
              }
            }
          }
          // vars
          self.scrollSpace = options.scrollSpace(self, self.scrollElementCurrent)
          self.scrollDistance = options.scrollDistance(self, self.scrollElementCurrent)
          self.position = options.position(self, self.scrollElementCurrent)
          // check if activating
          if (scrollTop >= self.position - self.scrollSpace - self.scrollDistance) {
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
   * destroy
   */
  destroy() {
    const self = this
    const options = self.options
    // remove events
    self.object.removeEventListener('click', self.eventChange.bind(self, false, null))
    removeEventListener('hashchange', self.eventChange.bind(self).bind(self, true, null))
    for (const scrollElement of options.scrollElements) {
      if (scrollElement === document.scrollingElement) {
        removeEventListener('scroll', self.eventScrollHandler.bind(self).bind(self, scrollElement))
      } else {
        scrollElement.removeEventListener('scroll', self.eventScrollHandler.bind(self).bind(self, scrollElement))
      }
    }
    // initialized class
    self.object.classList.remove(self.componentName)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt.scrolltoanchor'))
  }

  //
}

//
// options
//

ScrollToAnchor.componentName = 'xt-scroll-to-anchor'
ScrollToAnchor.optionsDefault = {
  // elements
  elements: '[href*="#"]:not([aria-controls])', // filter out toggle components toggles with :not([aria-controls])
  matches: '[href$="{hash}"]:not([aria-controls])', // filter out toggle components toggles with :not([aria-controls])
  scrollElements: [document.scrollingElement],
  // class
  class: 'active',
  // event
  scrollDelay: 250,
  // scroll
  position: (self, scrollingElement) => {
    const rect = self.target.getBoundingClientRect()
    let position = rect.top + scrollingElement.scrollTop
    if (scrollingElement !== document.scrollingElement) {
      const rectScrollingElement = scrollingElement.getBoundingClientRect()
      position = position - rectScrollingElement.top
    }
    return position
  },
  scrollDistance: () => {
    return 0
  },
  scrollSpace: () => {
    return 0
  },
}

//
// export
//

Xt.ScrollToAnchor = ScrollToAnchor
