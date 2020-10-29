import { Xt } from '../xt.js'

Xt.mount.push({
  matches: '[data-xt-group-number]',
  mount: object => {
    // methods

    const inputNumberChange = (step, e) => {
      // trigger external events and skip internal events
      if (!e || !e.detail || !e.detail.skip) {
        const input = object.querySelector('input')
        let val = parseFloat(input.value)
        val = val + step
        inputNumberValidate.bind(object)(val)
      }
    }

    const inputNumberValidate = val => {
      const input = object.querySelector('input')
      const steps = object.querySelectorAll('[data-xt-group-number-step]')
      val = isNaN(val) ? 0 : val
      // check min and max
      const minAttributeAsFloat = parseFloat(input.getAttribute('min'))
      const inputMin = isNaN(minAttributeAsFloat) ? 1 : minAttributeAsFloat
      const maxAttributeAsFloat = parseFloat(input.getAttribute('max'))
      const inputMax = isNaN(maxAttributeAsFloat) ? Infinity : maxAttributeAsFloat
      // disabled
      for (const step of steps) {
        const qty = parseFloat(step.getAttribute('data-xt-group-number-step'))
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

    // init

    inputNumberChange.bind(object, 0)()

    // vars

    const inputEl = object.querySelector('input')

    // steps

    const steps = object.querySelectorAll('[data-xt-group-number-step]')

    for (const step of steps) {
      const qty = parseFloat(step.getAttribute('data-xt-group-number-step'))
      let addHandler = Xt.dataStorage.get(step, 'addHandler')
      addHandler = addHandler || Xt.dataStorage.set(step, 'addHandler', inputNumberChange.bind(object, qty))
      step.removeEventListener('click', addHandler)
      step.addEventListener('click', addHandler)
    }

    // change

    let inputHandler = Xt.dataStorage.get(inputEl, 'inputHandler')
    inputHandler = inputHandler || Xt.dataStorage.set(inputEl, 'inputHandler', inputNumberChange.bind(object, 0))
    inputEl.removeEventListener('change', inputHandler)
    inputEl.addEventListener('change', inputHandler)
  },
})
