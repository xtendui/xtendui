import { Xt } from 'xtend-library'

class MouseFollow {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Node|HTMLElement|EventTarget|Window} container Container node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, container, optionsCustom = {}) {
    const self = this
    self.object = object
    self.container = container
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
    // events
    self.container.addEventListener('mousemove', self.mousemove.bind(self))
    self.container.addEventListener('mouseenter', self.mouseenter.bind(self))
    self.container.addEventListener('mouseleave', self.mouseleave.bind(self))
  }

  //
  // methods
  //

  /**
   * mousemove
   */
  mousemove(e) {
    const self = this
    // fix initial
    if (self.width === undefined) {
      self.mouseenter(e)
    }
    // position
    Xt.friction(self.object, {
      x: e.clientX - self.width / 2,
      y: e.clientY - self.height / 2,
    })
    // listener dispatch
    self.container.dispatchEvent(new CustomEvent('mousemove.xt.mousefollow'))
  }

  /**
   * mouseenter
   */
  mouseenter(e) {
    const self = this
    const options = self.options
    if (!options.mouseCheck || options.mouseCheck.call(self)) {
      // size
      const rect = self.object.getBoundingClientRect()
      self.width = rect.width
      self.height = rect.height
      // class
      Xt.animOn(self.object)
      // initial
      Xt.friction(self.object, {
        x: e.clientX - self.width / 2,
        y: e.clientY - self.height / 2,
        friction: false,
      })
      // listener dispatch
      self.container.dispatchEvent(new CustomEvent('mouseenter.xt.mousefollow'))
    }
  }

  /**
   * mouseleave
   */
  mouseleave() {
    const self = this
    const options = self.options
    if (!options.mouseCheck || options.mouseCheck.call(self)) {
      // class
      Xt.animOff(self.object)
      // listener dispatch
      self.container.dispatchEvent(new CustomEvent('mouseleave.xt.mousefollow'))
    }
  }

  //
  // destroy
  //

  /**
   * destroy
   */
  destroy() {
    const self = this
    // remove events
    self.container.removeEventListener('mousemove', self.mousemove.bind(self))
    self.container.removeEventListener('mouseenter', self.mouseenter.bind(self))
    self.container.removeEventListener('mouseleave', self.mouseleave.bind(self))
    // set self
    Xt.remove(self.componentName, self.object)
  }

  //
}

//
// options
//

MouseFollow.componentName = 'xt-mouse-follow'
MouseFollow.optionsDefault = {}

//
// export
//

Xt.MouseFollow = MouseFollow
