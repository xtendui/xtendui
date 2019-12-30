import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/core/animation/mouse-follow.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo_slider-progress',
  mount: function(object) {
    // init

    let self = new Xt.Slider(object, {
      auto: {
        time: 4000,
        pause: '[data-xt-pag]',
      },
    })

    // start auto

    const eventAutoStart = function() {
      // on slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      const timeline = gsap.timeline({ overwrite: false })
      timeline.to(spinner, { duration: Xt.vars.timeSmall, strokeDashoffset: 628, ease: Xt.vars.easeLinear, autoRound: false })
      timeline.to(spinner, {
        duration: self.options.auto.time - Xt.vars.timeSmall,
        strokeDashoffset: 0,
        ease: Xt.vars.easeLinear,
        autoRound: false,
      })
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { height: 0, top: '100%' })
          gsap.to(filler, { duration: self.options.auto.time, height: '100%', top: 0, ease: Xt.vars.easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          gsap.set(filler, { width: 0, left: 0 })
          gsap.to(filler, { duration: self.options.auto.time, width: '100%', left: 0, ease: Xt.vars.easeLinear })
        }
      }
    }

    self.object.addEventListener('start.xt.auto', eventAutoStart)

    // stop auto

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

    self.object.addEventListener('stop.xt.auto', eventAutoStop)

    // pause auto

    const eventAutoPause = function() {
      // on slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      gsap.to(spinner, { duration: Xt.vars.timeSmall, strokeDashoffset: 628, ease: Xt.vars.easeLinear, autoRound: false })
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

    self.object.addEventListener('pause.xt.auto', eventAutoPause)

    // mousefollow

    const mouseFollowObject = document.querySelector('.loader-mouse')
    const mouseFollowContainer = object
    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function() {
        return !this.object.classList.contains('loader-disable') || this.object.classList.contains('loader-js')
      },
    })

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
      mouseFollow.destroy()
      mouseFollow = null
    }
    return unmount
  },
})
