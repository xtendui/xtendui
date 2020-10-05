import { Xt } from 'xtend-ui'

Xt.mount.push({
  matches: '.jump-to-content',
  mount: object => {
    // event

    const documentFocusin = e => {
      const active = object.contains(e.target)
      if (active) {
        object.classList.add('active')
        object.classList.remove('out')
        object.classList.remove('sr-only')
        requestAnimationFrame(() => {
          object.classList.add('in')
        })
        Xt.animTimeoutClear(object)
      } else {
        object.classList.remove('active')
        object.classList.remove('in')
        object.classList.add('out')
        Xt.animTimeout(object, () => {
          object.classList.remove('out')
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
