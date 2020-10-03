import { Xt } from 'xtend-library'
import gsap from 'gsap'

/**
 * listing-page
 */

Xt.mount.push({
  matches: '#iframe--furniture-listing-v1 body .listing-page_item', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const imgScale = 0.04

    // enter

    const eventEnter = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1 - imgScale, duration: Xt.vars.timeSmall, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeSmall, ease: 'expo.out' })
    }

    object.addEventListener('mouseenter', eventEnter)

    // leave

    const eventLeave = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.media-container')
      gsap.to(img, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      const imgInner = tr.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.out' })
    }

    object.addEventListener('mouseleave', eventLeave)

    // unmount

    const unmount = () => {}
    return unmount
  },
})

/**
 * scroll
 */

Xt.mount.push({
  matches: '#iframe--furniture-listing-v1 body #gatsby_body-inner', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    object = document.documentElement

    // init

    let self = new Xt.Scroll(object, {
      // the same css and js
      elements: '.scroll-item, .listing-page_item',
      delayOn: current => {
        return Math.min((current + 1) * 75, 300)
      },
      delayOff: (current, total) => {
        return Math.min((total - (current + 1)) * 75, 300)
      },
      distance: 100,
    })

    // unmount

    const unmount = function () {
      self.destroy()
      self = null
    }
    return unmount
  },
})
