import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo_slider-toggle-js',
  mount: function(object) {
    // init

    let self = new Xt.Slider(object, {
      durationOn: Xt.vars.timeMedium,
      durationOff: Xt.vars.timeMedium,
      instant: false,
    })

    // drag

    const eventDrag = function() {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / tr.clientWidth
      // direction
      let direction = 1
      if (self.detail.xStart - self.detail.xCurrent > 0) {
        direction = -1
      }
      // mask
      gsap.set(tr, { translateX: -self.detail.xPos + 'px', opacity: 1 })
      gsap.set(self.dragger, { translateX: self.detail.xPos })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.set(content, { translateX: 100 * ratio * direction, opacity: 1 })
      }
    }

    self.dragger.addEventListener('drag.xt.slider', eventDrag)

    // dragreset

    const eventDragReset = function() {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.set(tr, { translateX: -self.detail.xPosOld + 'px' })
      gsap.to(tr, { duration: Xt.vars.timeMedium, translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
      gsap.set(self.dragger, { translateX: self.detail.xPosOld })
      gsap.to(self.dragger, { duration: Xt.vars.timeMedium, translateX: 0, ease: Xt.vars.easeOut })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.to(content, { duration: Xt.vars.timeMedium, translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
      }
    }

    self.dragger.addEventListener('dragreset.xt.slider', eventDragReset)

    // on

    const eventOn = function(e) {
      const tr = e.target
      // useCapture delegation
      if (e.detail.self.targets.includes(tr)) {
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        if (self.initial) {
          // mask
          gsap.set(tr, { translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
          gsap.set(self.dragger, { translateX: 0, ease: Xt.vars.easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
          }
        } else {
          // setup
          gsap.set(tr, { opacity: 0 })
          // mask
          gsap.set(tr, { translateX: -xMax * direction })
          gsap.to(tr, { duration: Xt.vars.timeMedium, translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
          gsap.set(self.dragger, { translateX: xMax * direction })
          gsap.to(self.dragger, { duration: Xt.vars.timeMedium, translateX: 0, ease: Xt.vars.easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { translateX: 100 * direction, opacity: 0 })
            gsap.to(content, { duration: Xt.vars.timeMedium, translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
          }
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = function(e) {
      const tr = e.target
      // useCapture delegation
      if (e.detail.self.targets.includes(tr)) {
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        // mask
        gsap.to(tr, { duration: Xt.vars.timeMedium, translateX: xMax * direction, opacity: 0, ease: Xt.vars.easeOut })
        gsap.to(self.dragger, { duration: Xt.vars.timeMedium, translateX: -xMax * direction, ease: Xt.vars.easeOut })
        // content
        const contents = tr.querySelectorAll('.card-item > *')
        for (const content of contents) {
          gsap.to(content, { duration: Xt.vars.timeMedium, translateX: -100 * direction, opacity: 0, ease: Xt.vars.easeOut })
        }
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  },
})
