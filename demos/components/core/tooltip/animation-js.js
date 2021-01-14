import { Xt } from 'xtendui'
import 'xtendui/src/core/tooltip'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--tooltip-animation-js',
  mount: object => {
    // vars

    const targetTimeOn = 0.2
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.2
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Tooltip(object, {
      duration: 200,
    })

    // on

    const eventOn = e => {
      const tr = e.target
      gsap.set(tr, { opacity: 0 })
      gsap.set(tr, { y: 5 })
      gsap.to(tr, { y: 0, opacity: 1, duration: targetTimeOn, ease: targetEaseOn })
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt.tooltip', eventOn)
    }

    // off

    const eventOff = e => {
      const tr = e.target
      gsap.to(tr, { y: 5, opacity: 0, duration: targetTimeOff, ease: targetEaseOff })
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt.tooltip', eventOff)
    }

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
