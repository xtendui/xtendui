import { Xt } from './xt'
import './toggle'
import JSON5 from 'json5'
import { createPopper } from '@popperjs/core'

/**
 * Tooltip
 */
class Tooltip extends Xt.Toggle {
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
      if (options.aria === true || options.aria.role) {
        for (const el of self.elements) {
          el.setAttribute('aria-haspopup', 'true')
        }
        for (const tr of self.targets) {
          tr.setAttribute('role', 'tooltip')
        }
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
    // popperjs
    if (options.popperjs) {
      if (type === 'targets') {
        // instant
        el.classList.add('xt-instant')
        requestAnimationFrame(() => {
          el.classList.remove('xt-instant')
        })
        // popperjs
        const element = self.getElements(el)[0]
        const arrow = el.querySelector(':scope > .xt-arrow')
        const popperInstance = createPopper(element, el, {
          placement: el.getAttribute('data-xt-position') || options.position,
          strategy: options.strategy,
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
                padding: options.spaceOverflow,
              },
            },
            {
              name: 'flip',
              options: {
                padding: options.spaceFlip,
              },
            },
            arrow
              ? {
                  name: 'arrow',
                  options: {
                    element: arrow,
                    padding: options.spaceArrow === false ? arrow.offsetHeight / 2 : options.spaceArrow,
                  },
                }
              : {},
          ],
          ...options.popperjs,
        })
        Xt.dataStorage.set(el, 'PopperInstance', popperInstance)
        // fix recalc position with new css depending on position
        requestAnimationFrame(() => {
          popperInstance.update()
        })
      }
    }
  }

  //
}

//
// options
//

Tooltip.componentName = 'xt-tooltip'
Tooltip.optionsDefault = {
  // element
  elements: ':scope > a, :scope > button',
  targets: ':scope > .xt-tooltip',
  elementsInner: ':scope > a, :scope > button',
  // class
  class: 'in in-tooltip',
  classSkip: {
    elements: true,
    elementsInner: true,
  },
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'mouseenter',
  off: 'mouseleave',
  eventLimit: '.event-limit, .xt-tooltip',
  closeAuto: true,
  closeDeep: '.xt-dismiss',
  closeInside: '.xt-backdrop',
  closeOutside: 'body',
  preventEvent: false,
  // timing
  queue: {
    elements: false,
    targets: true,
    elementsInner: false,
    targetsInner: true,
  },
  // other
  position: 'top',
  strategy: 'absolute',
  spaceOverflow: 15,
  spaceFlip: 15,
  spaceArrow: false,
  popperjs: true,
  zIndex: {
    targets: {
      start: 500, // same as options.zIndex.targets.start
      factor: -1,
    },
  },
}

//
// export
//

Xt.Tooltip = Tooltip

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Tooltip.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Tooltip.componentName}`)
      const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Tooltip(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
