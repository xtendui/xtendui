import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.jumptocontent',
  mount: ({ object }) => {
    // event

    const documentFocusin = e => {
      const active = object.contains(e.target)
      if (active) {
        Xt.animOn(object)
      } else {
        Xt.animOff(object)
      }
    }

    document.addEventListener('focusin', documentFocusin)

    // unmount

    return () => {
      document.removeEventListener('focusin', documentFocusin)
    }
  },
})
