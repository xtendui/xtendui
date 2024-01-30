/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2024 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import RJSON from 'relaxed-json'
Xt.JSON = RJSON

/**
 * Groupnumber
 */
class Groupnumber {
  /**
   * fields
   */
  static loaded = {}
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  componentName
  ns
  options
  initial
  disabled = false
  container
  inputs
  steps

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
      container: self.container,
      name: self.constructorName,
      suffix: 'Init',
      observer: self._optionsCustom.observer,
    }).then(() => {
      // this is the order: Xt._set before self._init and Xt.get listen to setup.xt to have self variables ready
      Xt._set({ name: self.componentName, el: self.container, selfPromise })
      self._init()
      return self
    })
    return selfPromise
  }
}

//
// options
//

Groupnumber.constructorName = 'Groupnumber'
Groupnumber.componentName = 'xt-groupnumber'
Groupnumber.optionsDefault = {
  debug: false,
  // groupnumber
  limit: true,
  voidable: true,
  validate: ({ val, step }) => {
    if (step && val % step) {
      return Math.ceil(val / step) * step
    }
    return val
  },
  // quantity
  min: '-Infinity',
  max: 'Infinity',
  // elements
  inputs: 'input[type="number"]',
  steps: '[data-xt-step]',
  // event
  events: {
    input: 'change',
    steps: 'click',
  },
  // other
  a11y: {
    controls: true,
  },
}

//
// export
//

Xt.Groupnumber = Groupnumber

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Groupnumber.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Groupnumber.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let selfDestroy = () => {}
      new Xt.Groupnumber(ref, options).then(self => {
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
