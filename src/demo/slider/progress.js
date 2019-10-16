import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extension/slider/slider.js'
import 'xtend-library/src/extension/animation/MouseFollow.js'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'

Xt.mount.push({
  matches: '.demo--slider--progress',
  mount: function (object) {
    // vars

    const timeHide = Xt.vars.timeSmall
    const easeLinear = Xt.vars.easeLinear

    // init

    let self = new Xt.Slider(object, {
      auto: {
        time: 4000,
        pause: '[data-xt-pag]'
      }
    })

    // auto

    const eventAutoStart = function () {
      // on slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      const timeline = new TimelineMax()
      timeline.to(spinner, timeHide / 1000, { strokeDashoffset: 628, ease: easeLinear, autoRound: false })
      timeline.to(spinner, (self.options.auto.time / 1000) - (timeHide / 1000), {
        strokeDashoffset: 0,
        ease: easeLinear,
        autoRound: false
      })
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.set(filler, { height: 0, top: '100%' })
          TweenMax.to(filler, self.options.auto.time / 1000, { height: '100%', top: 0, ease: easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.set(filler, { width: 0, left: 0 })
          TweenMax.to(filler, self.options.auto.time / 1000, { width: '100%', left: 0, ease: easeLinear })
        }
      }
    }

    const eventAutoStop = function () {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { height: 0, top: 0, ease: easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { width: 0, left: '100%', ease: easeLinear })
        }
      }
    }

    const eventAutoPause = function () {
      // on slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      TweenMax.to(spinner, timeHide / 1000, { strokeDashoffset: 628, ease: easeLinear, autoRound: false })
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { height: 0, top: '100%', ease: easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { width: 0, left: 0, ease: easeLinear })
        }
      }
    }

    self.object.addEventListener('start.xt.auto', eventAutoStart)
    self.object.addEventListener('stop.xt.auto', eventAutoStop)
    self.object.addEventListener('pause.xt.auto', eventAutoPause)

    // MouseFollow

    const mouseFollowObject = document.querySelector('.loader--mouse')
    const mouseFollowContainer = object

    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function () {
        return !this.object.classList.contains('loader--disable') || this.object.classList.contains('loader--js')
      }
    })

    // unmount

    return function unmount () {
      self.object.removeEventListener('start.xt.auto', eventAutoStart)
      self.object.removeEventListener('stop.xt.auto', eventAutoStop)
      self.object.removeEventListener('pause.xt.auto', eventAutoPause)
      self.destroy()
      self = null
      mouseFollow.destroy()
      mouseFollow = null
    }
  }
})
