import { TweenMax } from 'gsap/TweenMax'
import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle/toggle.js'

/**
 * .demo--toggle--progress
 */

Xt.mount.push({
  matches: '.demo--toggle--progress',
  fnc: function mount (object) {
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

    // auto start

    self.object.addEventListener('start.xt.auto', function (e) {
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
    })

    // auto stop

    self.object.addEventListener('stop.xt.auto', function (e) {
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
    })

    // auto pause

    self.object.addEventListener('pause.xt.auto', function (e) {
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
    })

    // unmount

    return function unmount () {
      self.destroy()
      self = null
    }
  }
})
