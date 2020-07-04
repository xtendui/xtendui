import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '#iframe--opacity-listing-v1 body .block-listing_item', // add your own selector instead of body to contain the code
  mount: function(object) {
    // vars

    const links = object.tagName === 'A' || object.tagName === 'BUTTON' ? Xt.arrSingle(object) : object.querySelectorAll('a, button')
    const img = object.querySelector('.media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = e => {
      // img
      gsap.to(img, { opacity: imgOpacityIn, duration: Xt.vars.timeSmall, ease: 'quart.out' })
    }

    for (const link of links) {
      link.addEventListener('mouseenter', eventEnter)
    }

    // enter

    const eventLeave = e => {
      // img
      gsap.to(img, { opacity: imgOpacityOut, duration: Xt.vars.timeSmall, ease: 'quart.out', overwrite: true })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', eventLeave)
    }
  },
})
