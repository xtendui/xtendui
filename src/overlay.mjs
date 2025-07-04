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
 * Overlay
 */
class Overlay extends Xt.Toggle {
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

Overlay.constructorName = 'Overlay'
Overlay.componentName = 'xt-overlay'
Overlay.optionsDefault = {
  // element
  elements: '[data-xt-overlay-element]',
  targets: '[data-xt-overlay-target]',
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  mouseParent: false,
  eventLimit: '.xt-event-limit, .xt-overlay',
  closeauto: true,
  openauto: true,
  closeDeep: '.xt-dismiss',
  closeInside: '.xt-overlay, .xt-backdrop, .xt-overlay-container',
  closeOutside: false,
  // timing
  queue: {
    elements: false,
    targets: true,
    elementsInner: false,
    targetsInner: true,
  },
  // other
  disableDeactivate: true,
  appendTo: 'body',
  classBody: 'xt-scrollbar-overlay',
  focusLimit: true,
  zIndex: {
    targets: {
      start: 5000, // same as options.zIndex.targets.start
      factor: 0,
    },
  },
  a11y: {
    role: 'dialog',
    labelElements: false,
    labelTargets: true,
    hiddenTargets: false,
    controls: true,
    selected: false,
    expanded: true,
    hidden: false,
    live: false,
    disabled: true,
    keyboard: true,
    vertical: false,
    items: false,
  },
}

//
// export
//

Xt.Overlay = Overlay

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Overlay.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Overlay.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let selfDestroy = () => {}
      new Xt.Overlay(ref, options).then(self => {
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
