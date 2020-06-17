import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

/**
 * .demo--2020-opacity-hover
 */

Xt.mount.push({
  matches: '.demo--2020-opacity-hover a',
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

    // unmount

    const unmount = function() {}
    return unmount
  },
})
