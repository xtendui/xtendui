import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

/**
 * .demo--2020-bertani-mask
 */

Xt.mount.push({
  matches: '.demo--2020-bertani-mask .block-listing_item',
  mount: object => {
    // vars

    const imgScale = 0.04

    // enter

    const eventEnter = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1 - imgScale, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeSmall, ease: 'expo.out' })
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.out' })
    }

    object.addEventListener('mouseleave', eventLeave)

    // unmount

    const unmount = () => {}
    return unmount
  },
})
