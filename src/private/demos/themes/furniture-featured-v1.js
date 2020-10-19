import { Xt } from 'xtendui'
import 'xtendui/src/future/scroll'
import 'xtendui/src/addons/propagate-interaction'
import gsap from 'gsap'

/**
 * .btn--line
 */

Xt.mount.push({
  matches: '#iframe--furniture-featured-v1 body .btn--line', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const link = object.tagName === 'a' || object.tagName === 'button' ? object : object.closest('a, button')
    const imgScale = 0.03
    const lineOpacity = 0.4
    const lineX = 15
    const lineWidth = 15
    const lineWidthMax = 150

    // enter

    const eventEnter = () => {
      // img
      const img = link.querySelector('.media-container')
      gsap.to(img, { scale: 1 - imgScale, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      const imgInner = link.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1 + imgScale, duration: Xt.vars.timeMedium, ease: 'expo.out' })
      // text
      const text = object.querySelector('.btn--line_text')
      gsap.to(text, { x: lineX, duration: Xt.vars.timeMedium, delay: Xt.vars.timeSmall, ease: 'expo.out' })
      // line
      const line = object.querySelector('.btn--line_line')
      gsap.set(line, { width: 0, x: -lineWidthMax, opacity: lineOpacity, overwrite: true })
      gsap.to(line, { width: lineWidthMax, x: -lineWidthMax + lineWidth, opacity: 1, duration: Xt.vars.timeSmall, ease: 'expo.in' })
      gsap.to(line, { width: lineWidth + lineX, x: 0, opacity: 1, duration: Xt.vars.timeMedium, delay: Xt.vars.timeSmall, ease: 'expo.out' })
    }

    link.addEventListener('mouseenter', eventEnter)

    // enter

    const eventLeave = () => {
      // img
      const img = link.querySelector('.media-container')
      gsap.to(img, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      const imgInner = link.querySelector('.media-inner')
      gsap.to(imgInner, { scale: 1, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      // text
      const text = object.querySelector('.btn--line_text')
      gsap.to(text, { x: 0, duration: Xt.vars.timeMedium, ease: 'expo.inOut' })
      // line
      const line = object.querySelector('.btn--line_line')
      gsap.to(line, { width: lineWidth, x: 0, opacity: lineOpacity, duration: Xt.vars.timeMedium, ease: 'expo.inOut', overwrite: true })
    }

    link.addEventListener('mouseleave', eventLeave)

    // unmount

    const unmount = () => {}
    return unmount
  },
})

/**
 * featured
 */

Xt.mount.push({
  matches: '#iframe--furniture-featured-v1 body .featured_item', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const imgY = 150

    // init

    let self = new Xt.Scroll(object, {
      distance: 0,
      trigger: '50%',
      start: '50%',
      end: '100%',
    })

    // change

    const eventChange = e => {
      const tr = e.target
      // img
      const img = tr.querySelector('.featured_img_col')
      gsap.set(img, { y: imgY * (self.detail.ratio - 0.5) })
      // imgInner
      const imgInner = tr.querySelector('.featured_img_col img')
      gsap.set(imgInner, { scale: 1.1 - 0.1 * self.detail.ratio })
    }

    for (const element of self.elements) {
      element.addEventListener('change.xt', eventChange)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
