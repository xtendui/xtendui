import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'
import JSON5 from 'json5'

/**
 * Drop
 */
class Drop extends Xt.Toggle {
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

  //
}

//
// options
//

Drop.componentName = 'xt-drop'
Drop.optionsDefault = {
  // element
  elements: false,
  elementsInner: ':scope > a, :scope > button',
  targets: ':scope > .drop',
  targetsInner: ':scope > .drop-inner',
  // class
  class: 'active active-drop',
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  eventLimit: '.event-limit, .drop',
  // timing
  instant: {
    elements: false,
    targets: false,
    elementsInner: true,
    targetsInner: true,
  },
  // other
  autoClose: true,
  closeOutside: 'body',
  closeInside: '.drop-dismiss, .backdrop, .btn-close',
  zIndex: {
    targets: {
      start: 500,
      factor: 1,
    },
  },
  ariaControls: ':scope > a, :scope > button',
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
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute('data-' + Xt.Drop.componentName)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Drop(object, options)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
