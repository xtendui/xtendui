import { Xt } from 'xtendui'
import 'xtendui/src/future/scroll'
import 'xtendui/src/addons/sticky-flow'
import 'xtendui/src/addons/scroll-to-anchor'
import gsap from 'gsap'
gsap.config({ force3D: false })
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

/**
 * scroll-to-anchor
 */

Xt.mount.push({
  matches: '#iframe--fashion-gallery-v1 body #gatsby_body-inner', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    object = document.documentElement

    // init

    let self = new Xt.ScrollToAnchor(object, {
      scrollElements: [document.scrollingElement, object.querySelector('.product-gallery'), object.querySelector('#overlay-product-images')],
    })

    // change

    const eventChange = () => {
      // val
      const scrollingElement = self.scrollElementCurrent
      let pos = self.position - self.scrollSpace - self.scrollDistance
      const min = 0
      const max = scrollingElement.scrollHeight - scrollingElement.offsetHeight
      pos = pos < min ? min : pos
      pos = pos > max ? max : pos
      // scroll
      const component = self.scrollElementCurrent.closest('.overlay')
      if (component) {
        // if component on activation
        gsap.set(scrollingElement, { scrollTo: pos })
      } else {
        gsap.to(scrollingElement, { scrollTo: pos, duration: 1, ease: 'quart.inOut' })
      }
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    return () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
      self.destroy()
      self = null
    }
  },
})

/**
 * product image scale and mask
 */

Xt.mount.push({
  matches: '#iframe--fashion-gallery-v1 body .product-image', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const imgContainerScale = 0.004
    const imgScale = 0.06
    const titleY = -10
    const maskOpacityOn = 0.2
    const maskOpacityOff = 0.2
    const maskOpacityDone = 0.1

    // enter

    const eventEnter = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1 + imgContainerScale, duration: 0.5, ease: 'quart.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: 1.5, ease: 'quart.out' })
      // mask
      const mask = tr.querySelector('.media-mask')
      gsap.set(mask, { height: 0, y: img.offsetHeight, skewY: 0, opacity: maskOpacityOff })
      gsap.to(mask, { height: '150%', y: 0, opacity: maskOpacityOn, duration: 0.5, ease: 'quart.out' }) // @FIX to cover height: '150%'
      gsap.to(mask, { skewY: -10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
      })
      gsap.to(mask, { opacity: maskOpacityDone, duration: 0.75, ease: 'quart.out', delay: 0.5 })
      // item
      const item = tr.querySelector('.card-item')
      if (item) {
        gsap.to(item, { y: titleY, duration: 0.5, ease: 'expo.out' })
      }
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1, duration: 0.5, ease: 'quart.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: 1.5, ease: 'quart.out' })
      // mask
      const mask = tr.querySelector('.media-mask')
      gsap.to(mask, { height: '50%', y: '-100%', opacity: maskOpacityOff, duration: 0.5, ease: 'quart.out' }) // @FIX to cover height: '50%', y: '-100%'
      gsap.to(mask, { skewY: 10, duration: 0.5 / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: 0.5 / 2, ease: 'quart.out' })
      })
      // item
      const item = tr.querySelector('.card-item')
      if (item) {
        gsap.to(item, { y: 0, duration: 0.5, ease: 'expo.out' })
      }
    }

    object.addEventListener('mouseleave', eventLeave)
  },
})

/**
 *  .product-continue
 */

Xt.mount.push({
  matches: '#iframe--fashion-gallery-v1 body .product-continue', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const icon = object.querySelector(':scope > *')
    const posY = 15

    // interval

    const move = () => {
      gsap.to(icon, { y: 6, duration: 0.5, ease: 'back.out(4)' }).eventCallback('onComplete', () => {
        gsap.to(icon, { y: 0, duration: 0.5, ease: 'quart.out' }).delay(0.25)
      })
    }

    let interval = setInterval(move, 2000)

    // scroll

    const eventScroll = () => {
      if (document.scrollingElement.scrollTop > 0) {
        if (!object.classList.contains('deactivated')) {
          gsap.killTweensOf(object)
          object.classList.add('deactivated')
          gsap.to(object, { y: posY, opacity: 0, duration: 0.25, ease: 'quart.inOut' }).eventCallback('onComplete', () => {
            object.classList.add('hidden')
          })
        }
      } else {
        if (object.classList.contains('deactivated')) {
          object.classList.remove('deactivated')
          object.classList.remove('hidden')
          gsap.killTweensOf(object)
          gsap.to(object, { y: 0, opacity: 1, duration: 0.25, ease: 'quart.inOut' })
        }
      }
    }

    addEventListener('scroll', eventScroll)
    eventScroll()

    // unmount

    return function () {
      clearInterval(interval)
      removeEventListener('scroll', eventScroll)
    }
  },
})
