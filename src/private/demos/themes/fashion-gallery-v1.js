import { Xt } from 'xtendui'
import 'xtendui/src/core/scroll'
import 'xtendui/src/core/sticky'
import 'xtendui/src/addons/scroll-to-anchor'
import gsap from 'gsap'
import 'gsap/ScrollToPlugin'

/**
 * sticky
 */

Xt.mount.push({
  matches: '#iframe--fashion-gallery-v1 body .product-page_right', // add your own selector instead of body to contain the code
  mount: function (object) {
    // init

    let self = new Xt.Sticky(object, {
      sticky: 'absolute',
      contain: {
        top: 0,
        bottom: '.product-page_limit-bottom',
      },
    })

    // unmount

    const unmount = function () {
      self.destroy()
      self = null
    }
    return unmount
  },
})

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
      scrollElements: [document.scrollingElement, object.querySelector('.product-page_left'), object.querySelector('#overlay--product-page_images')],
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
        gsap.to(scrollingElement, { scrollTo: pos, duration: Xt.vars.timeLarge, ease: 'quart.inOut' })
      }
    }

    self.object.addEventListener('change.xt.scrolltoanchor', eventChange)

    // unmount

    const unmount = () => {
      self.object.removeEventListener('change.xt.scrolltoanchor', eventChange)
      self.destroy()
      self = null
    }
    return unmount
  },
})

/**
 *  .product-page_continue
 */

Xt.mount.push({
  matches: '#iframe--fashion-gallery-v1 body .product-page_continue', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const icon = object.querySelector(':scope > *')

    // interval

    const move = () => {
      gsap.to(icon, { y: 6, duration: Xt.vars.timeSmall, ease: 'back.out(4)' }).eventCallback('onComplete', () => {
        gsap.to(icon, { y: 0, duration: Xt.vars.timeSmall, ease: 'quart.out' }).delay(Xt.vars.timeMedium)
      })
    }

    let interval = setInterval(move, Xt.vars.timeGiant)

    // scroll

    const eventScroll = () => {
      if (document.scrollingElement.scrollTop > 0) {
        object.classList.add('scrolled')
      } else {
        object.classList.remove('scrolled')
      }
    }

    addEventListener('scroll', eventScroll)
    eventScroll()

    // unmount

    const unmount = function () {
      clearInterval(interval)
      removeEventListener('scroll', eventScroll)
    }
    return unmount
  },
})

/**
 * media mask
 */

Xt.mount.push({
  matches: '#iframe--fashion-gallery-v1 body .product-page_image', // add your own selector instead of body to contain the code
  mount: object => {
    // markup

    if (!object.querySelector('.media_mask')) {
      object.querySelector('.media-container').prepend(Xt.createElement('<span class="media_mask"></span>'))
    }

    // vars

    const maskOpacityOn = 0.2
    const maskOpacityOff = 0.2
    const maskOpacityDone = 0.1

    // enter

    const eventEnter = e => {
      const tr = e.target
      // mask
      const img = tr.querySelector('.media-container')
      const mask = tr.querySelector('.media_mask')
      gsap.set(mask, { height: 0, y: img.offsetHeight, skewY: 0, opacity: maskOpacityOff })
      gsap.to(mask, { height: '150%', y: 0, opacity: maskOpacityOn, duration: Xt.vars.timeSmall, ease: 'quart.out' }) // @FIX to cover height: '150%'
      gsap.to(mask, { skewY: -10, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' })
      })
      gsap.to(mask, { opacity: maskOpacityDone, duration: Xt.vars.timeMedium, ease: 'quart.out', delay: Xt.vars.timeSmall })
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // mask
      const mask = tr.querySelector('.media_mask')
      gsap.to(mask, { height: '50%', y: '-100%', opacity: maskOpacityOff, duration: Xt.vars.timeSmall, ease: 'quart.out' }) // @FIX to cover height: '50%', y: '-100%'
      gsap.to(mask, { skewY: 10, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' }).eventCallback('onComplete', () => {
        gsap.to(mask, { skewY: 0, duration: Xt.vars.timeSmall / 2, ease: 'quart.out' })
      })
    }

    object.addEventListener('mouseleave', eventLeave)

    // unmount

    const unmount = () => {}
    return unmount
  },
})
