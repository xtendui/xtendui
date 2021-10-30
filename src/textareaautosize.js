/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE.txt)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'
Xt.RJSON = RJSON

/**
 * Textareaautosize
 */
class Textareaautosize {
  /**
   * constructor
   * @param {Node|HTMLElement|EventTarget|Window} object Base node
   * @param {Object} optionsCustom User options
   * @constructor
   */
  constructor(object, optionsCustom = {}) {
    const self = this
    self.container = object
    self.optionsCustom = optionsCustom
    self.componentName = self.constructor.componentName
    self.componentNs = self.componentName.replace('-', '.')
    // init
    self.initVars()
    self.initLogic()
  }

  //
  // init
  //

  /**
   * init vars
   */
  initVars() {
    const self = this
    // options
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
  }

  /**
   * init logic
   */
  initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set({ name: self.componentName, el: self.container, self })
    // namespace
    self.uniqueId = self.uniqueId ?? Xt.uniqueId()
    self.ns = `${self.componentName}-${self.uniqueId}`
    // vars
    self.disabled = false
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt.initMatches({ self })
    // vars
    self.initial = true
    // key
    const changeHandler = Xt.dataStorage.put(
      self.container,
      `keydown keyup reset/${self.ns}`,
      self.keychange.bind(self)
    )
    self.container.addEventListener('keydown', changeHandler)
    self.container.addEventListener('keyup', changeHandler)
    self.form = self.container.closest('form')
    if (self.form) {
      self.form.addEventListener('reset', changeHandler)
    }
    // initial
    self.initStart()
    // init
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Init`,
      func: () => {
        // initialized class
        self.container.setAttribute(`data-${self.componentName}-init`, '')
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.log(`${self.componentName} init`, self)
        }
      },
    })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled || self.disabledManual) {
      self.disable()
    }
  }

  /**
   * init start
   */
  initStart() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // logic
    self.keychange.bind(self)()
  }

  //
  // methods
  //

  /**
   * keychange
   */
  keychange() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // size
    self.container.style.height = '5px'
    self.container.style.height = `${self.container.scrollHeight}px` // fixes both safari RAF and form reset
    Xt.frame({
      el: self.container,
      ns: `${self.ns}Keychange`,
      func: () => {
        self.container.style.height = '5px' // fixes both safari RAF and form reset
        self.container.style.height = `${self.container.scrollHeight}px`
      },
    })
  }

  //
  // status
  //

  /**
   * enable
   */
  enable() {
    const self = this
    if (self.disabled) {
      // enable
      self.disabled = false
      // dispatch event
      self.container.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
    }
  }

  /**
   * disable
   * @param {Object} params
   * @param {Boolean} params.skipEvent Skip dispatch event
   */
  disable({ skipEvent = false } = {}) {
    const self = this
    if (!self.disabled) {
      // disable
      self.disabled = true
      // size
      self.container.style.height = ''
      Xt.frame({
        el: self.container,
        ns: `${self.ns}Keychange`,
      })
      // dispatch event
      if (!skipEvent) {
        self.container.dispatchEvent(new CustomEvent(`status.${self.componentNs}`))
      }
    }
  }

  //
  // util
  //

  /**
   * reinit
   */
  reinit() {
    const self = this
    // reinit
    self.initLogic()
  }

  /**
   * destroy
   */
  destroy() {
    const self = this
    // reset
    self.container.style.height = ''
    // remove events
    const changeHandler = Xt.dataStorage.get(self.container, `keydown keyup reset/${self.ns}`)
    self.container.removeEventListener('keydown', changeHandler)
    self.container.removeEventListener('keyup', changeHandler)
    if (self.form) {
      self.form.removeEventListener('reset', changeHandler)
    }
    // initialized class
    self.container.removeAttribute(`data-${self.componentName}-init`)
    // set self
    Xt.remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
    // delete
    delete this
  }

  //
}

//
// options
//

Textareaautosize.componentName = 'xt-textareaautosize'
Textareaautosize.optionsDefault = {
  debug: false,
}

//
// export
//

Xt.Textareaautosize = Textareaautosize

//
// observe
//

if (typeof window !== 'undefined') {
  Xt.mount({
    matches: `[data-${Xt.Textareaautosize.componentName}]`,
    mount: ({ ref }) => {
      // vars

      const optionsMarkup = ref.getAttribute(`data-${Xt.Textareaautosize.componentName}`)
      const options = optionsMarkup ? RJSON.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Textareaautosize(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
