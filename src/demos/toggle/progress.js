import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/core/toggle/toggle.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--toggle-progress',
  mount: function(object) {
    // init

    let self = new Xt.Toggle(object, {
      auto: {
        time: 2000,
        pause: ':scope > button',
      },
    })

    // auto

    const eventAutoStart = function() {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { height: 0, top: '100%', ease: Xt.vars.easeLinear })
          gsap.to(filler, { duration: self.options.auto.time, height: '100%', top: 0, ease: Xt.vars.easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { width: 0, left: 0, ease: Xt.vars.easeLinear })
          gsap.to(filler, { duration: self.options.auto.time, width: '100%', left: 0, ease: Xt.vars.easeLinear })
        }
      }
    }

    const eventAutoStop = function() {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { duration: Xt.vars.timeSmall, height: 0, top: 0, ease: Xt.vars.easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { duration: Xt.vars.timeSmall, width: 0, left: '100%', ease: Xt.vars.easeLinear })
        }
      }
    }

    const eventAutoPause = function() {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { duration: Xt.vars.timeSmall, height: 0, top: '100%', ease: Xt.vars.easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { duration: Xt.vars.timeSmall, width: 0, left: 0, ease: Xt.vars.easeLinear })
        }
      }
    }

    self.object.addEventListener('start.xt.auto', eventAutoStart)
    self.object.addEventListener('stop.xt.auto', eventAutoStop)
    self.object.addEventListener('pause.xt.auto', eventAutoPause)

    // unmount

    return function unmount() {
      self.object.removeEventListener('start.xt.auto', eventAutoStart)
      self.object.removeEventListener('stop.xt.auto', eventAutoStop)
      self.object.removeEventListener('pause.xt.auto', eventAutoPause)
      self.destroy()
      self = null
    }
  },
})
