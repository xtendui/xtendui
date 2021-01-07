import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/**
 * media hover
 */

Xt.mount.push({
  matches: '#iframe--products-listing-v2 a.listing-item',
  mount: object => {
    // vars

    const mediaContainerScale = 0.015
    const mediaScale = 0.06
    const maskOpacityOn = 0.2
    const maskOpacityOff = 0.2
    const maskOpacityDone = 0.1

    // enter

    const eventEnter = e => {
      const tr = e.target
      // media
      const media = tr.querySelector('.media-container')
      gsap.to(media, { scale: 1 + mediaContainerScale, duration: 0.5, ease: 'quart.out' })
      const mediaInner = tr.querySelector('.media-inner')
      gsap.to(mediaInner, { scale: 1 + mediaScale, duration: 1.5, ease: 'quart.out' })
      // mask
      const mask = tr.querySelector('.media-mask')
      gsap.killTweensOf(mask)
      gsap.set(mask, { height: 0, y: media.offsetHeight, skewY: 0, opacity: maskOpacityOff })
      gsap.to(mask, { height: '150%', y: 0, opacity: maskOpacityOn, duration: 0.5, ease: 'quart.out' }) // @FIX to cover height: '150%'
      gsap.to(mask, { skewY: -10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
      })
      gsap.to(mask, { opacity: maskOpacityDone, duration: 0.75, ease: 'quart.out', delay: 0.5 })
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // media
      const media = tr.querySelector('.media-container')
      gsap.to(media, { scale: 1, duration: 0.5, ease: 'quart.out' })
      const mediaInner = tr.querySelector('.media-inner')
      gsap.to(mediaInner, { scale: 1, duration: 1.5, ease: 'quart.out' })
      // mask
      const mask = tr.querySelector('.media-mask')
      gsap.to(mask, { height: '50%', y: '-100%', opacity: maskOpacityOff, duration: 0.5, ease: 'quart.out' }) // @FIX to cover height: '50%', y: '-100%'
      gsap.to(mask, { skewY: 10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
      })
    }

    object.addEventListener('mouseleave', eventLeave)
  },
})

/**
 * fade
 */

Xt.mount.push({
  matches: '#iframe--products-listing-v2 .listing-item', // add here all fade selectors css and js
  mount: (object, mount) => {
    // vars

    const scrollY = 15
    const scrollScale = 1.04

    // multiple mount object with raf

    mount.triggers = mount.triggers ? mount.triggers : []
    mount.triggers.push(object)
    cancelAnimationFrame(mount.raf)
    mount.raf = requestAnimationFrame(() => {
      // reset mount object

      const triggers = mount.triggers
      mount.triggers = []

      // fade

      ScrollTrigger.batch(triggers, {
        once: true,
        start: 'top bottom-=10%',
        end: 'bottom top+=10%',
        onEnter: (batch, scrollTriggers) => {
          const direction = scrollTriggers[0].direction
          const y = direction > 0 ? -scrollY : scrollY
          gsap.killTweensOf(batch)
          gsap.set(batch, { y: y, scale: scrollScale })
          gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'quart.out', stagger: 0.15 })
        },
      })
    })
  },
})
