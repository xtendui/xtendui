import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--toggle-js',
  mount: object => {
    // vars

    const targetTimeIn = Xt.vars.timeBig
    const targetTimeOut = Xt.vars.timeBig
    const targetEaseIn = Xt.vars.easeIn
    const targetEaseOut = Xt.vars.easeOut

    // init

    let self = new Xt.Toggle(object, {
      durationOn: Xt.vars.timeBig,
      durationOff: Xt.vars.timeBig,
    })

    // on

    const eventOn = e => {
      const target = e.target
      gsap.set(target, { opacity: 0 })
      if (!target.classList.contains('inverse')) {
        gsap.set(target, { x: -15 })
      } else {
        gsap.set(target, { x: 15 })
      }
      gsap.to(target, { x: 0, opacity: 1, duration: targetTimeIn, ease: targetEaseIn })
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt', eventOn)
    }

    // off

    const eventOff = e => {
      const target = e.target
      if (!target.classList.contains('inverse')) {
        gsap.to(target, { x: 15, opacity: 0, duration: targetTimeOut, ease: targetEaseOut })
      } else {
        gsap.to(target, { x: -15, opacity: 0, duration: targetTimeOut, ease: targetEaseOut })
      }
    }

    for (const tr of self.targets) {
      tr.addEventListener('off.xt', eventOff)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
