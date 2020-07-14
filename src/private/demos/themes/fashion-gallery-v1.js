import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/scroll/scroll.js'
import 'xtend-library/src/extensions/sticky/sticky.js'
import 'xtend-library/src/addons/animation/scroll-to-anchor.js'
import gsap from 'gsap'
import 'gsap/ScrollToPlugin.js'

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
  mount: (object) => {
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
      console.log(self.scrollElementCurrent, component)
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
  mount: (object) => {
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
