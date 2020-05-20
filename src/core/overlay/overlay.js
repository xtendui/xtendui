import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import RJSON from 'relaxed-json'

class Overlay extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }

  //
  // init
  //

  /**
   * init aria
   */
  initAriaRole() {
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      // role
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

  //
}

//
// options
//

Overlay.componentName = 'xt-overlay'
Overlay.optionsDefault = {
  elements: ':scope > a, :scope > button',
  targets: ':scope > .overlay',
  on: 'click',
  min: 0,
  max: 1,
  class: 'active active-overlay',
  eventLimit: '.event-limit, .card-overlay > .card-inner > .card-content',
  autoClose: true,
  appendTo: 'body',
  backdrop: true,
  classHtml: 'xt-overlay',
  closeInside: '.overlay-dismiss, .backdrop, .btn-close',
  closeOnDisable: true,
  scrollbar: true,
  focusLimit: true,
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
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Overlay.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Overlay(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
