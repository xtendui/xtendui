/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2023 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import RJSON from 'relaxed-json'
Xt.JSON = RJSON

/**
 * Infinitescroll
 */
class Infinitescroll {
  /**
   * fields
   */
  static loaded = {}
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  _itemsFake
  _url
  _scrollResume
  _scrollTopOld
  _loading
  componentName
  ns
  options
  initial
  disabled = false
  container
  current
  scrollUp
  scrollDown
  itemsContainer
  spaceAdditionals
  paginations

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
    self.componentName = self.constructor.componentName
    self._componentNs = self.componentName.replace('-', '.')
    // load
    return Xt._load({
      name: self.constructor.name,
      suffix: 'Init',
    }).then(() => {
      self._init()
      return self
    })
  }
}

//
// options
//

Infinitescroll.componentName = 'xt-infinitescroll'
Infinitescroll.optionsDefault = {
  debug: false,
  // infinitescroll
  get: false,
  nocache: true,
  prefetch: true,
  perPage: 1,
  // quantity
  min: 1,
  max: 'Infinity',
  // event
  events: {
    scrollUp: false,
    scrollDown: false,
    on: 'click',
  },
  // element
  elements: {
    items: false,
    item: false,
    scrollUp: false,
    scrollDown: false,
    spaceAdditional: false,
    pagination: false,
  },
}

//
// export
//

Xt.Infinitescroll = Infinitescroll

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Infinitescroll.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Infinitescroll.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let selfDestroy
      new Xt.Infinitescroll(ref, options).then(self => {
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
