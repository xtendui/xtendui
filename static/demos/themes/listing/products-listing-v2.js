import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount.push({
  matches: '.demo--products-listing-v2',
  mount: ({ object }) => {
    const unmountSlider = mountSlider({ object })
    const unmountMedia = mountMedia({ object })
    const unmountFade = mountFade({ object })

    // unmount

    return () => {
      unmountSlider()
      unmountMedia()
      unmountFade()
    }
  },
})

/* mountSlider */

const mountSlider = ({ object }) => {
  new Xt.Slider(object.querySelector('.slider--listing'), {
    contain: true,
    jumpOverflow: true,
  })

  // unmount

  return () => {}
}

/* mountMedia */

const mountMedia = ({ object }) => {
  const items = object.querySelectorAll('.listing-item')

  // vars

  const mediaContainerScale = 0.015
  const mediaScale = 0.06
  const maskOpacityOn = 0.2
  const maskOpacityOff = 0.2
  const maskOpacityDone = 0.1

  // enter

  const enter = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      scale: 1 + mediaContainerScale,
      duration: 0.5,
      ease: 'quart.out',
    })
    const mediaInner = tr.querySelector('.xt-media-inner')
    gsap.to(mediaInner, {
      scale: 1 + mediaScale,
      duration: 1.5,
      ease: 'quart.out',
    })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      height: 0,
      y: media.offsetHeight,
      skewY: 0,
      opacity: maskOpacityOff,
    })
    gsap.to(mask, {
      height: '150%',
      y: 0,
      opacity: maskOpacityOn,
      duration: 0.5,
      ease: 'quart.out',
    }) // @FIX to cover height: '150%'
    gsap.to(mask, { skewY: -10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
      gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
    })
    gsap.to(mask, {
      opacity: maskOpacityDone,
      duration: 0.75,
      ease: 'quart.out',
      delay: 0.5,
    })
  }

  for (const item of items) {
    item.addEventListener('mouseenter', enter)
  }

  // leave

  const leave = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, { scale: 1, duration: 0.5, ease: 'quart.out' })
    const mediaInner = tr.querySelector('.xt-media-inner')
    gsap.to(mediaInner, { scale: 1, duration: 1.5, ease: 'quart.out' })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.to(mask, {
      height: '50%',
      y: '-100%',
      opacity: maskOpacityOff,
      duration: 0.5,
      ease: 'quart.out',
    }) // @FIX to cover height: '50%', y: '-100%'
    gsap.to(mask, { skewY: 10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
      gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
    })
  }

  for (const item of items) {
    item.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountFade */

const mountFade = ({ object }) => {
  const items = object.querySelectorAll('.listing-item')

  // vars

  const scrollY = 15
  const scrollScale = 1.04

  // fade

  ScrollTrigger.batch(items, {
    once: true,
    start: 'top bottom-=10%',
    end: 'bottom top+=10%',
    onEnter: (batch, scrollTriggers) => {
      const direction = scrollTriggers[0].direction
      const y = direction > 0 ? -scrollY : scrollY
      gsap.killTweensOf(batch)
      gsap.set(batch, { y: y, scale: scrollScale })
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'quart.out',
        stagger: 0.15,
      })
    },
  })

  // unmount

  return () => {}
}
