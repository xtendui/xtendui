import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--form-validation',
  mount: ({ object }) => {
    const unmountValidation = mountValidation({ object })

    // unmount

    return () => {
      unmountValidation()
    }
  },
})

/* mountValidation */

const mountValidation = ({ object }) => {
  const input = object.querySelector('.input--constrains')

  // eventValidation

  const eventValidation = () => {
    const constraints = ['^(CH-)?\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950']
    const constraint = new RegExp(constraints[0], '')
    if (constraint.test(input.value)) {
      input.setCustomValidity('')
    } else {
      input.setCustomValidity(constraints[1])
    }
  }

  input.addEventListener('input', eventValidation)
  input.addEventListener('change', eventValidation)

  // unmount

  return () => {}
}
