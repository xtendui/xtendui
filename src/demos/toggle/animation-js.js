import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--toggle-js',
  mount: object => {
    // vars

    const targetTimeOn = Xt.vars.timeLarge
    const targetTimeOff = Xt.vars.timeLarge
    const targetEaseOn = 'cheetah'
    const targetEaseOff = 'cheetah'

    // init

    let self = new Xt.Toggle(object, {
      durationOn: Xt.vars.timeLarge,
      durationOff: Xt.vars.timeLarge,
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
      gsap.to(target, { x: 0, opacity: 1, duration: targetTimeOn, ease: targetEaseOn })
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt', eventOn)
    }

    // off

    const eventOff = e => {
      const target = e.target
      if (!target.classList.contains('inverse')) {
        gsap.to(target, { x: 15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
      } else {
        gsap.to(target, { x: -15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
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
