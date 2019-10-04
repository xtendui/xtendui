import RJSON from 'relaxed-json'
import { Xt } from 'xtend-library'

class PropagateInteraction {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor (object, optionsCustom = {}) {
    const self = this
    self.object = object
    self.optionsCustom = optionsCustom
    Xt.checkDefined(self, function () {
      self.init()
    })
  }

  //
  // init
  //

  /**
   * init
   */
  init () {
    const self = this
    // options
    self.options = Xt.merge([self.constructor.optionsDefault, self.optionsCustom])
    // events
    self.targets = self.object.querySelectorAll(self.options.targets)
    console.log(self.object, self.options);
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
// option
//

PropagateInteraction.componentName = 'xt-propagate-interaction'
PropagateInteraction.optionsDefault = {
}

//
// export
//

Xt.PropagateInteraction = PropagateInteraction

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.PropagateInteraction.componentName + ']',
  mount: function (object) {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.PropagateInteraction.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.PropagateInteraction(object, options)

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
