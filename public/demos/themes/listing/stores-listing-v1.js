import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--stores-listing-v1',
  mount: ({ ref }) => {
    // vars

    const items = ref.querySelectorAll('.listing-item')

    for (const item of items) {
      // vars

      const actionBtn = item.querySelector('[data-node-action]')
      const closeBtn = item.querySelector('.xt-dismiss')

      // click

      const click = e => {
        e.stopPropagation()
        Xt.on({ el: item })
      }

      actionBtn.addEventListener('click', click)

      // close

      const close = e => {
        e.stopPropagation()
        Xt.off({ el: item })
      }

      closeBtn.addEventListener('click', close)
    }
  },
})
