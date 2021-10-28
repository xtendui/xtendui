/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import './toggle'
import RJSON from 'relaxed-json'
Xt.RJSON = RJSON

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

Overlay.componentName = 'xt-overlay'
Overlay.optionsDefault = {
  // element
  elements: '[data-xt-overlay-element]',
  targets: '[data-xt-overlay-target]',
  elementsInner: ':scope > a, :scope > button',
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  eventLimit: '.xt-event-limit, .xt-overlay',
  closeauto: true,
  openauto: true,
  closeDeep: '.xt-dismiss',
  closeInside: '.xt-backdrop, .xt-overlay-container',
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
  focusTrap: {
    initialFocus: false,
    preventScroll: true,
    allowOutsideClick: true,
    fallbackFocus: 'body', // needed to prevent error on deactivation sometimes
  },
  zIndex: {
    targets: {
      start: 5000, // same as options.zIndex.targets.start
      factor: 0,
    },
  },
  aria: {
    role: 'dialog',
    labelElements: false,
    labelTargets: false,
    controls: true,
    selected: false,
    expanded: false,
    live: true,
    disabled: true,
    keyboard: true,
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

      let self = new Xt.Overlay(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
