import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--javascript-animation-css',
  mount: ({ ref }) => {
    const unmountActivation = mountActivation({ ref })

    // unmount

    return () => {
      unmountActivation()
    }
  },
})

/* mountActivation */

const mountActivation = ({ ref }) => {
  // vars

  const tr = ref.querySelector('[data-js-target]')

  // init

  const timeout = () => {
    if (!tr.classList.contains('on')) {
      Xt.on({ el: tr })
    } else {
      Xt.off({ el: tr })
    }
  }

  tr.dataset.interval = setInterval(timeout, 2000)

  // unmount

  return () => {
    clearTimeout(tr.dataset.interval)
  }
}
