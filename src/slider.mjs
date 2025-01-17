/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import './toggle.mjs'
import RJSON from 'relaxed-json'
Xt.JSON = RJSON

/**
 * Slider
 */
class Slider extends Xt.Toggle {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    super(object, optionsCustom)
  }
}

//
// options
//

Slider.constructorName = 'Slider'
Slider.componentName = 'xt-slider'
Slider.optionsDefault = {
  // slider
  mode: 'relative',
  group: false,
  groupSame: true,
  align: 'center',
  contain: true,
  wrap: false,
  free: false,
  dragposition: false,
  nooverflow: '!transform-none justify-center',
  autoHeight: false,
  keepHeight: false,
  pagination: '[data-xt-slider-pagination]',
  hideDisable: '[data-xt-slider-pagination], [data-xt-nav], [data-xt-slider-hide-disabled]',
  drag: {
    dragger: '[data-xt-slider-dragger]',
    threshold: 30,
    factor: 1,
    overflow: ({ overflow }) => {
      return Math.min(overflow, Math.log(1 + Math.pow(overflow, 10)))
    },
    noMouse: false,
  },
  // element
  elementsTemplate: 'hidden',
  elements: '[data-xt-slider-element]',
  targets: '[data-xt-slider-target]',
  // quantity
  min: 1,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  mouseParent: false,
  // timing
  queue: false,
  // other
  noobserver: false,
  visibleReinit: true,
  jump: false,
  navigation: '[data-xt-nav]',
  zIndex: {
    targets: {
      start: 200, // same as options.zIndex.targets.start
      factor: -1,
    },
  },
  a11y: {
    role: 'carousel',
    labelElements: false,
    labelTargets: true,
    controls: true,
    selected: false,
    expanded: false,
    live: true,
    disabled: true,
    keyboard: true,
    vertical: false,
    items: false,
  },
}

//
// export
//

Xt.Slider = Slider

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Slider.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Slider.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let selfDestroy = () => {}
      new Xt.Slider(ref, options).then(self => {
        selfDestroy = () => {
          self.destroy()
          self = null
        }
      })

      // unmount

      return () => {
        selfDestroy()
      }
    },
  })
}
