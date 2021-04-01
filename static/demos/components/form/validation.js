import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--form-validation',
  mount: ({ ref }) => {
    const unmountValidation = mountValidation({ ref })

    // unmount

    return () => {
      unmountValidation()
    }
  },
})

/* mountValidation */

const mountValidation = ({ ref }) => {
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

  // unmount

  return () => {}
}
