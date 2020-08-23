import { Xt } from 'xtend-library/src/xt.js'

/**
 * jump-to-content
 */

Xt.mount.push({
  matches: '.jump-to-content',
  mount: object => {
    // event

    const documentFocusin = e => {
      const active = object.contains(e.target)
      if (active) {
        object.classList.remove('sr-only')
        object.classList.add('active')
        Xt.animTimeoutClear(object)
      } else {
        object.classList.remove('active')
        Xt.animTimeout(object, () => {
          object.classList.add('sr-only')
        })
      }
    }

    document.addEventListener('focusin', documentFocusin)

    // unmount

    const unmount = () => {
      document.removeEventListener('focusin', documentFocusin)
    }
    return unmount
  },
})
