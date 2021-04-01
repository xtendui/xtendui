import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--products-listing-v1',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })
    const unmountMedia = mountMedia({ ref })
    const unmountFade = mountFade({ ref })

    // unmount

    return () => {
      unmountSlider()
      unmountMedia()
      unmountFade()
    }
  },
})

/* mountSlider */

const mountSlider = ({ ref }) => {
  new Xt.Slider(ref.querySelector('.slider--listing'), {
    contain: true,
  })

  // unmount

  return () => {}
}

/* mountMedia */

const mountMedia = ({ ref }) => {
  const items = ref.querySelectorAll('.listing-item')

  // vars

  const mediaScale = 0.04
  const mediaOpacityIn = 0.75
  const mediaOpacityOut = 1
  const contentY = -10

  // enter

  const enter = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      opacity: mediaOpacityIn,
      scale: 1 - mediaScale,
      duration: 0.5,
      ease: 'expo.out',
    })
    const mediaInner = tr.querySelector('.xt-media-inner')
    gsap.to(mediaInner, {
      scale: 1 + mediaScale,
      duration: 0.5,
      ease: 'expo.out',
    })
    // content
    const content = tr.querySelector('.listing-item-content')
    if (content) {
      gsap.to(content, { y: contentY, duration: 0.5, ease: 'expo.out' })
    }
  }

  for (const item of items) {
    item.addEventListener('mouseenter', enter)
  }

  // leave

  const leave = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      opacity: mediaOpacityOut,
      scale: 1,
      duration: 0.75,
      ease: 'expo.out',
    })
    const mediaInner = tr.querySelector('.xt-media-inner')
    gsap.to(mediaInner, { scale: 1, duration: 0.75, ease: 'expo.out' })
    // content
    const content = tr.querySelector('.listing-item-content')
    if (content) {
      gsap.to(content, { y: 0, duration: 0.5, ease: 'expo.out' })
    }
  }

  for (const item of items) {
    item.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountFade */

const mountFade = ({ ref }) => {
  const items = ref.querySelectorAll('.listing-item')

  // vars

  const scrollY = 30

  // fade

  ScrollTrigger.batch(items, {
    once: true,
    start: 'top bottom-=10%',
    end: 'bottom top+=10%',
    onEnter: (batch, scrollTriggers) => {
      const direction = scrollTriggers[0].direction
      const y = direction > 0 ? -scrollY : scrollY
      gsap.killTweensOf(batch)
      gsap.set(batch, { y: y })
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'quart.out',
        stagger: 0.15,
      })
    },
  })

  // unmount

  return () => {}
}
