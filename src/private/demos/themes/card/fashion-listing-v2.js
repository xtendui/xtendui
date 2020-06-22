import { Xt } from 'xtend-library/src/xt.js'

/**
 * more info rotate card
 */

Xt.mount.push({
  matches: '#iframe--fashion-listing-v2 .listing_item',
  mount: object => {
    // vars

    const closeBtn = object.querySelector('.btn-close')

    // eventClick

    const eventClick = () => {
      object.classList.add('active')
    }

    object.addEventListener('click', eventClick)

    // eventClose

    const eventClose = () => {
      object.classList.remove('active')
    }

    closeBtn.addEventListener('click', eventClose)
  },
})
