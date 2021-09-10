import { Xt } from 'xtendui'
import 'xtendui/src/form'

Xt.mount({
  matches: '.demo--form-validation',
  mount: ({ ref }) => {
    const unmountScrollToError = mountScrollToError({ ref })
    const unmountValidationRequiredOne = mountValidationRequiredOne({ ref })
    const unmountValidationCustom = mountValidationCustom({ ref })

    // unmount

    return () => {
      unmountScrollToError()
      unmountValidationRequiredOne()
      unmountValidationCustom()
    }
  },
})

/* mountScrollToError */

const mountScrollToError = ({ ref }) => {
  // vars

  let el = ref.querySelector('.custom-validation-error')

  // init

  if (el) {
    el = el.parentNode
    const rect = el.getBoundingClientRect()
    window.scrollTo(window.scrollX, rect.top - Xt.innerHeight * Xt.formScrollWindowFactor)
  }

  // unmount

  return () => {}
}

/* mountValidationRequiredOne */

const mountValidationRequiredOne = ({ ref }) => {
  // vars

  const container = ref.querySelector('[data-node-required-one]')
  const inputs = container.querySelectorAll('input')

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

  // unmount

  return () => {}
}

/* mountValidationCustom */

const mountValidationCustom = ({ ref }) => {
  // vars

  const input = ref.querySelector('.input--constrains')

  // validate

  const validate = () => {
    const constraints = ['^(CH-)?\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950']
    const constraint = new RegExp(constraints[0], '')
    if (constraint.test(input.value)) {
      input.setCustomValidity('')
    } else {
      input.setCustomValidity(constraints[1])
    }
  }

  input.addEventListener('input', validate)
  input.addEventListener('change', validate)
  validate()

  // unmount

  return () => {}
}
