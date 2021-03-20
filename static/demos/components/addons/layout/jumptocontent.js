import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.CCC--jumptocontent',
  mount: ({ object }) => {
    const unmountJumptocontents = mountJumptocontents({ object })

    // unmount

    return () => {
      unmountJumptocontents()
    }
  },
})

/* mountJumptocontents */

const mountJumptocontents = ({ object }) => {
  const jumptocontents = object.querySelectorAll('.jumptocontent')
  const unmounts = []

  for (const jumptocontent of jumptocontents) {
    // focusIn

    const focusIn = e => {
      const active = jumptocontent.contains(e.target)
      if (active) {
        Xt.animOn(jumptocontent)
      } else {
        Xt.animOff(jumptocontent)
      }
    }

    document.addEventListener('focusin', focusIn)

    // unmount

    unmounts.push(() => {
      document.removeEventListener('focusin', focusIn)
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
