import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--stores-listing-v2',
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

  // click

  const on = tr => {
    if (!tr.classList.contains('on')) {
      // class
      Xt.on({ el: tr })
      // front
      const front = tr.querySelector('.listing-item-front')
      gsap.to(front, {
        opacity: 0,
        duration: 0.5,
        ease: 'expo.out',
      })
      // front
      const back = tr.querySelector('.listing-item-back')
      gsap.set(back, {
        y: 40,
        opacity: 0,
      })
      gsap.to(back, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'expo.out',
      })
    } else {
      off(tr)
    }
  }

  const off = tr => {
    if (tr.classList.contains('on')) {
      // class
      Xt.off({ el: tr })
      // front
      const front = tr.querySelector('.listing-item-front')
      gsap.set(front, {
        y: -40,
        opacity: 0,
      })
      gsap.to(front, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'expo.out',
      })
      // front
      const back = tr.querySelector('.listing-item-back')
      gsap.to(back, {
        y: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  const click = e => {
    const tr = e.target.closest('.listing-item')
    // deactivate
    for (const other of Array.from(items).filter(x => x !== tr)) {
      off(other)
    }
    // activate
    on(tr)
  }

  for (const item of items) {
    item.querySelector('.listing-item-front').addEventListener('click', click)
    item.querySelector('.xt-dismiss').addEventListener('click', () => {
      off(item)
    })
  }

  // unmount

  return () => {}
}
