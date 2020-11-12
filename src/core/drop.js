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
  activate(el, type) {
    const self = this
    const options = self.options
    // super
    super.activate(el, type)
    // targets
    if (type === 'targets') {
      // instant
      el.classList.add('xt-transition-none')
      requestAnimationFrame(() => {
        el.classList.remove('xt-transition-none')
      })
      // popper
      const popperInstance = Xt.dataStorage.get(el, `${self.componentNamespace}Popper`)
      if (popperInstance) {
        popperInstance.update()
      } else {
        const element = self.getElements(el)[0]
        const popperInstance = createPopper(element, el, {
          placement: options.position,
          resize: false,
          modifiers: [
            {
              name: 'computeStyles',
              options: {
                gpuAcceleration: false,
              },
            },
            {
              name: 'preventOverflow',
              options: {
                rootBoundary: 'document',
                padding: self.options.spaceOverflow,
              },
            },
            {
              name: 'flip',
              options: {
                padding: self.options.spaceFlip,
              },
            },
            {
              name: 'arrow',
              options: {
                element: '[data-arrow]',
                padding: self.options.spaceArrow,
              },
            },
          ],
          ...options.popperjs,
        })
        Xt.dataStorage.set(el, `${self.componentNamespace}Popper`, popperInstance) // change also in doc xtdropPopperInstance
      }
    }
  }

  /**
   * deactivate element done
   * @param {Node|HTMLElement|EventTarget|Window} el Elements to be deactivated
   * @param {String} type Type of elements
   */
  deactivateDone(el, type) {
    const self = this
    // super
    super.deactivateDone(el, type)
    // popper
    if (type === 'targets') {
      const popperInstance = Xt.dataStorage.get(el, `${self.componentNamespace}Popper`)
      if (popperInstance) {
        popperInstance.destroy()
        Xt.dataStorage.remove(el, `${self.componentNamespace}Popper`)
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
  eventLimit: '.event-limit, .drop > *:first-child',
  // timing
  instant: {
    elements: true,
    targets: false,
    elementsInner: true,
    targetsInner: false,
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
      start: 600, // do not change: same as javascript and decreses with sequential drop
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
