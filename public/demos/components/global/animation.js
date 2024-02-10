import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--javascript-animation [data-node-target]',
  mount: ({ ref }) => {
    // vars

    const tr = ref

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
  },
})
