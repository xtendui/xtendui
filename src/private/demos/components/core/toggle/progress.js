import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'
import gsap from 'gsap'
gsap.config({ force3D: false })

Xt.mount.push({
  matches: '.demo--toggle-progress',
  mount: object => {
    // vars

    const fillerTime = 0.25
    const fillerEase = 'linear'

    // init

    let self = new Xt.Toggle(object, {
      auto: {
        time: 4000,
        pause: ':scope > button, .toggle',
      },
    })

    // start auto

    const eventAutostart = () => {
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.set(filler, { height: 0, top: '100%' })
          gsap.to(filler, { height: '100%', top: 0, duration: self.options.auto.time / 1000, ease: fillerEase })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.set(filler, { width: 0, left: 0 })
          gsap.to(filler, { width: '100%', left: 0, duration: self.options.auto.time / 1000, ease: fillerEase })
        }
      }
    }

    self.object.addEventListener('autostart.xt', eventAutostart)

    // stop auto

    const eventAutostop = () => {
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, { height: 0, top: 0, duration: fillerTime, ease: fillerEase })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, { width: 0, left: '100%', duration: fillerTime, ease: fillerEase })
        }
      }
    }

    self.object.addEventListener('autostop.xt', eventAutostop)

    // pause auto

    const eventAutopause = () => {
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, { height: 0, top: '100%', duration: fillerTime, ease: fillerEase })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.killTweensOf(filler)
          gsap.to(filler, { width: 0, left: 0, duration: fillerTime, ease: fillerEase })
        }
      }
    }

    self.object.addEventListener('autopause.xt', eventAutopause)

    // unmount

    return () => {
      self.destroy()
      self = null
    }
  },
})
