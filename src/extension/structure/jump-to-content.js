import { Xt } from 'xtend-library'

/**
 * xtend extension: jump-to-content
 */

Xt.mount.push({
  matches: '.jump-to-content',
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
