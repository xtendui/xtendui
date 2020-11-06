import { Xt } from 'xtendui'
import 'xtendui/src/core/drop'
import gsap from 'gsap'
gsap.config({ force3D: false })

Xt.mount.push({
  matches: '.demo--drop-animation-js',
  mount: object => {
    // vars

    const targetTimeOn = 0.5
    const targetEaseOn = 'quad.out'
    const targetTimeOff = 0.5
    const targetEaseOff = 'quad.inOut'

    // init

    let self = new Xt.Drop(object, {
      durationOn: 500,
      durationOff: 500,
    })

    // on

    const eventOn = e => {
      const tr = e.target
      gsap.set(tr, { opacity: 0 })
      if (!tr.classList.contains('inverse')) {
        gsap.set(tr, { x: -15 })
      } else {
        gsap.set(tr, { x: 15 })
      }
      gsap.to(tr, { x: 0, opacity: 1, duration: targetTimeOn, ease: targetEaseOn })
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt', eventOn)
    }

    // off

    const eventOff = e => {
      const tr = e.target
      if (!tr.classList.contains('inverse')) {
        gsap.to(tr, { x: 15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
      } else {
        gsap.to(tr, { x: -15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
      }
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt', eventOff)
    }

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
