import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import { TweenMax } from 'gsap/TweenMax'

/**
 * .demo--toggle-js
 */

Xt.mount.push({
  matches: '.demo--toggle-js',
  mount: function(object) {
    // vars

    const time = Xt.vars.timeBig
    const delay = 0
    const size = 15
    const easeIn = Xt.vars.easeIn
    const easeOut = Xt.vars.easeOut

    // init

    let self = new Xt.Toggle(object, {
      durationOn: time,
      durationOff: time,
      delayOn: delay,
      delayOff: delay,
    })

    // activation

    const eventOn = function(e) {
      const target = this
      // @FIX on.xt and off.xt event bubbles
      if (target === e.target) {
        TweenMax.set(target, { opacity: 0 })
        if (!target.classList.contains('inverse')) {
          TweenMax.set(target, { x: -size })
        } else {
          TweenMax.set(target, { x: size })
        }
        TweenMax.to(target, time / 1000, { x: 0, opacity: 1, ease: easeIn })
      }
    }

    const eventOff = function(e) {
      const target = this
      // @FIX on.xt and off.xt event bubbles
      if (target === e.target) {
        if (!target.classList.contains('inverse')) {
          TweenMax.to(target, time / 1000, { x: size, opacity: 0, ease: easeOut })
        } else {
          TweenMax.to(target, time / 1000, { x: -size, opacity: 0, ease: easeOut })
        }
      }
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt', eventOn)
      tr.addEventListener('off.xt', eventOff)
    }

    // unmount

    return function unmount() {
      self.destroy()
      self = null
    }
  },
})
