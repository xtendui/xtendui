import { Xt } from 'xtend-library'
import 'xtend-library/src/core/javascript/controller.js'

class Toggle extends Xt.Controller {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsJs User options
   * @constructor
   */
  constructor (object, optionsJs = {}) {
    super(object, optionsJs)
  }

  //
  // init
  //

  /**
   * init aria
   */
  initAria () {
    super.initAria()
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      if (self.targets.length) {
        if (self.mode === 'multiple') {
          self.object.setAttribute('role', 'tablist')
          if (options.max > 1) {
            self.object.setAttribute('aria-multiselectable', 'true')
          }
          for (const el of self.elements) {
            const ariaEls = Xt.queryAll(el, options.ariaControls)
            const ariaEl = ariaEls.length ? ariaEls[0] : el
            ariaEl.setAttribute('role', 'tab')
          }
          for (const tr of self.targets) {
            tr.setAttribute('role', 'tabpanel')
          }
        }
      }
    }
  }
}

//
// option
//

Toggle.componentName = 'xt-toggle'
Toggle.optionsDefault = {
  elements: ':scope > a, :scope > button',
  targets: ':scope > [class^="toggle--"], :scope > [class*=" toggle--"]',
  on: 'click',
  min: 0,
  max: 1,
  instant: { elements: true }
}

//
// export
//

Xt.Toggle = Toggle

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Toggle.componentName + ']',
  fnc: function mount (object) {
    let self = new Xt.Toggle(object, object.getAttribute('data-' + Xt.Toggle.componentName))

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
