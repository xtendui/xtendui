import { Xt } from 'xtendui'
import gsap from 'gsap'

/**
 * media scale
 */

Xt.mount.push({
  matches: '#iframe--furniture-listing-v1 body .listing-item', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const imgScale = 0.04
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const eventEnter = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { opacity: imgOpacityIn, scale: 1 - imgScale, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeSmall, ease: 'expo.out' })
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { opacity: imgOpacityOut, scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.out' })
    }

    object.addEventListener('mouseleave', eventLeave)
  },
})
