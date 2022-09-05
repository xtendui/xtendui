/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2023 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import './toggle.mjs'
import RJSON from 'relaxed-json'

/**
 * Toast
 */
class Toast extends Xt.Toggle {
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
}

//
// options
//

Toast.componentName = 'xt-toast'
Toast.optionsDefault = {
  // element
  elements: '[data-xt-toast-element]',
  // class
  classSkip: {
    elements: true,
    elementsInner: true,
  },
  // quantity
  min: Infinity,
  max: Infinity,
  // event
  on: '',
  off: '',
  mouseParent: false,
  eventLimit: '.xt-event-limit, .xt-toast',
  closeauto: true,
  openauto: false,
  closeDeep: '.xt-dismiss',
  closeInside: '.xt-backdrop',
  closeOutside: 'body',
  preventEvent: true,
  // timing
  queue: {
    elements: false,
    targets: true,
    elementsInner: false,
    targetsInner: true,
  },
  // other
  zIndex: {
    targets: {
      start: 8000, // same as options.zIndex.targets.start
      factor: -1,
    },
  },
}

//
// export
//

Xt.Toast = Toast

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Toast.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Toast.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Toast(ref, options)
      console.log(self)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
