import { Xt } from 'xtendui'
import 'xtendui/src/form'

Xt.mount({
  matches: '.demo--form-validation',
  mount: ({ ref }) => {
    // vars

    let el = ref.querySelector('.custom-backend-error')
    const container = ref.querySelector('[data-node-required-one]')
    const inputs = container.querySelectorAll('input')
    const inputCustom = ref.querySelector('.input--constrains')

    // scroll to error

    if (el) {
      el = el.parentNode
      const rect = el.getBoundingClientRect()
      window.scrollTo(window.scrollX, rect.top - Xt.innerHeight * Xt.formScrollWindowFactor)
    }

    // validate

    const validate = e => {
      // skip revalidate
      if (!e?.detail?.skip) {
        let passed = false
        for (const input of inputs) {
          if (input.value && input.value !== '') {
            passed = true
            break
          }
        }
        for (const input of inputs) {
          if (passed) {
            input.setCustomValidity('')
          } else {
            input.setCustomValidity(container.getAttribute('data-node-required-one'))
          }
          // revalidate
          input.dispatchEvent(new CustomEvent('change', { detail: { skip: true } }))
        }
      }
    }

    for (const input of inputs) {
      input.addEventListener('input', validate)
      input.addEventListener('change', validate)
      validate()
    }

    // validateCustom

    const validateCustom = () => {
      const constraints = ['^(CH-)?\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950']
      const constraint = new RegExp(constraints[0], '')
      if (constraint.test(inputCustom.value)) {
        inputCustom.setCustomValidity('')
      } else {
        inputCustom.setCustomValidity(constraints[1])
      }
    }

    inputCustom.addEventListener('input', validateCustom)
    inputCustom.addEventListener('change', validateCustom)
    validateCustom()
  },
})
