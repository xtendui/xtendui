import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/stickyflow'
import 'xtendui/src/scrolltoanchor'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

Xt.mount.push({
  matches: '.demo--products-gallery-v1',
  mount: ({ object }) => {
    const unmountScrolltoanchor = mountScrolltoanchor()
    const unmountImages = mountImages({ object })
    const unmountArrow = mountArrow({ object })

    // unmount

    return () => {
      unmountScrolltoanchor()
      unmountImages()
      unmountArrow()
    }
  },
})

/* mountScrolltoanchor */

const mountScrolltoanchor = () => {
  // init

  let self = new Xt.Scrolltoanchor(document.documentElement, {
    scrollElements: '.xt-overlay, .product-gallery',
  })

  // change

  const change = () => {
    // scroll
    const overlay = self.target.closest('.xt-overlay')
    const duration = overlay && !overlay.classList.contains('active') ? 0 : 1
    gsap.killTweensOf(self.scrollElement)
    gsap.to(self.scrollElement, {
      scrollTo: self.position,
      duration: duration,
      ease: 'quart.inOut',
    })
  }

  self.object.addEventListener('change.xt.scrolltoanchor', change)

  // unmount

  return () => {
    self.object.removeEventListener('change.xt.scrolltoanchor', change)
    self.destroy()
    self = null
  }
}

/* mountImages */

const mountImages = ({ object }) => {
  const images = object.querySelectorAll('.product-image')

  // overlay

  new Xt.Overlay(object, {
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
    const mediaInner = tr.querySelector('.xt-media-inner')
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
      height: '150%', // @FIX to cover height: '150%'
      y: 0,
      opacity: maskOpacityOn,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap.to(mask, { skewY: -10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
      gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
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
      gsap.to(item, { y: titleY, duration: 0.5, ease: 'expo.out' })
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
    gsap.to(media, { scale: 1, duration: 0.5, ease: 'quart.out' })
    const mediaInner = tr.querySelector('.xt-media-inner')
    gsap.to(mediaInner, { scale: 1, duration: 1.5, ease: 'quart.out' })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.to(mask, {
      height: '50%', // @FIX to cover height: '50%', y: '-100%'
      y: '-100%',
      opacity: maskOpacityOff,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap.to(mask, { skewY: 10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
      gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
    })
    // item
    const item = tr.querySelector('.xt-card-item')
    if (item) {
      gsap.to(item, { y: 0, duration: 0.5, ease: 'expo.out' })
    }
  }

  for (const image of images) {
    image.addEventListener('mouseleave', leave)
  }
}

/* mountArrow */

const mountArrow = ({ object }) => {
  const arrow = object.querySelector('.product-arrow')

  // vars

  const icon = arrow.querySelector(':scope > *')
  const posY = 15

  // interval

  const move = () => {
    gsap.to(icon, { y: 6, duration: 0.5, ease: 'back.out(4)' }).eventCallback('onComplete', () => {
      gsap.to(icon, { y: 0, duration: 0.5, ease: 'quart.out' }).delay(0.25)
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
