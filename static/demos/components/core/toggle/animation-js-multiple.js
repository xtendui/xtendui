import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--toggle-animation-js',
  mount: ({ object }) => {
    // vars

    const targetTimeOn = 0.7
    const targetEaseOn = 'quint.out'
    const targetTimeOff = 0.7
    const targetEaseOff = 'quint.out'

    // init

    let self = new Xt.Toggle(object, {
      duration: 700,
    })

    // on

    const eventOn = e => {
      const tr = e.target
      gsap.set(tr, {
        x: -self.direction * 15,
        opacity: 0,
      })
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }

    for (const target of self.targets) {
      target.addEventListener('on.xt.toggle', eventOn)
    }

    // off

    const eventOff = e => {
      const tr = e.target
      gsap.to(tr, {
        x: self.direction * 15,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }

    for (const target of self.targets) {
      target.addEventListener('off.xt.toggle', eventOff)
    }

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
