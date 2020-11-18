import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--custom-constrain',
  mount: object => {
    // eventValidation

    const eventValidation = () => {
      const constraints = ['^(CH-)?\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950']
      const constraint = new RegExp(constraints[0], '')
      if (constraint.test(object.value)) {
        object.setCustomValidity('')
      } else {
        object.setCustomValidity(constraints[1])
      }
    }

    object.addEventListener('input', eventValidation)
    object.addEventListener('change', eventValidation)
  },
})
