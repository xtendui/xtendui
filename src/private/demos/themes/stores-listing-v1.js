import { Xt } from 'xtend-library'

/**
 * listing-page
 */

Xt.mount.push({
  matches: '#iframe--stores-listing-v1 body .listing-page_item', // add your own selector instead of body to contain the code
  mount: (object) => {
    // vars

    const actionBtn = object.querySelector('.listing-page_action')
    const closeBtn = object.querySelector('.btn-close')

    // eventClick

    const eventClick = (e) => {
      e.stopPropagation()
      object.classList.add('active')
    }

    actionBtn.addEventListener('click', eventClick)

    // eventClose

    const eventClose = (e) => {
      e.stopPropagation()
      object.classList.remove('active')
    }

    closeBtn.addEventListener('click', eventClose)
  },
})
