/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017-2023 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import RJSON from 'relaxed-json'
Xt.JSON = RJSON

/**
 * Toggle
 */
class Toggle {
  /**
   * fields
   */
  static loaded = {}
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  _mode
  _classes = []
  _classesIn = []
  _classesOut = []
  _classesDone = []
  _classesInitial = []
  _classesBefore = []
  _classesAfter = []
  _initialCurrents = []
  _destroyElements
  _containerElements
  _containerTargets
  _oldIndex
  _inverse
  _queueIn = []
  _queueOut = []
  _autoblock
  _disabledManual
  _hasHash
  _autorunning
  _observer
  _focusTrap
  _hasContainer
  _search = ''
  componentName
  ns
  options
  initial
  disabled = false
  container
  elements = []
  targets = []
  index
  direction

  // slider
  _usedWidth
  _wrap
  _keepHeight
  _autoHeight
  _groups
  drag = {}
  wheel = {}
  pags

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
    self.fileName = self.componentName.split('-').pop()
    self._componentNs = self.componentName.replace('-', '.')
    // set self
    Xt._set({ name: self.componentName, el: self.container, self })
    // load
    return Xt._load({
      name: 'Toggle',
      suffix: 'Init',
    }).then(() => {
      if (self.componentName !== 'xt-toggle' && self.componentName !== 'xt-overlay') {
        return Xt._load({
          name: self.constructor.name,
          suffix: 'Init',
        }).then(() => {
          self._init()
          return self
        })
      } else {
        self._init()
        return self
      }
    })
  }
}

//
// options
//

Toggle.componentName = 'xt-toggle'
Toggle.optionsDefaultSuper = {
  debug: false,
  // element
  elements: '[data-xt-toggle-element]',
  targets: '[data-xt-toggle-target]',
  elementsInner: false,
  targetsInner: false,
  exclude: false,
  // class
  class: 'on',
  classIn: 'in',
  classOut: 'out',
  classDone: 'done',
  classInitial: 'initial',
  classBefore: 'dir-before',
  classAfter: 'dir-after',
  classSkip: false,
  hash: 'data-xt-hash',
  groupSeparator: ',',
  groupElements: true,
  // quantity
  min: 0,
  max: 1,
  // event
  on: 'click',
  off: 'click',
  mouseParent: false,
  eventLimit: '.xt-event-limit',
  closeDeep: false,
  closeInside: false,
  closeOutside: false,
  preventEvent: false,
  // timing
  queue: {
    elements: false,
    targets: true,
    elementsInner: false,
    targetsInner: true,
  },
  delay: false,
  delayIn: false,
  delayOut: false,
  duration: false,
  durationIn: false,
  durationOut: false,
  // auto
  auto: {
    time: false,
    initial: true,
    step: 1,
    inverse: false,
    pause: 'a, button',
    loop: true,
  },
  // other
  disableDeactivate: false,
  scrollto: false,
  scrolltoInit: false,
  matches: false,
  disabled: false,
  visibleReinit: false,
  loop: false,
  jump: false,
  navigation: false,
  appendTo: false,
  classBody: false,
  closeauto: false,
  openauto: false,
  mediaLoaded: false,
  mediaLoadedReinit: false,
  zIndex: false,
  focusLimit: false,
  focusTrap: {
    initialFocus: false,
    preventScroll: true,
    allowOutsideClick: true,
    fallbackFocus: 'body', // needed to prevent error on deactivation sometimes
  },
  collapseHeight: false,
  collapseWidth: false,
  a11y: {
    role: false,
    labelElements: false,
    labelTargets: true,
    controls: true,
    selected: false,
    expanded: false,
    live: true,
    disabled: true,
    keyboard: true,
    vertical: false,
    items: false,
  },
}

//
// export
//

Xt.Toggle = Toggle

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Toggle.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Toggle.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let selfDestroy
      new Xt.Toggle(ref, options).then(self => {
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
