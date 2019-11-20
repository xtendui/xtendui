import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import gsap from 'gsap'

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
        gsap.set(target, { opacity: 0 })
        if (!target.classList.contains('inverse')) {
          gsap.set(target, { translateX: -size })
        } else {
          gsap.set(target, { translateX: size })
        }
        gsap.to(target, { duration: time / 1000, translateX: 0, opacity: 1, ease: easeIn })
      }
    }

    const eventOff = function(e) {
      const target = this
      // @FIX on.xt and off.xt event bubbles
      if (target === e.target) {
        if (!target.classList.contains('inverse')) {
          gsap.to(target, { duration: time / 1000, translateX: size, opacity: 0, ease: easeOut })
        } else {
          gsap.to(target, { duration: time / 1000, translateX: -size, opacity: 0, ease: easeOut })
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
