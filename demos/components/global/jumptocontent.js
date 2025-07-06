import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--jumptocontent .jumptocontent',
  mount: ({ ref }) => {
    // vars

    const jumptocontent = ref

    // focusIn

    const focusIn = e => {
      const active = jumptocontent.contains(e.target)
      if (active) {
        Xt.on({ el: jumptocontent })
      } else {
        Xt.off({ el: jumptocontent })
      }
    }

    document.addEventListener('focusin', focusIn)

    // unmount

    return () => {
      document.removeEventListener('focusin', focusIn)
    }
  },
})
