/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'

/**
 * Scrollto
 */
class Scrollto {
  /**
   * fields
   */
  static loaded = {}
  _optionsCustom
  _optionsDefault
  _componentNs
  _classes
  componentName
  ns
  options
  initial
  disabled = false
  container
  hashchange
  target
  scrollers
  scroller
  position
  space
  duration

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

Scrollto.constructorName = 'Scrollto'
Scrollto.componentName = 'xt-scrollto'
Scrollto.optionsDefault = {
  debug: false,
  // elements
  anchors: '[href*="{hash}"]:not([href$="#"])',
  scrollers: '.xt-overlay:not([data-xt-overlay-disabled])',
  // class
  class: 'on',
  // event
  events: 'scroll off.xt.overlay',
  scrollActivation: true,
  scrollDelay: 200,
  hash: false,
  // scroll
  position: ({ self }) => {
    const rect = self.target.getBoundingClientRect()
    let position = rect.top + self.scroller.scrollTop
    if (self.scroller !== document.scrollingElement) {
      const rectScrollElement = self.scroller.getBoundingClientRect()
      position = position - rectScrollElement.top
    }
    return position
  },
  space: () => {
    return window.innerHeight / 6
  },
  duration: ({ self }) => {
    const overlay = self.target.closest('.xt-overlay')
    // instant scroll on initial or hashchange or inside overlay and not already activated
    if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
    return 1
  },
}

//
// export
//

Xt.Scrollto = Scrollto
