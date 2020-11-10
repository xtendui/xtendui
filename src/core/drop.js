import { Xt } from '../xt.js'
import './toggle'
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
  // event util
  //

  /**
   * activate element
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be activated
   * @param {String} type Type of elements
   */
  activate(el) {
    // super
    super.activate(el)
    // instant
    el.classList.add('xt-transition-none')
    requestAnimationFrame(() => {
      el.classList.remove('xt-transition-none')
    })
  }

  //
}

//
// options
//

Drop.componentName = 'xt-drop'
Drop.optionsDefault = {
  // element
  elements: ':scope > a, :scope > button',
  targets: ':scope > .drop',
  // class
  class: 'in in-drop',
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  eventLimit: '.event-limit, .drop > .drop-inner',
  // timing
  instant: {
    elements: true,
    targets: false,
    elementsInner: true,
    targetsInner: true,
  },
  // other
  position: 'bottom-start',
  spaceOverflow: 15,
  spaceFlip: 15,
  spaceArrow: 0,
  popperjs: null,
  closeAuto: true,
  closeOutside: 'body',
  closeInside: '.drop-dismiss, .backdrop, .btn-close',
  zIndex: {
    targets: {
      start: 600, // same as zIndex backdrop
      factor: -1,
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
  matches: `[data-${Xt.Drop.componentName}]`,
  mount: object => {
    // vars

    const optionsMarkup = object.getAttribute(`data-${Xt.Drop.componentName}`)
    const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

    // init

    let self = new Xt.Drop(object, options)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
