import { Xt } from 'xtendui'
import gsap from 'gsap'

/**
 * .listing-item scale
 */

Xt.mount.push({
  matches: '#iframe--furniture-listing-v1 body .listing-item', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const imgScale = 0.04
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1
    const contentY = -10

    // enter

    const eventEnter = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { opacity: imgOpacityIn, scale: 1 - imgScale, duration: 0.5, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: 0.5, ease: 'expo.out' })
      // content
      const content = tr.querySelector('.listing-content')
      if (content) {
        gsap.to(content, { y: contentY, duration: 0.5, ease: 'expo.out' })
      }
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { opacity: imgOpacityOut, scale: 1, duration: 0.75, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: 0.75, ease: 'expo.out' })
      // content
      const content = tr.querySelector('.listing-content')
      if (content) {
        gsap.to(content, { y: 0, duration: 0.5, ease: 'expo.out' })
      }
    }

    object.addEventListener('mouseleave', eventLeave)
  },
})
