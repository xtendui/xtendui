import { Xt } from 'xtendui'

Xt.mount({
  matches: '.demo--stores-listing-v1',
  mount: ({ ref }) => {
    const unmountListing = mountListing({ ref })

    // unmount

    return () => {
      unmountListing()
    }
  },
})

/* mountListing */

const mountListing = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.listing-item')

  for (const item of items) {
    // vars

    const actionBtn = item.querySelector('.listing-action')
    const closeBtn = item.querySelector('.xt-dismiss')

    // click

    const click = e => {
      e.stopPropagation()
      item.classList.add('on')
    }

    actionBtn.addEventListener('click', click)

    // close

    const close = e => {
      e.stopPropagation()
      item.classList.remove('on')
    }

    closeBtn.addEventListener('click', close)
  }

  // unmount

  return () => {}
}
