/*!
 * Xtend UI (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license MIT (https://github.com/xtendui/xtendui/blob/master/LICENSE.txt)
 */

import { Xt } from './xt.mjs'
import JSON5 from 'json5'
Xt.JSON5 = JSON5

/**
 * Groupnumber
 */
class Groupnumber {
  /**
   * fields
   */
  _optionsCustom
  _optionsDefault
  _optionsInitial
  _componentNs
  componentName
  ns
  options
  initial
  disabled = false
  container
  inputs
  steps

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
    // init
    self._initVars()
    self._initLogic()
  }

  //
  // init
  //

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
    // set self
    Xt._set({ name: self.componentName, el: self.container, self })
    // namespace
    self.ns = self.ns ?? Xt.uniqueId()
    // enable first for proper initial activation
    self.enable()
    // matches
    Xt._initMatches({ self, optionsInitial: self._optionsInitial })
    // vars
    self.initial = true
    // elements
    self.inputs = self.container.querySelectorAll(options.inputs)
    self.steps = self.container.querySelectorAll(options.steps)
    // voidable
    for (const input of self.inputs) {
      Xt.dataStorage.set(input, `voidable/${self.ns}`, input.value === '')
    }
    // steps
    const eventsSteps = options.events?.steps ? [...options.events.steps.split(' ')] : []
    if (eventsSteps.length) {
      for (const step of self.steps) {
        const stepHandler = Xt.dataStorage.put(
          step,
          `${options.events.steps}/${self.ns}`,
          self._eventChange.bind(self, { button: step })
        )
        for (const event of eventsSteps) {
          step.addEventListener(event, stepHandler)
        }
      }
    }
    // inputs
    const eventsInput = options.events?.input ? [...options.events.input.split(' ')] : []
    if (eventsInput.length) {
      for (const input of self.inputs) {
        const inputHandler = Xt.dataStorage.put(
          input,
          `${options.events.input}/${self.ns}`,
          self._eventChange.bind(self, {})
        )
        for (const event of eventsInput) {
          input.addEventListener(event, inputHandler)
        }
      }
    }
    // ally
    self._initA11y()
    // initial
    self._initStart()
    // init
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
    self._eventChange.bind(self)()
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
  _eventChange({ button } = {}, e) {
    const self = this
    const options = self.options
    // disabled
    if (self.disabled) {
      return
    }
    // trigger external events and skip internal events
    if (!e?.detail?.skip) {
      if (e) {
        e.preventDefault()
        // prevent same listener because we retrigger 'change' after
        e.stopImmediatePropagation()
      }
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
          val = parseFloat(val.toFixed(self._countDecimals({ num: step })))
        }
        self._validate({ val, input })
      }
      // disabled
      if (options.limit) {
        for (const button of self.steps) {
          const disabled = Xt.dataStorage.get(button, `${self.ns}ButtonDisabled`)
          if (disabled) {
            button.setAttribute('disabled', 'disabled')
          } else {
            button.removeAttribute('disabled')
          }
          Xt.dataStorage.remove(button, `${self.ns}ButtonDisabled`)
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
  _validate({ val, input } = {}) {
    const self = this
    const options = self.options
    // step
    const inputStep = input.getAttribute('step')
    const step = inputStep && inputStep !== '' ? parseFloat(inputStep) : null
    if (options.validate) {
      val = options.validate({ val, step })
    }
    // limit
    if (options.limit) {
      const voidable = Xt.dataStorage.get(input, `voidable/${self.ns}`)
      const inputMin = input.getAttribute('min')
      const inputMax = input.getAttribute('max')
      const min = inputMin && inputMin !== '' ? parseFloat(inputMin) : options.min
      const max = inputMax && inputMax !== '' ? parseFloat(inputMax) : options.max
      for (const button of self.steps) {
        const buttonStep = button.getAttribute('data-xt-step')
        let voidMin
        let voidMax
        if (voidable) {
          if (val === 0) {
            val = ''
          }
          if (min >= 0) {
            voidMin = true
            if (val < min) {
              val = ''
            }
          }
          if (max <= 0) {
            voidMax = true
            if (val > max) {
              val = ''
            }
          }
        }
        if (buttonStep < 0) {
          if (val < min || (!voidMin && val === min) || (voidMin && val === '')) {
            val = val !== '' ? min : val
            Xt.dataStorage.set(button, `${self.ns}ButtonDisabled`, true)
          }
        } else if (buttonStep > 0) {
          if (val > max || (!voidMax && val === max) || (voidMax && val === '')) {
            val = val !== '' ? max : val
            Xt.dataStorage.set(button, `${self.ns}ButtonDisabled`, true)
          }
        }
      }
    }
    // set value
    input.value = val
    // trigger external events and skip internal events
    if (!self.initial) {
      input.dispatchEvent(new Event('input', { detail: { skip: true } })) // needed to change value (e.g. x-model)
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
      // dispatch event
      if (!skipEvent) {
        self.container.dispatchEvent(new CustomEvent(`status.${self._componentNs}`))
      }
    }
  }

  //
  // a11y
  //

  /**
   * init a11y
   */
  _initA11y() {
    const self = this
    const options = self.options
    // a11y
    if (options.a11y) {
      // init
      self._initA11yId()
      self._initA11ySetup()
    }
  }

  /**
   * init a11y id
   * @param {Object} params
   */
  _initA11yId() {
    const self = this
    const options = self.options
    // id
    if (options.a11y.controls) {
      for (const input of self.inputs) {
        const id = input.getAttribute('id')
        if (!id) {
          input.setAttribute('id', Xt.uniqueId())
        }
      }
    }
  }

  /**
   * init a11y setup
   */
  _initA11ySetup() {
    const self = this
    const options = self.options
    // aria-controls
    if (options.a11y.controls) {
      let str = ''
      for (const input of self.inputs) {
        str += `${input.getAttribute('id')} `
      }
      for (const step of self.steps) {
        step.setAttribute('aria-controls', str.trim())
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
  _countDecimals({ num } = {}) {
    if (Math.floor(num) === num) return 0
    return num.toString().split('.')[1].length || 0
  }

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
    const options = self.options
    // remove events
    const eventsSteps = options.events?.steps ? [...options.events.steps.split(' ')] : []
    if (eventsSteps.length) {
      for (const step of self.steps) {
        const stepHandler = Xt.dataStorage.get(step, `${options.events.steps}/${self.ns}`)
        for (const event of eventsSteps) {
          step.removeEventListener(event, stepHandler)
        }
      }
    }
    const eventsInput = options.events?.input ? [...options.events.input.split(' ')] : []
    if (eventsInput.length) {
      for (const input of self.inputs) {
        const inputHandler = Xt.dataStorage.get(input, `${options.events.input}/${self.ns}`)
        for (const event of eventsInput) {
          input.removeEventListener(event, inputHandler)
        }
      }
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
  voidable: true,
  validate: ({ val, step }) => {
    if (step && val % step) {
      return Math.ceil(val / step) * step
    }
    return val
  },
  // quantity
  min: '-Infinity',
  max: 'Infinity',
  // elements
  inputs: 'input[type="number"]',
  steps: '[data-xt-step]',
  // event
  events: {
    input: 'change',
    steps: 'click',
  },
  // other
  a11y: {
    controls: true,
  },
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
      const options = optionsMarkup ? JSON5.parse(optionsMarkup) : {}

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
