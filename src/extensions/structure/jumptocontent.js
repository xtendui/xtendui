import { Xt } from 'xtend-library'

/**
 * xtend extension: jumptocontent
 */

Xt.mount.push({
  matches: '.jumptocontent',
  mount: function (object) {
    // event

    const documentFocusIn = function (e) {
      const active = object.contains(e.target)
      if (active) {
        object.classList.remove('sr-only')
        object.classList.add('active')
        Xt.animTimeoutClear(object)
      } else {
        object.classList.remove('active')
        Xt.animTimeout(object, function () {
          object.classList.add('sr-only')
        })
      }
    }

    document.addEventListener('focusin', documentFocusIn)

    // unmount

    return function unmount () {
      document.removeEventListener('focusin', documentFocusIn)
    }
  }
})
