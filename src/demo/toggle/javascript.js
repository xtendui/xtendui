import { TweenMax, Ease } from 'gsap/TweenMax'
import BezierEasing from 'bezier-easing'
import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'

/**
 * #demo--toggle-js-0
 */

Xt.mount.push({
  matches: '#demo--toggle-js-0',
  mount: function (object) {
    // vars

    const time = 0.6
    const delay = 0
    const size = 15
    const easeIn = new Ease(BezierEasing(0.14, 0.63, 0, 1))
    const easeOut = new Ease(BezierEasing(0.14, 0.63, 0, 1))

    // init

    let self = new Xt.Toggle(object, {
      durationOn: time * 1000,
      durationOff: time * 1000,
      delayOn: delay * 1000,
      delayOff: delay * 1000
    })

    // activation

    const eventOn = function () {
      const target = this
      // setup
      TweenMax.set(target, { opacity: 0 })
      if (!target.classList.contains('inverse')) {
        TweenMax.set(target, { x: -size })
      } else {
        TweenMax.set(target, { x: size })
      }
      // animation
      TweenMax.to(target, time, { x: 0, opacity: 1, ease: easeIn })
    }

    const eventOff = function () {
      const target = this
      // animation
      if (!target.classList.contains('inverse')) {
        TweenMax.to(target, time, { x: size, opacity: 0, ease: easeOut })
      } else {
        TweenMax.to(target, time, { x: -size, opacity: 0, ease: easeOut })
      }
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt', eventOn)
      tr.addEventListener('off.xt', eventOff)
    }

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})

/**
 * #demo--toggle-js-0
 */

Xt.mount.push({
  matches: '#demo--toggle-js-1',
  mount: function (object) {
    // vars

    const time = 0.6
    const delay = 0
    const size = 15
    const easeIn = new Ease(BezierEasing(0.14, 0.63, 0, 1))
    const easeOut = new Ease(BezierEasing(0.14, 0.63, 0, 1))

    // init

    let self = new Xt.Toggle(object, {
      on: 'mouseenter',
      off: 'mouseleave',
      durationOn: time * 1000,
      durationOff: time * 1000,
      delayOn: delay * 1000,
      delayOff: delay * 1000
    })

    // activation

    const eventOn = function () {
      const target = this
      // setup
      TweenMax.set(target, { opacity: 0 })
      if (!target.classList.contains('inverse')) {
        TweenMax.set(target, { x: -size })
      } else {
        TweenMax.set(target, { x: size })
      }
      // animation
      TweenMax.to(target, time, { x: 0, opacity: 1, ease: easeIn })
    }

    const eventOff = function () {
      const target = this
      // animation
      if (!target.classList.contains('inverse')) {
        TweenMax.to(target, time, { x: size, opacity: 0, ease: easeOut })
      } else {
        TweenMax.to(target, time, { x: -size, opacity: 0, ease: easeOut })
      }
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt', eventOn)
      tr.addEventListener('off.xt', eventOff)
    }

    // unmount

    return function unmount () {
      for (const tr of self.targets) {
        tr.removeEventListener('on.xt', eventOn)
        tr.removeEventListener('off.xt', eventOff)
      }
      self.destroy()
      self = null
    }
  }
})
