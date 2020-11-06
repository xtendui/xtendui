import { Xt } from 'xtendui'
import 'xtendui/src/core/overlay'
import gsap from 'gsap'
gsap.defaults({ overwrite: 'auto' })
gsap.config({ force3D: false })

Xt.mount.push({
  matches: '.demo--overlay-animation-js',
  mount: object => {
    // vars

    const targetTimeOn = 0.5
    const targetEaseOn = 'quad.out'
    const targetTimeOff = 0.5
    const targetEaseOff = 'quad.inOut'

    // init

    let self = new Xt.Overlay(object, {
      durationOn: 500,
      durationOff: 500,
    })

    // on

    const eventOn = e => {
      const tr = e.target
      const inner = tr.querySelector('.overlay-inner')
      if (!tr.classList.contains('inverse')) {
        gsap.set(inner, { x: -15 })
      } else {
        gsap.set(inner, { x: 15 })
      }
      gsap.set(inner, { opacity: 0 })
      gsap.to(inner, { x: 0, opacity: 1, duration: targetTimeOn, ease: targetEaseOn })
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt', eventOn)
    }

    // off

    const eventOff = e => {
      const tr = e.target
      if (!tr.classList.contains('inverse')) {
        const inner = tr.querySelector('.overlay-inner')
        gsap.to(inner, { x: 15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
      } else {
        const inner = tr.querySelector('.overlay-inner')
        gsap.to(inner, { x: -15, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
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
