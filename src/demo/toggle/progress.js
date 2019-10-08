import { TweenMax, Power0 } from 'gsap/TweenMax'
import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'

/**
 * .demo--toggle--progress
 */

Xt.mount.push({
  matches: '.demo--toggle--progress',
  mount: function (object) {
    // vars

    const timeHide = 300
    const easeLinear = Power0.easeNone

    // init

    let self = new Xt.Toggle(object, {
      auto: {
        time: 2000,
        pause: ':scope > button'
      }
    })

    // auto

    const eventAutoStart = function () {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.set(filler, { height: 0, top: '100%', ease: easeLinear })
          TweenMax.to(filler, self.options.auto.time / 1000, { height: '100%', top: 0, ease: easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.set(filler, { width: 0, left: 0, ease: easeLinear })
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

    // unmount

    return function unmount () {
      self.object.removeEventListener('start.xt.auto', eventAutoStart)
      self.object.removeEventListener('stop.xt.auto', eventAutoStop)
      self.object.removeEventListener('pause.xt.auto', eventAutoPause)
      self.destroy()
      self = null
    }
  }
})
