import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--jumptocontent',
  mount: ({ ref }) => {
    const unmountJumptocontents = mountJumptocontents({ ref })

    // unmount

    return () => {
      unmountJumptocontents()
    }
  },
})

/* mountJumptocontents */

const mountJumptocontents = ({ ref }) => {
  // vars

  const jumptocontents = ref.querySelectorAll('.jumptocontent')
  const unmounts = []

  for (const jumptocontent of jumptocontents) {
    // focusIn

    const focusIn = e => {
      const active = jumptocontent.contains(e.target)
      if (active) {
        Xt.on(jumptocontent)
      } else {
        Xt.off(jumptocontent)
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
