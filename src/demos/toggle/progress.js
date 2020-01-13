import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--toggle-progress',
  mount: object => {
    // init

    let self = new Xt.Toggle(object, {
      auto: {
        time: 2000,
        pause: ':scope > button',
      },
    })

    // start auto

    const eventAutostart = () => {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { height: 0, top: '100%', ease: Xt.vars.easeLinear })
          gsap.to(filler, { height: '100%', top: 0, duration: self.options.auto.time, ease: Xt.vars.easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { width: 0, left: 0, ease: Xt.vars.easeLinear })
          gsap.to(filler, { width: '100%', left: 0, duration: self.options.auto.time, ease: Xt.vars.easeLinear })
        }
      }
    }

    self.object.addEventListener('autostart.xt', eventAutostart)

    // stop auto

    const eventAutostop = () => {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { height: 0, top: 0, duration: Xt.vars.timeSmall, ease: Xt.vars.easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { width: 0, left: '100%', duration: Xt.vars.timeSmall, ease: Xt.vars.easeLinear })
        }
      }
    }

    self.object.addEventListener('autostop.xt', eventAutostop)

    // pause auto

    const eventAutopause = () => {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { height: 0, top: '100%', duration: Xt.vars.timeSmall, ease: Xt.vars.easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { width: 0, left: 0, duration: Xt.vars.timeSmall, ease: Xt.vars.easeLinear })
        }
      }
    }

    self.object.addEventListener('autopause.xt', eventAutopause)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
