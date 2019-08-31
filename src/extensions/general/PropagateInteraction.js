import { Xt } from 'xtend-library'

class PropagateInteraction {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor (object, optionsJs = {}) {
    const self = this
    self.object = object
    self.options = optionsJs
    // @FIX multiple initializations
    const alreadyDefinedInstance = Xt.get(self.componentName, self.object)
    if (!alreadyDefinedInstance) {
      // set
      Xt.set(self.componentName, self.object, self)
      // init
      self.init()
    } else {
      return alreadyDefinedInstance
    }
  }

  //
  // init
  //

  /**
   * init
   */
  init () {
    const self = this
    self.targets = self.object.querySelectorAll(self.options.targets)
    if (self.targets.length) {
      self.object.addEventListener('mouseenter', self.hoverOn.bind(self))
      self.object.addEventListener('mouseleave', self.hoverOff.bind(self))
      self.object.addEventListener('mousedown', self.activeOn.bind(self))
      addEventListener('mouseup', self.activeOff.bind(self).bind(self, false))
      self.object.addEventListener('click', self.activeOff.bind(self).bind(self, true))
    }
  }

  //
  // methods
  //

  /**
   * hoverOn
   */
  hoverOn () {
    const self = this
    for (const tr of self.targets) {
      tr.classList.add('hover')
      tr.dispatchEvent(new CustomEvent('mouseenter'))
    }
  }

  /**
   * hoverOff
   */
  hoverOff () {
    const self = this
    for (const tr of self.targets) {
      tr.classList.remove('hover')
      tr.dispatchEvent(new CustomEvent('mouseleave'))
    }
  }

  /**
   * activeOn
   */
  activeOn () {
    const self = this
    for (const tr of self.targets) {
      tr.classList.add('active')
      tr.dispatchEvent(new CustomEvent('mousedown'))
    }
  }

  /**
   * activeOff
   */
  activeOff (isClick) {
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
  // destroy
  //

  /**
   * destroy
   */
  destroy () {
    const self = this
    self.object.removeEventListener('mouseenter', self.hoverOn.bind(self))
    self.object.removeEventListener('mouseleave', self.hoverOff.bind(self))
    self.object.removeEventListener('mousedown', self.activeOn.bind(self))
    removeEventListener('mouseup', self.activeOff.bind(self))
  }
}

//
// export
//

Xt.PropagateInteraction = PropagateInteraction
