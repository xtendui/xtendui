/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE.txt)
 */

import { Xt } from './xt'
import './toggle'
import RJSON from 'relaxed-json'
import { createPopper } from '@popperjs/core'
Xt.RJSON = RJSON
Xt.createPopper = createPopper

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
  // event util
  //

  /**
   * activate element
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.el Elements to be activated
   * @param {String} params.type Type of element
   */
  _activate({ el, type } = {}) {
    super._activate({ el, type })
    const self = this
    const options = self.options
    // popperjs
    if (options.popperjs) {
      if (type === 'targets') {
        // instant
        el.style.transition = 'none'
        requestAnimationFrame(() => {
          el.style.transition = ''
        })
        // popperjs
        const element = self.getElements({ el })[0]
        const popperEl = options.positionInner ? element.querySelector(options.positionInner) ?? element : element
        // fix element and target must be visible
        if (Xt.visible({ el: popperEl }) && Xt.visible({ el })) {
          const arrow = el.querySelector(':scope > .xt-arrow')
          const popperOptionsDefault = {
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
            ],
          }
          if (arrow) {
            popperOptionsDefault.modifiers.push({
              name: 'arrow',
              options: {
                element: arrow,
                padding: options.spaceArrow === false ? arrow.offsetHeight / 2 : options.spaceArrow,
              },
            })
          }
          // inset
          if (options.inset) {
            const inset = {
              name: 'offset',
              options: {
                offset: ({ placement, popper }) => {
                  if (placement.search('left') !== -1 || placement.search('right') !== -1) {
                    return [0, -popper.width]
                  }
                  if (placement.search('top') !== -1 || placement.search('bottom') !== -1) {
                    return [0, -popper.height]
                  }
                  return []
                },
              },
            }
            popperOptionsDefault.modifiers.push(inset)
            el.setAttribute('data-popper-inset', 'true')
          } else {
            el.removeAttribute('data-popper-inset', 'true')
          }
          const popperOptions = Xt.merge([popperOptionsDefault, options.popperjs])
          // init
          let popperInstance = Xt.dataStorage.get(el, 'PopperInstance')
          if (popperInstance) {
            popperInstance.setOptions(popperOptions)
          } else {
            popperInstance = createPopper(popperEl, el, popperOptions)
            Xt.dataStorage.set(el, 'PopperInstance', popperInstance)
          }
          // fix recalc position with new css depending on position
          requestAnimationFrame(() => {
            popperInstance.update()
          })
        }
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
  elements: '[data-xt-drop-element]',
  targets: '[data-xt-drop-target]',
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  mouseParent: false,
  eventLimit: '.xt-event-limit, .xt-drop',
  closeauto: true,
  openauto: false,
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
  disableDeactivate: true,
  position: 'bottom-start',
  inset: false,
  positionInner: false,
  strategy: 'absolute',
  spaceOverflow: 15,
  spaceFlip: 15,
  spaceArrow: false,
  popperjs: true,
  zIndex: {
    targets: {
      start: 400, // same as options.zIndex.targets.start
      factor: -1,
    },
  },
  a11y: {
    role: 'popup',
    labelElements: false,
    labelTargets: false,
    controls: true,
    selected: false,
    expanded: true,
    live: true,
    disabled: true,
    keyboard: true,
    vertical: false,
    items: 'a, button',
  },
}

//
// export
//

Xt.Drop = Drop

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Drop.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Drop.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Drop(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
