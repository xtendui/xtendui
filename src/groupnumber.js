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
    for (const button of self.steps) {
      const buttonHandler = Xt.dataStorage.put(button, `change/${self.ns}`, self.eventChange.bind(self, { button }))
      button.addEventListener('click', buttonHandler)
    }
    // inputs
    const events = options.events?.input ? [...options.events.input.split(' ')] : []
    if (events.length) {
      for (const input of self.inputs) {
        const inputHandler = Xt.dataStorage.put(
          input,
          `${options.events.on}/${self.ns}`,
          self.eventChange.bind(self, {})
        )
        for (const event of events) {
          input.addEventListener(event, inputHandler)
        }
      }
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
    self.eventChange.bind(self)()
  }

  //
  // methods
  //

  /**
   * change
   * @param {Object} params
   * @param {Node|HTMLElement|EventTarget|Window} params.button
   * @param {Event} e
   */
  eventChange({ button } = {}, e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // trigger external events and skip internal events
    if (!e?.detail?.skip) {
      // inputs
      for (const input of self.inputs) {
        const inputStep = input.getAttribute('step')
        const buttonStep = button?.getAttribute('data-xt-step')
        const step =
          inputStep && inputStep !== ''
            ? parseFloat(inputStep) * Math.sign(parseFloat(buttonStep))
            : parseFloat(buttonStep) ?? 1
        let val = parseFloat(input.value)
        val = isNaN(val) ? 0 : val
        if (step) {
          val += step
          // remove floating point up to step
          val = parseFloat(val.toFixed(self.countDecimals({ num: step })))
        }
        self.validate({ val, input })
      }
      // disabled
      if (options.limit) {
        for (const button of self.steps) {
          const enabled = Xt.dataStorage.get(button, `${self.ns}ButtonEnabled`)
          if (enabled) {
            button.removeAttribute('disabled')
          } else {
            button.setAttribute('disabled', 'disabled')
          }
          Xt.dataStorage.remove(button, `${self.ns}ButtonEnabled`)
        }
      }
    }
  }

  /**
   * validate
   * @param {Object} params
   * @param {Number} params.val
   * @param {Node|HTMLElement|EventTarget|Window} params.input
   */
  validate({ val, input } = {}) {
    const self = this
    const options = self.options
    // step
    const inputStep = input.getAttribute('step')
    const step = inputStep && inputStep !== '' ? parseFloat(inputStep) : null
    if (options.validate) {
      val = options.validate({ val, step })
    }
    // limit and disabled
    if (options.limit) {
      const inputMin = input.getAttribute('min')
      const inputMax = input.getAttribute('max')
      const min = inputMin && inputMin !== '' ? parseFloat(inputMin) : options.min
      const max = inputMax && inputMax !== '' ? parseFloat(inputMax) : options.max
      for (const button of self.steps) {
        const buttonStep = button.getAttribute('data-xt-step')
        if (buttonStep < 0) {
          if (val <= min) {
            val = min
          } else {
            Xt.dataStorage.set(button, `${self.ns}ButtonEnabled`, true)
          }
        } else if (buttonStep > 0) {
          if (val >= max) {
            val = max
          } else {
            Xt.dataStorage.set(button, `${self.ns}ButtonEnabled`, true)
          }
        }
      }
    }
    // set value
    input.value = val
    // trigger external events and skip internal events
    if (!self.initial) {
      input.dispatchEvent(new CustomEvent('change', { detail: { skip: true } }))
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
   * countDecimals
   * @param {Object} params
   * @param {Boolean} params.num
   */
  countDecimals({ num }) {
    if (Math.floor(num) === num) return 0
    return num.toString().split('.')[1].length || 0
  }

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
    for (const button of self.steps) {
      const buttonHandler = Xt.dataStorage.get(button, `change/${self.ns}`)
      button.removeEventListener('click', buttonHandler)
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
  // groupnumber
  limit: true,
  validate: false,
  // quantity
  min: '-Infinity',
  max: 'Infinity',
  // event
  events: {
    input: 'change',
  },
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
