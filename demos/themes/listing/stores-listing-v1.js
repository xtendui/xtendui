import { Xt } from 'xtendui'

/**
 * .listing-item activation
 */

Xt.mount.push({
  matches: '#iframe--stores-listing-v1 body .listing-item', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const actionBtn = object.querySelector('.listing-action')
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
