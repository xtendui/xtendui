import { Xt } from 'xtend-library/src/xt.js'

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
    // setup namespace
    self.namespace = self.componentName + '-' + self.classes.toString()
    self.namespace = self.namespace.replace(/^[^a-z]+|[ ,#_:.-]+/gi, '')
    // reset namespace
    if (!Xt.dataStorage.get(self.namespace, 'xtNamespaceDone')) {
      Xt.dataStorage.set(self.namespace, 'xtNamespace', [])
      Xt.dataStorage.set(self.namespace, 'xtNamespaceDone', true)
    }
    // set namespace for next frame
    const arr = Xt.dataStorage.get(self.namespace, 'xtNamespace')
    arr.push(self.object)
    Xt.dataStorage.set(self.namespace, 'xtNamespace', arr)
    // set namespace for next frame
    requestAnimationFrame(() => {
      let arr = Xt.dataStorage.get(self.namespace, 'xtNamespace')
      arr = arr.filter(x => !x.closest('.xt-ignore')) // filter out ignore
      self.others = arr
    })
    // click
    self.object.addEventListener('click', self.eventChange.bind(self).bind(self, false))
    // scroll
    addEventListener('scroll', self.eventScroll.bind(self).bind(self))
    self.object.addEventListener('scroll', self.eventChange.bind(self).bind(self, false))
    // hash
    addEventListener('hashchange', self.eventChange.bind(self).bind(self, true))
    // initial
    requestAnimationFrame(() => {
      self.eventChange.bind(self).bind(self, true)()
    })
  }

  //
  // methods
  //

  /**
   * scroll
   * @param {Event} e
   */
  eventScroll(e = null) {
    const self = this
    self.object.offsetTop
    console.log(document.scrollingElement.scrollTop, self.object.offsetTop, document.scrollingElement.scrollTop > self.object.offsetTop - self.scrollAdd - 50)
    // scroll
    if (!self.object.classList.contains('active')) {
      if (document.scrollingElement.scrollTop > self.object.offsetTop - self.scrollAdd - 50) {
        console.log(self.object)
        // class
        for (const other of self.others) {
          other.classList.remove(...self.classes)
        }
        self.object.classList.add(...self.classes)
      }
    }
  }

  /**
   * change
   * @param {Boolean} hashchange
   * @param {Event} e
   */
  eventChange(hashchange = false, e = null) {
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
          // class
          for (const other of self.others) {
            other.classList.remove(...self.classes)
          }
          self.object.classList.add(...self.classes)
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
    self.object.removeEventListener('click', self.eventChange.bind(self, false))
    removeEventListener('hashchange', self.eventChange.bind(self).bind(self, true))
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
  class: 'active',
}

//
// export
//

Xt.ScrollToAnchor = ScrollToAnchor
