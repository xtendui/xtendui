import { Xt } from 'xtend-library'
import 'xtend-library/src/core/controller/controller.js'

class Overlay extends Xt.Controller {
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
        for (const el of self.elements) {
          const ariaEls = Xt.queryAll(el, options.ariaControls)
          const ariaEl = ariaEls.length ? ariaEls[0] : el
          ariaEl.setAttribute('aria-haspopup', 'dialog')
        }
        for (const tr of self.targets) {
          tr.setAttribute('role', 'dialog')
          tr.setAttribute('aria-modal', 'true')
        }
      } else {
        for (const el of self.elements) {
          el.setAttribute('role', 'dialog')
          el.setAttribute('aria-modal', 'true')
        }
      }
    }
  }
}

//
// option
//

Overlay.componentName = 'xt-overlay'
Overlay.optionsDefault = {
  elements: ':scope > a, :scope > button',
  targets: ':scope > .overlay_outer',
  on: 'click',
  min: 0,
  max: 1,
  instant: { elements: true },
  autoClose: true,
  appendTo: 'body',
  backdrop: 'targets',
  classHtml: 'xt-overlay',
  closeInside: '.overlay_dismiss, :scope > .backdrop',
  scrollbar: true
}

//
// export
//

Xt.Overlay = Overlay

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Overlay.componentName + ']',
  fnc: function mount (object) {
    let self = new Xt.Overlay(object, object.getAttribute('data-' + Xt.Overlay.componentName))

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
