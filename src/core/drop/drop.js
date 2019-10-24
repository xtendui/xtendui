import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import RJSON from 'relaxed-json'

class Drop extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor (object, optionsCustom = {}) {
    super(object, optionsCustom)
  }

  //
  // init
  //

  /**
   * init aria
   */
  initAriaRole () {
    const self = this
    const options = self.options
    // aria
    if (options.aria) {
      // role
      for (const el of self.elements) {
        const ariaEls = Xt.queryAll(el, options.ariaControls)
        const ariaEl = ariaEls.length ? ariaEls[0] : el
        ariaEl.setAttribute('aria-haspopup', 'listbox')
      }
      for (const tr of self.targets) {
        tr.setAttribute('role', 'listbox')
      }
    }
  }
}

//
// options
//

Drop.componentName = 'xt-drop'
Drop.optionsDefault = {
  elements: false,
  targets: ':scope > .drop',
  elementsInner: ':scope > a, :scope > button',
  on: 'click',
  min: 0,
  max: 1,
  instant: { elementsInner: true },
  eventLimit: '.event-limit, .drop',
  autoclose: true,
  closeOutside: 'body',
  closeInside: '.drop-dismiss, .card--drop > .card-inner > .btn-close',
  ariaControls: ':scope > a, :scope > button'
}

//
// export
//

Xt.Drop = Drop

//
// observe
//

Xt.mount.push({
  matches: '[data-' + Xt.Drop.componentName + ']',
  mount: function (object) {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Drop.componentName)
    const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Drop(object, options)

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
