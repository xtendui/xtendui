import { Xt } from 'xtendui'
import gsap from 'gsap'
gsap.defaults({ overwrite: 'auto' })
gsap.config({ force3D: false })

/**
 * .listing activation
 */

Xt.mount.push({
  matches: '#iframe--stores-listing-v2 body .listing', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const items = object.querySelectorAll('.listing-item')

    // click

    const eventOn = tr => {
      if (!tr.classList.contains('active')) {
        // class
        tr.classList.add('active')
        // front
        const front = tr.querySelector('.listing-front')
        gsap.to(front, { opacity: 0, duration: 0.5, ease: 'expo.out' })
        // front
        const back = tr.querySelector('.listing-back')
        gsap.set(back, { y: 40, opacity: 0 })
        gsap.to(back, { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out' })
      } else {
        eventOff(tr)
      }
    }

    const eventOff = tr => {
      if (tr.classList.contains('active')) {
        // class
        tr.classList.remove('active')
        // front
        const front = tr.querySelector('.listing-front')
        gsap.set(front, { y: -40, opacity: 0 })
        gsap.to(front, { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out' })
        // front
        const back = tr.querySelector('.listing-back')
        gsap.to(back, { y: 0, opacity: 0, duration: 0.5, ease: 'expo.out' })
      }
    }

    const eventClick = e => {
      const tr = e.target.closest('.listing-item')
      // disable on mobile
      if (matchMedia('(max-width: 767px)').matches) {
        return
      }
      // deactivate
      for (const other of Array.from(items).filter(x => x !== tr)) {
        eventOff(other)
      }
      // activate
      eventOn(tr)
    }

    for (const item of items) {
      item.querySelector('.listing-front').addEventListener('click', eventClick)
      item.querySelector('.btn-close').addEventListener('click', () => {
        eventOff(item)
      })
    }
  },
})
