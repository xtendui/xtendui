import { Xt } from '../xt.js'
import JSON5 from 'json5'

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
    // set self
    Xt.set(self.componentName, self.object, self)
    // init
    self.init()
  }

  //
  // init
  //

  /**
   * init
   */
  init() {
    const self = this
    // namespace
    const uniqueId = Xt.dataStorage.get(self.object, 'xtUniqueId')
    Xt.dataStorage.set(self.object, 'xtUniqueId', uniqueId || Xt.getuniqueId())
    self.ns = `${self.componentName}-${Xt.dataStorage.get(self.object, 'xtUniqueId')}`
    // options
    self.options = Xt.merge([self.constructor.optionsDefault, self.optionsCustom])
    // elements
    self.inputs = self.object.querySelectorAll(self.options.inputs)
    self.steps = self.object.querySelectorAll(self.options.steps)
    // steps
    for (const step of self.steps) {
      const qty = parseFloat(step.getAttribute('data-xt-step'))
      let stepHandler = Xt.dataStorage.put(step, `change/${self.ns}`, self.eventChange.bind(self, qty))
      step.addEventListener('click', stepHandler)
    }
    // inputs
    for (const input of self.inputs) {
      let inputHandler = Xt.dataStorage.put(input, `change/${self.ns}`, self.eventChange.bind(self, 0))
      input.addEventListener('change', inputHandler)
    }
    // initial
    self.eventChange.bind(self, 0)()
    // initialized class
    self.object.classList.add(`${self.componentName}-init`)
    // listener dispatch
    requestAnimationFrame(() => {
      self.object.dispatchEvent(new CustomEvent(`init.${self.componentNs}`))
    })
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
      input.dispatchEvent(new CustomEvent('change', { detail: { skip: true } }))
    }
  }

  //
  // util
  //

  /**
   * destroy
   */
  destroy() {
    const self = this
    // remove events
    for (const step of self.steps) {
      let stepHandler = Xt.dataStorage.get(step, `change/${self.ns}`)
      step.removeEventListener('click', stepHandler)
    }
    for (const input of self.inputs) {
      let inputHandler = Xt.dataStorage.get(input, `change/${self.ns}`)
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
  Xt.mount.push({
    matches: `[data-${Xt.Groupnumber.componentName}]`,
    mount: ({ object }) => {
      // vars

      const optionsMarkup = object.getAttribute(`data-${Xt.Groupnumber.componentName}`)
      const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

      // init

      let self = new Xt.Groupnumber(object, options)

      // unmount

      return () => {
        self.destroy()
        self = null
      }
    },
  })
}
