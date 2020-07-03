import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '#iframe--opacity-listing-v1 body .block-listing_item', // add your own selector instead of body to contain the code
  mount: function(object) {
    // vars

    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = e => {
      // img
      const img = object.querySelector('.media')
      gsap.to(img, { opacity: imgOpacityIn, duration: Xt.vars.timeSmall, ease: 'quart.out' })
    }

    object.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = e => {
      // img
      const img = object.querySelector('.media')
      gsap.to(img, { opacity: imgOpacityOut, duration: Xt.vars.timeSmall, ease: 'quart.out', overwrite: true })
    }

    object.addEventListener('mouseleave', eventLeave)
    object.addEventListener('mousedown', eventLeave)

    // unmount

    const unmount = function() {}
    return unmount
  },
})
