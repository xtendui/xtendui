import { Xt } from 'xtend-library'
import JSON5 from 'json5'

/**
 * PropagateInteraction
 */
class PropagateInteraction {
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
    // targets
    self.targets = self.object.querySelectorAll(self.options.targets)
    // events
    if (self.targets.length) {
      self.object.addEventListener('mouseenter', self.hoverOn.bind(self))
      self.object.addEventListener('mouseleave', self.hoverOff.bind(self))
      self.object.addEventListener('mousedown', self.activeOn.bind(self))
      addEventListener('mouseup', self.activeOff.bind(self).bind(self, false))
      self.object.addEventListener('click', self.activeOff.bind(self).bind(self, true))
      // set self
      for (const tr of self.targets) {
        Xt.set(self.componentName, tr, self)
      }
    }
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
   * hoverOn
   */
  hoverOn() {
    const self = this
    for (const tr of self.targets) {
      tr.classList.add('hover')
      tr.dispatchEvent(new CustomEvent('mouseenter'))
    }
  }

  /**
   * hoverOff
   */
  hoverOff() {
    const self = this
    for (const tr of self.targets) {
      tr.classList.remove('hover')
      tr.dispatchEvent(new CustomEvent('mouseleave'))
    }
  }

  /**
   * activeOn
   */
  activeOn() {
    const self = this
    for (const tr of self.targets) {
      tr.classList.add('active')
      tr.dispatchEvent(new CustomEvent('mousedown'))
    }
  }

  /**
   * activeOff
   */
  activeOff(isClick) {
    const self = this
    for (const tr of self.targets) {
      if (isClick) {
        tr.dispatchEvent(new CustomEvent('click'))
      } else {
        tr.classList.remove('active')
        tr.dispatchEvent(new CustomEvent('mouseup'))
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
    self.object.removeEventListener('mouseenter', self.hoverOn.bind(self))
    self.object.removeEventListener('mouseleave', self.hoverOff.bind(self))
    self.object.removeEventListener('mousedown', self.activeOn.bind(self))
    removeEventListener('mouseup', self.activeOff.bind(self))
    // initialized class
    self.object.classList.remove(self.componentName)
    // set self
    Xt.remove(self.componentName, self.object)
    for (const tr of self.targets) {
      Xt.remove(self.componentName, tr)
    }
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent('destroy.xt'))
  }

  //
}

//
// options
//

PropagateInteraction.componentName = 'xt-propagate-interaction'
PropagateInteraction.optionsDefault = {}

//
// export
//

Xt.PropagateInteraction = PropagateInteraction

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.PropagateInteraction.componentName + ']',
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.PropagateInteraction.componentName)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.PropagateInteraction(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
