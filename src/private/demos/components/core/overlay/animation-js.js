import { Xt } from 'xtend-library'
import 'xtend-library/src/vars'
import 'xtend-library/src/core/overlay'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--overlay-animation-js',
  mount: object => {
    // vars

    const targetTimeOn = Xt.vars.timeSmall
    const targetEaseOn = 'quad.out'
    const targetTimeOff = Xt.vars.timeSmall
    const targetEaseOff = 'quad.inOut'

    // init

    let self = new Xt.Overlay(object, {
      durationOn: Xt.vars.timeSmall,
      durationOff: Xt.vars.timeSmall,
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
      const backdrop = tr.querySelector('.backdrop')
      gsap.set(backdrop, { opacity: 0 })
      gsap.to(backdrop, { opacity: 1, duration: targetTimeOn, ease: targetEaseOn })
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
      const backdrop = tr.querySelector('.backdrop')
      gsap.to(backdrop, { opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt', eventOff)
    }

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
