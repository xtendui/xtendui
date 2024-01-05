/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2024 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from '../xt.mjs'
import { createPopper } from '@popperjs/core'
Xt.createPopper = createPopper

/**
 * DropInit
 */
export class DropInit extends Xt.Toggle {
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
                padding: options.spaceArrow === false ? arrow.getBoundingClientRect().height / 2 : options.spaceArrow,
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
}
