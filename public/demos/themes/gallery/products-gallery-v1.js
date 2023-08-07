import { Xt } from 'xtendui'
import 'xtendui/src/form'
import 'xtendui/src/toggle'
import 'xtendui/src/overlay'
import 'xtendui/src/stickyflow'
import 'xtendui/src/scrollto'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

/* mountVariants */

const mountVariants = ({ ref }) => {
  // vars

  const form = ref.querySelector('form')
  const gallery = ref.querySelector('.product-gallery')

  // init

  /***/
  let self = new Xt.Toggle(form, {
    min: 1,
    elements: '[data-node-variants-element]',
    targets: '[data-node-variants-target]',
    on: 'change',
    off: false,
    duration: 500,
    a11y: {
      keyboard: false,
    },
  })
  /***/

  // on

  const ondone = () => {
    // scrollto
    if (!self.initial) {
      // reset scroll
      form.dispatchEvent(new CustomEvent('scrollto.trigger.xt.scrollto'))
      gallery.scrollTo(0, 0)
    }
    // initial mobile dots activation
    gallery.dispatchEvent(new CustomEvent('scroll'))
  }

  for (const element of self.elements) {
    element.addEventListener('ondone.xt.toggle', ondone)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountScrollto */

const mountScrollto = () => {
  // init

  /***/
  let self = new Xt.Scrollto(document.documentElement, {
    scrollers: '.xt-overlay:not([data-xt-overlay-disabled]), .product-gallery',
    space: ({ self }) => {
      return self.scroller.classList.contains(...['xt-overlay', 'product-gallery']) ? 0 : window.innerHeight / 6
    },
  })
  /***/

  // scrollto

  const scrollto = () => {
    // scroll
    gsap.killTweensOf(self.scroller)
    gsap.to(self.scroller, {
      scrollTo: self.position,
      duration: self.duration,
      ease: 'quint.out',
    })
  }

  self.container.addEventListener('scrollto.xt.scrollto', scrollto)

  // fix stop scroll animation on user interaction

  const stopScrolling = () => {
    gsap.killTweensOf(self.scroller)
  }

  addEventListener('touchstart', stopScrolling)
  addEventListener('wheel', stopScrolling)

  // unmount

  return () => {
    removeEventListener('touchstart', stopScrolling)
    removeEventListener('wheel', stopScrolling)
    self.container.removeEventListener('scrollto.xt.scrollto', scrollto)
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

  /***/
  new Xt.Overlay(container, {
    targets: '#overlay--product-images',
    duration: 500,
  })
  /***/

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

/* mount */

Xt.mount({
  matches: '.demo--products-gallery-v1',
  mount: ({ ref }) => {
    const unmountVariants = mountVariants({ ref })
    const unmountScrollto = mountScrollto({ ref })
    const unmountImages = mountImages({ ref })

    // unmount

    return () => {
      unmountVariants()
      unmountScrollto()
      unmountImages()
    }
  },
})
