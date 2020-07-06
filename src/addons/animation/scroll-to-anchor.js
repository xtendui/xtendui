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
    self.options.scrollElement.addEventListener('scroll', self.eventScrollHandler.bind(self).bind(self))
    // initial
    requestAnimationFrame(() => {
      self.eventScrollHandler()
      self.eventStart()
    })
    // initialized class
    self.object.classList.add(self.componentName)
    // @FIX after raf because after .xt custom listeners
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent('init.xt'))
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
    // hash trigger
    const hash = location.hash
    if (hash) {
      const el = self.object.querySelector(self.options.elements.replace('#', hash))
      if (el) {
        self.eventChange(false, el)
      }
    }
  }

  /**
   * change
   * @param {Boolean} hashchange
   * @param {Event} e
   */
  eventChange(hashchange = false, el = null, e = null) {
    const self = this
    // reset self.target
    self.target = null
    // useCapture delegation
    el = el ? el : e.target
    // not null and HTML element and not window
    if (el && el.nodeName && el !== window) {
      el = el.closest(self.options.elements)
      if (el && el.matches(self.options.elements)) {
        // event
        const loc = new URL(el.getAttribute('href'), location)
        if (loc.hash && loc.pathname === location.pathname) {
          if (!hashchange || location.hash === el.hash) {
            const hash = hashchange ? loc.hash : el.hash.toString()
            self.target = self.object.querySelector(hash)
            if (self.target) {
              // prevent location.hash
              if (e) {
                e.preventDefault()
              }
              // class
              let els = Array.from(self.object.querySelectorAll(self.options.elements))
              els = els.filter(x => !x.closest('.xt-ignore')) // filter out ignore
              for (const other of els) {
                other.classList.remove(...self.classes)
              }
              el.classList.add(...self.classes)
              // no location.hash or page scrolls
              if (location.hash !== el.hash) {
                history.pushState({}, '', loc.hash)
              }
              // add space
              self.scrollSpace = self.options.scrollSpace(self)
              // @FIX after raf because after .xt custom listeners
              requestAnimationFrame(() => {
                // listener dispatch
                self.object.dispatchEvent(new CustomEvent('change.xt.scrolltoanchor'))
              })
            }
          }
        }
      }
    }
  }

  /**
   * scroll handler
   * @param {Event} e
   */
  eventScrollHandler(e = null) {
    const self = this
    // timeout
    clearTimeout(Xt.dataStorage.get(self.object, self.componentNamespace + 'ScrollTimeout'))
    Xt.dataStorage.set(
      self.object,
      self.componentNamespace + 'ScrollTimeout',
      setTimeout(() => {
        // handler
        self.eventScroll(e)
      }, self.options.scrollDelay)
    )
  }

  /**
   * scroll
   * @param {Event} e
   */
  eventScroll(e = null) {
    const self = this
    // reset self.target
    self.target = null
    // scroll
    let found = false
    let scrollTop = document.scrollingElement.scrollTop
    // fake scroll position if on bottom of the page
    const scrollMax = document.scrollingElement.scrollHeight
    if (scrollTop + Xt.windowHeight >= scrollMax) {
      scrollTop = scrollMax
    }
    // loop
    let els = Array.from(self.object.querySelectorAll(self.options.elements))
    els = els.filter(x => !x.closest('.xt-ignore')) // filter out ignore
    for (const el of els) {
      // add space
      self.scrollSpace = self.options.scrollSpace()
      self.scrollDistance = self.options.scrollDistance()
      // event
      const loc = new URL(el.getAttribute('href'), location)
      if (loc.hash) {
        self.target = document.querySelector(loc.hash)
        if (self.target) {
          if (scrollTop >= self.target.offsetTop - self.scrollSpace - self.scrollDistance) {
            // reset others
            for (const other of els) {
              other.classList.remove(...self.classes)
            }
            // loop multiple els of
            const matches = self.options.elements.replace('#', loc.hash)
            const currents = els.filter(x => x.matches(matches))
            found = !!currents.length
            for (const current of currents) {
              if (!current.classList.contains('active')) {
                // class
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
    // remove events
    self.object.removeEventListener('click', self.eventChange.bind(self, false, null), true)
    removeEventListener('hashchange', self.eventChange.bind(self).bind(self, true, null), true)
    self.options.scrollElement.removeEventListener('scroll', self.eventScrollHandler.bind(self).bind(self))
    // initialized class
    self.object.classList.remove(self.componentName)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt'))
  }

  //
}

//
// options
//

ScrollToAnchor.componentName = 'xt-scroll-to-anchor'
ScrollToAnchor.optionsDefault = {
  // elements
  elements: '[href*="#"]:not([aria-controls])', // filter out components toggles with :not([aria-controls])
  scrollElement: window,
  // class
  class: 'active',
  // event
  scrollDelay: 250,
  // scroll
  scrollDistance: () => {
    return window.innerHeight / 6
  },
  scrollSpace: () => {
    let scrollSpace = 0
    // sticky
    const stickys = document.querySelectorAll('.xt-sticky.xt-clone.active')
    for (const sticky of stickys) {
      scrollSpace += sticky.clientHeight
    }
    return scrollSpace
  },
}

//
// export
//

Xt.ScrollToAnchor = ScrollToAnchor
