import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--stores-listing-v1',
  mount: ({ object }) => {
    const unmountListing = mountListing({ object })

    // unmount

    return () => {
      unmountListing()
    }
  },
})

/* mountListing */

const mountListing = ({ object }) => {
  const items = object.querySelectorAll('.listing-item')

  for (const item of items) {
    // vars

    const actionBtn = item.querySelector('.listing-action')
    const closeBtn = item.querySelector('.xt-dismiss')

    // click

    const click = e => {
      e.stopPropagation()
      item.classList.add('active')
    }

    actionBtn.addEventListener('click', click)

    // close

    const close = e => {
      e.stopPropagation()
      item.classList.remove('active')
    }

    closeBtn.addEventListener('click', close)
  }

  // unmount

  return () => {}
}
