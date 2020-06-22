import { Xt } from 'xtend-library'
import 'xtend-library/src/variables.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '#iframe--fashion-listing-v1 body .block-listing_item', // add your own selector instead of body to contain the code
  mount: object => {
    // append

    if (!object.querySelector('.media_mask')) {
      object.querySelector('.media-container').prepend(Xt.createElement('<span class="media_mask"></span>'))
    }

    // vars

    const imgScaleContainer = 0.03
    const imgScale = 0.06

    const maskOpacityOn = 0.2
    const maskOpacityOff = 0.2
    const maskOpacityDone = 0

    const titleY = -10

    // enter

    const eventEnter = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1 + imgScaleContainer, duration: Xt.vars.timeSmall, ease: 'quart.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeBig, ease: 'quart.out' })
      // mask
      const mask = tr.querySelector('.media_mask')
      gsap.set(mask, { height: 0, y: img.offsetHeight, skewY: 0, opacity: maskOpacityOff })
      gsap.to(mask, { height: '150%', y: 0, opacity: maskOpacityOn, duration: Xt.vars.timeSmall, ease: 'quart.out' }) // @FIX to cover height: '150%'
      gsap.to(mask, { skewY: -10, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' })
      })
      gsap.to(mask, { opacity: maskOpacityDone, duration: Xt.vars.timeMedium, ease: 'quart.out', delay: Xt.vars.timeSmall })
      // title
      const title = tr.querySelector('.card-title')
      gsap.to(title, { y: titleY, duration: Xt.vars.timeMedium, ease: 'expo.out' })
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1, duration: Xt.vars.timeSmall, ease: 'quart.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeBig, ease: 'quart.out' })
      // mask
      const mask = tr.querySelector('.media_mask')
      gsap.to(mask, { height: '50%', y: '-100%', opacity: maskOpacityOff, duration: Xt.vars.timeSmall, ease: 'quart.out' }) // @FIX to cover height: '50%', y: '-100%'
      gsap.to(mask, { skewY: 10, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' })
      })
      // title
      const title = tr.querySelector('.card-title')
      gsap.to(title, { y: 0, duration: Xt.vars.timeMedium, ease: 'expo.out' })
    }

    object.addEventListener('mouseleave', eventLeave)
  },
})
