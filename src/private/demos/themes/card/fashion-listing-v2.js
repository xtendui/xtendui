import { Xt } from 'xtend-library/src/xt.js'

Xt.mount.push({
  matches: '#iframe--fashion-listing-v2 .block-listing_item',
  mount: object => {
    // vars

    const actionBtn = object.querySelector('.block-listing_action')
    const closeBtn = object.querySelector('.btn-close')

    // eventClick

    const eventClick = e => {
      e.stopPropagation()
      object.classList.add('active')
    }

    actionBtn.addEventListener('click', eventClick)

    // eventClose

    const eventClose = e => {
      e.stopPropagation()
      object.classList.remove('active')
    }

    closeBtn.addEventListener('click', eventClose)
  },
})
