import { Xt } from '../xt.js'
import './toggle'
import JSON5 from 'json5'
import { createPopper } from '@popperjs/core'

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
   * init elements, targets and currents
   */
  initScope() {
    const self = this
    const options = self.options
    // super
    super.initScope()
    // popper
    for (const element of self.elements) {
      for (const target of self.getTargets(element)) {
        const popperInstance = createPopper(element, target, {
          placement: options.position,
          modifiers: [
            {
              name: 'computeStyles',
              options: {
                gpuAcceleration: false,
              },
            },
            {
              name: 'arrow',
              options: {
                element: '[data-arrow]',
                padding: 15,
              },
            },
          ],
          ...options.popperjs,
        })
        Xt.dataStorage.set(target, `${self.componentNamespace}Popper`, popperInstance) // change also in doc xtdropPopperInstance
      }
    }
  }

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
  popperjs: null,
  closeAuto: true,
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
