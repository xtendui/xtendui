/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2024 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import './toggle.mjs'
import RJSON from 'relaxed-json'
Xt.JSON = RJSON

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
}

//
// options
//

Drop.constructorName = 'Drop'
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
  closeInside: '.xt-drop, .xt-backdrop',
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
      start: 700, // same as options.zIndex.targets.start
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

      let selfDestroy = () => {}
      new Xt.Drop(ref, options).then(self => {
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
