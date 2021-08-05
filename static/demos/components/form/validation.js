import { Xt } from 'xtendui'
import 'xtendui/src/form'

Xt.mount({
  matches: '.demo--form-validation',
  mount: ({ ref }) => {
    const unmountScrollToError = mountScrollToError({ ref })
    const unmountValidationCustom = mountValidationCustom({ ref })

    // unmount

    return () => {
      unmountScrollToError()
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
