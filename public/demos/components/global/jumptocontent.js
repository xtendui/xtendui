import { Xt } from 'xtendui'

/* mountJumptocontent */

const mountJumptocontent = ({ ref }) => {
  // vars

  const jumptocontent = ref.querySelector('.jumptocontent')

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
}

/* mount */

Xt.mount({
  matches: '.demo--jumptocontent',
  mount: ({ ref }) => {
    const unmountJumptocontent = mountJumptocontent({ ref })

    // unmount

    return () => {
      unmountJumptocontent()
    }
  },
})
