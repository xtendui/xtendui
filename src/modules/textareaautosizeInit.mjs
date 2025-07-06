/*!
 * Xtend UI (https://xtendui.github.io/xtendui/)
 * @copyright (c) 2017-2025 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from '../xt.mjs'

/**
 * TextareaautosizeInit
 */
export class TextareaautosizeInit {
  //
  // init
  //

  /**
   * init
   */
  _init() {
    const self = this
    // init
    self._initVars()
    self._initLogic()
  }

  /**
   * init vars
   */
  _initVars() {
    const self = this
    // options
    self._optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.options[self.componentName]])
    self._optionsInitial = self.options = Xt.merge([self._optionsDefault, self._optionsCustom])
  }

  /**
   * init logic
   */
  _initLogic() {
    const self = this
    const options = self.options
    // namespace
    self.ns = self.ns ?? Xt.uniqueId()
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt._initMatches({ self, optionsInitial: self._optionsInitial })
    // vars
    self.initial = true
    // key
    const changeHandler = Xt.dataStorage.put(
      self.container,
      `keydown keyup reset/${self.ns}`,
      self._keychange.bind(self),
    )
    self.container.addEventListener('keydown', changeHandler)
    self.container.addEventListener('keyup', changeHandler)
    self.form = self.container.closest('form')
    if (self.form) {
      self.form.addEventListener('reset', changeHandler)
    }
    // initial
    self._initStart()
    // setup
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`setup.${self._componentNs}`))
    // needs frameDouble after ondone
    Xt.frameDouble({
      el: self.container,
      ns: `${self.ns}Init`,
      func: () => {
        // initialized class
        self.container.setAttribute(`data-${self.componentName}-init`, '')
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self._componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.debug(`${self.componentName} init`, self)
        }
      },
    })
    // disable last for proper options.disableDeactivate
    if (self.options.disabled) {
      self.disable()
    }
  }

  /**
   * init start
   */
  _initStart() {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // logic
    self._keychange.bind(self)()
  }

  //
  // methods
  //

  /**
   * keychange
   */
  _keychange() {
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
      self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
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
        self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
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
    self._initLogic()
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
    Xt._remove({ name: self.componentName, el: self.container })
    // dispatch event
    self.container.dispatchEvent(new CustomEvent(`destroy.${self._componentNs}`))
    // delete
    delete this
  }
}
