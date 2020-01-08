import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--toggle-js',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
    })

    // on

    const eventOn = function(e) {
      const target = this
      gsap.set(target, { opacity: 0 })
      if (!target.classList.contains('inverse')) {
        gsap.set(target, { translateX: -15 })
      } else {
        gsap.set(target, { translateX: 15 })
      }
      gsap.to(target, { translateX: 0, opacity: 1, duration: Xt.vars.timeBig, ease: Xt.vars.easeIn })
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt', eventOn)
    }

    // off

    const eventOff = function(e) {
      const target = this
      if (!target.classList.contains('inverse')) {
        gsap.to(target, { translateX: 15, opacity: 0, duration: Xt.vars.timeBig, ease: Xt.vars.easeOut })
      } else {
        gsap.to(target, { translateX: -15, opacity: 0, duration: Xt.vars.timeBig, ease: Xt.vars.easeOut })
      }
    }

    for (const tr of self.targets) {
      tr.addEventListener('off.xt', eventOff)
    }

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})
