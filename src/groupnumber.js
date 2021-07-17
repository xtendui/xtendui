/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'
import RJSON from 'relaxed-json'

/**
 * Groupnumber
 */
class Groupnumber {
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
    const uniqueId = Xt.dataStorage.get(self.container, 'xtUniqueId')
    Xt.dataStorage.set(self.container, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.container, 'xtUniqueId')}`
    // vars
    self.disabled = false
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt.initMatches({ self })
    // vars
    self.initial = true
    // elements
    self.inputs = self.container.querySelectorAll(options.inputs)
    self.steps = self.container.querySelectorAll(options.steps)
    // steps
    for (const step of self.steps) {
      const qty = parseFloat(step.getAttribute('data-xt-step'))
      const stepHandler = Xt.dataStorage.put(step, `change/${self.ns}`, self.eventChange.bind(self, qty))
      step.addEventListener('click', stepHandler)
    }
    // inputs
    for (const input of self.inputs) {
      const inputHandler = Xt.dataStorage.put(input, `change/${self.ns}`, self.eventChange.bind(self, 0))
      input.addEventListener('change', inputHandler)
    }
    // initial
    self.initStart()
    // init
    Xt.frame({
      el: self.container,
      func: () => {
        // dispatch event
        self.container.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
        self.initial = false
        // debug
        if (options.debug) {
          // eslint-disable-next-line no-console
          console.log(`${self.componentName} init`, self)
        }
      },
      ns: `${self.ns}Init`,
    })
    // initialized class
    self.container.setAttribute(`data-${self.componentName}-init`, '')
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
    self.eventChange.bind(self, 0)()
  }

  //
  // methods
  //

  /**
   * change
   * @param {Node|HTMLElement|EventTarget|Window} step
   * @param {Event} e
   */
  eventChange(step, e) {
    const self = this
    // disabled
    if (self.disabled) {
      return
    }
    // trigger external events and skip internal events
    if (!e?.detail?.skip) {
      const input = self.container.querySelector('input')
      let val = parseFloat(input.value)
      val = val + step
      self.validate(val)
    }
  }

  /**
   * validate
   * @param {Number} val
   */
  validate(val) {
    const self = this
    // logic
    val = isNaN(val) ? 0 : val
    for (const input of self.inputs) {
      // check min and max
      const inputMin = parseFloat(input.getAttribute('min')) ?? 1
      const inputMax = parseFloat(input.getAttribute('max')) ?? Infinity
      // disabled
      for (const step of self.steps) {
        const inputStep = parseFloat(step.getAttribute('data-xt-step')) ?? 1
        const qty = inputStep
        step.removeAttribute('disabled')
        if (val <= inputMin && qty < 0) {
          val = inputMin
          step.setAttribute('disabled', 'disabled')
        }
        if (val >= inputMax && qty > 0) {
          val = inputMax
          step.setAttribute('disabled', 'disabled')
        }
      }
      // set value
      input.value = val
      // trigger external events and skip internal events
      if (!self.initial) {
        input.dispatchEvent(new CustomEvent('change', { detail: { skip: true } }))
      }
    }
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
    // remove events
    for (const step of self.steps) {
      const stepHandler = Xt.dataStorage.get(step, `change/${self.ns}`)
      step.removeEventListener('click', stepHandler)
    }
    for (const input of self.inputs) {
      const inputHandler = Xt.dataStorage.get(input, `change/${self.ns}`)
      input.removeEventListener('change', inputHandler)
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

Groupnumber.componentName = 'xt-groupnumber'
Groupnumber.optionsDefault = {
  debug: false,
  // elements
  inputs: 'input[type="number"]',
  steps: '[data-xt-step]',
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

      let self = new Xt.Groupnumber(ref, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
