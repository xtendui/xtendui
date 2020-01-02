import { Xt } from 'xtend-library'

Xt.mount.push({
  matches: '.jump-to-content',
  mount: function(object) {
    // event

    const documentFocusin = function(e) {
      const active = object.contains(e.target)
      if (active) {
        object.classList.remove('sr-only')
        object.classList.add('active')
        Xt.animTimeoutClear(object)
      } else {
        object.classList.remove('active')
        Xt.animTimeout(object, function() {
          object.classList.add('sr-only')
        })
      }
    }

    document.addEventListener('focusin', documentFocusin)

    // unmount

    const unmount = function() {
      document.removeEventListener('focusin', documentFocusin)
    }
    return unmount
  },
})
