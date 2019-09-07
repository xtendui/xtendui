import { Xt } from 'xtend-library'
import 'xtend-library/src/core/javascript/controller.js'

class Smooth extends Xt.Controller {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor (object, optionsJs = {}) {
    super(object, optionsJs)
  }
}

//
// option
//

Smooth.componentName = 'xt-smooth'
Smooth.optionsDefault = {
  class: '',
  wheel: {
    selector: 'scrollingElement',
    block: false,
    limit: true,
    transform: false,
    horizontal: false,
    factor: 1,
    friction: 'return delta / 9',
    frictionLimit: 1.5
  }
}

//
// export
//

Xt.Smooth = Smooth

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Smooth.componentName + ']',
  fnc: function mount (object) {
    let self = new Xt.Smooth(object, object.getAttribute('data-' + Xt.Smooth.componentName))

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
