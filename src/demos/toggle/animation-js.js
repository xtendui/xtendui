import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo_toggle-js',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
    })

    // activation

    const eventOn = function(e) {
      const target = this
      // @FIX on.xt and off.xt event bubbles
      if (target === e.target) {
        gsap.set(target, { opacity: 0 })
        if (!target.classList.contains('inverse')) {
          gsap.set(target, { translateX: -15 })
        } else {
          gsap.set(target, { translateX: 15 })
        }
        gsap.to(target, { duration: Xt.vars.timeBig, translateX: 0, opacity: 1, ease: Xt.vars.easeIn })
      }
    }

    const eventOff = function(e) {
      const target = this
      // @FIX on.xt and off.xt event bubbles
      if (target === e.target) {
        if (!target.classList.contains('inverse')) {
          gsap.to(target, { duration: Xt.vars.timeBig, translateX: 15, opacity: 0, ease: Xt.vars.easeOut })
        } else {
          gsap.to(target, { duration: Xt.vars.timeBig, translateX: -15, opacity: 0, ease: Xt.vars.easeOut })
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
