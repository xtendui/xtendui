import { Xt } from '/src/xt.js'

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
    // click
    self.object.addEventListener('click', self.change.bind(self).bind(self, false))
    // hash
    addEventListener('hashchange', self.change.bind(self).bind(self, true))
    // initial
    self.change.bind(self).bind(self, true)()
  }

  //
  // methods
  //

  /**
   * change
   * @param {Boolean} hashchange
   * @param {Event} e
   */
  change(hashchange = false, e = null) {
    const self = this
    // click
    const loc = new URL(self.object.getAttribute('href'), location)
    if (loc.hash && loc.pathname === location.pathname) {
      if (!hashchange || location.hash === self.object.hash) {
        const hash = hashchange ? loc.hash : self.object.hash.toString()
        self.target = document.querySelector(hash)
        if (self.target) {
          // prevent location.hash
          if (e) {
            e.preventDefault()
          }
          // no location.hash or page scrolls
          if (location.hash !== self.object.hash) {
            history.pushState({}, '', loc.hash)
          }
          // stop xt-smooth if present
          const smooth = Xt.get('xt-smooth', document)
          if (smooth) {
            smooth.eventWheelstop()
          }
          // add space
          self.scrollAdd = 0
          // sticky space
          const stickys = document.querySelectorAll('.xt-sticky.xt-clone.active')
          for (const sticky of stickys) {
            self.scrollAdd += sticky.clientHeight
          }
          // listener dispatch
          self.object.dispatchEvent(new CustomEvent('change.xt.scrolltoanchor'))
        }
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
    self.object.removeEventListener('click', self.change.bind(self, false))
    removeEventListener('hashchange', self.change.bind(self).bind(self, true))
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
ScrollToAnchor.optionsDefault = {}

//
// export
//

Xt.ScrollToAnchor = ScrollToAnchor
