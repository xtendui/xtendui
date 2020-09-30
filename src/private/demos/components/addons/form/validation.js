import { Xt } from 'xtend-library'
import 'xtend-library/src/addons/form/validation'

Xt.mount.push({
  matches: '#iframe--validation body .custom-constrain',
  mount: object => {
    // validationCustom

    function validationCustom (e) {
      const item = e.target
      const constraints = ['^(CH-)?\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950'];
      const constraint = new RegExp(constraints[0], '');
      if (constraint.test(item.value)) {
        item.setCustomValidity('');
      } else {
        item.setCustomValidity(constraints[1]);
      }
    }
    object.addEventListener('input', validationCustom);
  },
})
