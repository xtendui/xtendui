/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
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
    self.object = object
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
    self.optionsDefault = Xt.merge([self.constructor.optionsDefault, Xt.optionsGlobal[self.componentName]])
    self.optionsInitial = self.options = Xt.merge([self.optionsDefault, self.optionsCustom])
  }

  /**
   * init logic
   */
  initLogic() {
    const self = this
    const options = self.options
    // set self
    Xt.set(self.componentName, self.object, self)
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // vars
    self.initial = true
    // elements
    self.inputs = self.object.querySelectorAll(options.inputs)
    self.steps = self.object.querySelectorAll(options.steps)
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
    // keep the same level of raf for custom listener
    requestAnimationFrame(() => {
      // listener dispatch
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
      self.initial = false
    })
    // initialized class
    self.object.classList.add(`${self.componentName}-init`)
  }

  /**
   * init start
   * @param {Boolean} saveCurrents
   */
  initStart() {
    const self = this
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
    // trigger external events and skip internal events
    if (!e?.detail?.skip) {
      const input = self.object.querySelector('input')
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
    self.object.classList.remove(`${self.componentName}-init`)
    // set self
    Xt.remove(self.componentName, self.object)
    // listener dispatch
    self.object.dispatchEvent(new CustomEvent(`destroy.${self.componentNs}`))
  }

  //
}

//
// options
//

Groupnumber.componentName = 'xt-groupnumber'
Groupnumber.optionsDefault = {
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
