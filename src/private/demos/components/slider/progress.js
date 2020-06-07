import { Xt } from '/src/xt.js'
import '/src/vars.js'
import '/src/extensions/slider/slider.js'
import '/src/addons/animation/mouse-follow.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider-progress',
  mount: object => {
    // vars

    const spinnerTime = Xt.vars.timeTiny
    const spinnerEase = 'linear'
    const fillerTime = Xt.vars.timeTiny
    const fillerEase = 'linear'

    // init

    let self = new Xt.Slider(object, {
      auto: {
        time: 4000,
      },
    })

    // start auto

    const eventAutostart = () => {
      // slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      const timeline = gsap.timeline({ overwrite: false })
      timeline.to(spinner, { strokeDashoffset: 628, duration: spinnerTime, ease: spinnerEase, autoRound: false })
      timeline.to(spinner, { strokeDashoffset: 0, duration: self.options.auto.time - spinnerTime, ease: spinnerEase, autoRound: false })
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { height: 0, top: '100%' })
          gsap.to(filler, { height: '100%', top: 0, duration: self.options.auto.time, ease: fillerEase })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { width: 0, left: 0 })
          gsap.to(filler, { width: '100%', left: 0, duration: self.options.auto.time, ease: fillerEase })
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
          gsap.to(filler, { height: 0, top: 0, duration: fillerTime, ease: fillerEase })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { width: 0, left: '100%', duration: fillerTime, ease: fillerEase })
        }
      }
    }

    self.object.addEventListener('autostop.xt', eventAutostop)

    // pause auto

    const eventAutopause = () => {
      // slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      gsap.to(spinner, { strokeDashoffset: 628, duration: spinnerTime, ease: spinnerEase, autoRound: false })
      // elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { height: 0, top: '100%', duration: fillerTime, ease: fillerEase })
        }
      }
      // targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.to(filler, { width: 0, left: 0, duration: fillerTime, ease: fillerEase })
        }
      }
    }

    self.object.addEventListener('autopause.xt', eventAutopause)

    // mousefollow

    const mouseFollowObject = document.querySelector('.loader-mouse')
    const mouseFollowContainer = object
    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: () => {
        return !mouseFollow.object.classList.contains('loader-disable') || mouseFollow.object.classList.contains('loader-js')
      },
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
      mouseFollow.destroy()
      mouseFollow = null
    }
    return unmount
  },
})
