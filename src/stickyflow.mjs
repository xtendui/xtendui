/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2023 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import RJSON from 'relaxed-json'
Xt.JSON = RJSON

/**
 * Stickyflow
 */
class Stickyflow {
  /**
   * fields
   */
  static loaded = {}
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  _scrollTopOld
  componentName
  ns
  options
  initial
  disabled = false
  container
  element
  filler

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self._optionsCustom = optionsCustom
    self.constructorName = self.constructor.constructorName
    self.componentName = self.constructor.componentName
    self._componentNs = self.componentName.replace('-', '.')
    // load
    const selfPromise = Xt._load({
      name: self.constructorName,
      suffix: 'Init',
    }).then(() => {
      self._init()
      return self
    })
    // set self
    Xt._set({ name: self.componentName, el: self.container, selfPromise })
    return selfPromise
  }
}

//
// options
//

Stickyflow.constructorName = 'Stickyflow'
Stickyflow.componentName = 'xt-stickyflow'
Stickyflow.optionsDefault = {
  debug: false,
  // elements
  element: false,
  filler: false,
}

//
// export
//

Xt.Stickyflow = Stickyflow

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Stickyflow.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Stickyflow.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let selfDestroy
      new Xt.Stickyflow(ref, options).then(self => {
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
