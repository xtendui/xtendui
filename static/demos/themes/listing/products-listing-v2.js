import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

Xt.mount({
  matches: '.demo--products-listing-v2',
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
  // vars

  const slider = ref.querySelector('.slider--listing')
  const dragEase = 'quart.out'
  let dragDistance
  let dragDuration

  // init

  const self = new Xt.Slider(slider, {})

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = self.initial || self.detail.instant ? 0 : Math.min(Math.log(1 + dragDistance / 125), 1.5)
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
    // dragger tween with main time and ease
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
}

/* mountMedia */

const mountMedia = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.listing-item')

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
    const mediaInner = tr.querySelector('.xt-media')
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
      /***/
      // fix to cover height: '150%'
      /***/
      height: '150%',
      y: 0,
      opacity: maskOpacityOn,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap
      .to(mask, {
        skewY: -10,
        duration: 0.5 / 2,
        ease: 'quart.out',
      })
      .eventCallback('onComplete', () => {
        gsap.to(mask, {
          skewY: 0,
          duration: 0.5 / 2,
          ease: 'quart.out',
        })
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
    gsap.to(media, {
      scale: 1,
      duration: 0.5,
      ease: 'quart.out',
    })
    const mediaInner = tr.querySelector('.xt-media')
    gsap.to(mediaInner, {
      scale: 1,
      duration: 1.5,
      ease: 'quart.out',
    })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.to(mask, {
      /***/
      // fix to cover height: '50%', y: '-100%'
      /***/
      height: '50%',
      y: '-100%',
      opacity: maskOpacityOff,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap
      .to(mask, {
        skewY: 10,
        duration: 0.5 / 2,
        ease: 'quart.out',
      })
      .eventCallback('onComplete', () => {
        gsap.to(mask, {
          skewY: 0,
          duration: 0.5 / 2,
          ease: 'quart.out',
        })
      })
  }

  for (const item of items) {
    item.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountFade */

const mountFade = ({ ref }) => {
  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // vars

  const scrollY = 15
  const scrollScale = 1.04

  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.listing-item:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  ScrollTrigger.batch(items, {
    once: true,
    start: 'top bottom-=10%',
    end: 'bottom top+=10%',
    onEnter: (batch, scrollTriggers) => {
      const direction = scrollTriggers[0].direction
      const y = direction > 0 ? -scrollY : scrollY
      gsap.killTweensOf(batch)
      gsap.set(batch, {
        y: y,
        scale: scrollScale,
      })
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(index * 0.15, 0.6)
        },
      })
    },
  })
}
