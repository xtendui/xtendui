import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/stickyflow'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

Xt.mount({
  matches: '.demo--products-gallery-v1',
  mount: ({ ref }) => {
    const unmountScrollto = mountScrollto()
    const unmountImages = mountImages({ ref })
    const unmountArrow = mountArrow({ ref })

    // unmount

    return () => {
      unmountScrollto()
      unmountImages()
      unmountArrow()
    }
  },
})

/* mountScrollto */

const mountScrollto = () => {
  // init

  let self = new Xt.Scrollto(document.documentElement, {
    scrollers: '.xt-overlay:not(.xt-overlay-disabled), .product-gallery',
    duration: ({ self }) => {
      const overlay = self.target.closest('.xt-overlay')
      if (self.initial || self.hashchange || (overlay && !overlay.classList.contains('in'))) return 0
      const distance = Math.abs(self.scroller.scrollTop - self.position)
      return Math.max(Math.min(distance / 250, 1), 0.25)
    },
  })

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('scrollto.xt.scrollto', scrollto)

  // unmount

  return () => {
    self.object.removeEventListener('scrollto.xt.scrollto', scrollto)
    self.destroy()
    self = null
  }
}

/* mountImages */

const mountImages = ({ ref }) => {
  // vars

  const container = ref
  const images = ref.querySelectorAll('.product-image')

  // overlay

  new Xt.Overlay(container, {
    elements: '.product-image .xt-media-container',
    targets: '#overlay--product-images',
  })

  // vars

  const mediaContainerScale = -0.015
  const mediaScale = 0.06
  const titleY = -10
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
    gsap.set(mask, {
      height: 0,
      y: media.offsetHeight,
      skewY: 0,
      opacity: maskOpacityOff,
    })
    gsap.to(mask, {
      height: '150%', // fix to cover height: '150%'
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
    // item
    const item = tr.querySelector('.xt-card-item')
    if (item) {
      gsap.to(item, {
        y: titleY,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  for (const image of images) {
    image.addEventListener('mouseenter', enter)
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
      height: '50%', // fix to cover height: '50%', y: '-100%'
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
    // item
    const item = tr.querySelector('.xt-card-item')
    if (item) {
      gsap.to(item, {
        y: 0,
        duration: 0.5,
        ease: 'expo.out',
      })
    }
  }

  for (const image of images) {
    image.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountArrow */

const mountArrow = ({ ref }) => {
  // vars

  const arrow = ref.querySelector('.product-arrow')
  const icon = arrow.querySelector(':scope > *')
  const posY = 15

  // interval

  const move = () => {
    gsap
      .to(icon, {
        y: 6,
        duration: 0.5,
        ease: 'back.out(4)',
      })
      .eventCallback('onComplete', () => {
        gsap
          .to(icon, {
            y: 0,
            duration: 0.5,
            ease: 'quart.out',
          })
          .delay(0.25)
      })
  }

  let interval = setInterval(move, 2000)

  // scroll

  const scroll = () => {
    if (document.scrollingElement.scrollTop > 0) {
      if (!arrow.classList.contains('deactivated')) {
        gsap.killTweensOf(arrow)
        arrow.classList.add('deactivated')
        gsap
          .to(arrow, {
            y: posY,
            opacity: 0,
            duration: 0.25,
            ease: 'quart.inOut',
          })
          .eventCallback('onComplete', () => {
            arrow.classList.add('hidden')
          })
      }
    } else {
      if (arrow.classList.contains('deactivated')) {
        arrow.classList.remove('deactivated')
        arrow.classList.remove('hidden')
        gsap.killTweensOf(arrow)
        gsap.to(arrow, {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: 'quart.inOut',
        })
      }
    }
  }

  addEventListener('scroll', scroll)
  scroll()

  // unmount

  return () => {
    clearInterval(interval)
    removeEventListener('scroll', scroll)
  }
}
