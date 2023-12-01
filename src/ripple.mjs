/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2023 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'

/**
 * Ripple
 */
class Ripple {
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
  inner
  targets
  size
  top
  left
  sizeFinal
  scaleFinal

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

Ripple.componentName = 'xt-ripple'
Ripple.optionsDefault = {
  debug: false,
  // ripple
  sizeInitial: 0.3,
  onlyInside: 'a, button, .xt-button',
}

//
// export
//

Xt.Ripple = Ripple
