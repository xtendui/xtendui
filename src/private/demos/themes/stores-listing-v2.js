import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

/**
 * listing-page
 */

Xt.mount.push({
  matches: '#iframe--stores-listing-v2 body .listing-page', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const items = object.querySelectorAll('.listing-page_item')

    // click

    const eventOn = tr => {
      if (!tr.classList.contains('active')) {
        // class
        tr.classList.add('active')
        // front
        const front = tr.querySelector('.listing-page_front')
        gsap.to(front, { opacity: 0, duration: Xt.vars.timeSmall, ease: 'expo.out' })
        // front
        const back = tr.querySelector('.listing-page_back')
        gsap.set(back, { y: 40, opacity: 0 })
        gsap.to(back, { y: 0, opacity: 1, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      } else {
        eventOff(tr)
      }
    }

    const eventOff = tr => {
      if (tr.classList.contains('active')) {
        // class
        tr.classList.remove('active')
        // front
        const front = tr.querySelector('.listing-page_front')
        gsap.set(front, { y: -40, opacity: 0 })
        gsap.to(front, { y: 0, opacity: 1, duration: Xt.vars.timeSmall, ease: 'expo.out' })
        // front
        const back = tr.querySelector('.listing-page_back')
        gsap.to(back, { y: 0, opacity: 0, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      }
    }

    const eventClick = e => {
      const tr = e.target.closest('.listing-page_item')
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
      item.addEventListener('click', eventClick)
    }

    // unmount

    const unmount = () => {}
    return unmount
  },
})
