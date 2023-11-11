/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2023 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import RJSON from 'relaxed-json'
Xt.JSON = RJSON

/**
 * Mousefollow
 */
class Mousefollow {
  /**
   * fields
   */
  static loaded = {}
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  _width
  _height
  componentName
  ns
  options
  initial
  disabled = false
  container
  targets

  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Node|HTMLElement|EventTarget|Window} container Container node
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

Mousefollow.constructorName = 'Mousefollow'
Mousefollow.componentName = 'xt-mousefollow'
Mousefollow.optionsDefault = {
  debug: false,
  // elements
  targets: '[data-xt-mousefollow-target]',
  // class
  classSkip: false,
  // mousefollow
  transform: true,
  friction: ({ delta }) => {
    return delta / 9
  },
  mouseCheck: false,
}

//
// export
//

Xt.Mousefollow = Mousefollow

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Mousefollow.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Mousefollow.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let selfDestroy
      new Xt.Mousefollow(ref, options).then(self => {
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
