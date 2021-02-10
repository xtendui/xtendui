import { Xt } from 'xtendui'
import 'xtendui/src/core/tooltip'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--tooltip-animation-js',
  mount: ({ object }) => {
    // vars

    const targetTimeOn = 0.3
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.3
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Tooltip(object, {
      duration: 300,
    })

    // on

    const eventOn = e => {
      const tr = e.target
      gsap.set(tr, { opacity: 0 })
      gsap.set(tr, { x: -10 })
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt.tooltip', eventOn)
    }

    // off

    const eventOff = e => {
      const tr = e.target
      gsap.to(tr, {
        x: 10,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
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
