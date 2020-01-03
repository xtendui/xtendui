import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo_slider-toggle-js',
  mount: function(object) {
    // init

    let self = new Xt.Slider(object, {
      instant: false,
      durationOn: Xt.vars.timeMedium,
      durationOff: Xt.vars.timeMedium,
    })

    // drag

    const eventDrag = function() {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / tr.clientWidth
      // direction
      let direction = 1
      if (self.detail.dragStart - self.detail.dragCurrent > 0) {
        direction = -1
      }
      // mask
      gsap.set(tr, { translateX: -self.detail.dragPos + 'px', opacity: 1 })
      gsap.set(self.dragger, { translateX: self.detail.dragPos })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.set(content, { translateX: 100 * ratio * direction, opacity: 1 })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = function() {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.set(tr, { translateX: -self.detail.dragPosOld + 'px' })
      gsap.to(tr, { translateX: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
      gsap.set(self.dragger, { translateX: self.detail.dragPosOld })
      gsap.to(self.dragger, { translateX: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.to(content, { translateX: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = function(e) {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        if (self.initial) {
          // mask
          gsap.killTweensOf(tr)
          gsap.set(tr, { translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { translateX: 0, ease: Xt.vars.easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.killTweensOf(content)
            gsap.set(content, { translateX: 0, opacity: 1, ease: Xt.vars.easeOut })
          }
        } else {
          // setup
          gsap.set(tr, { opacity: 0 })
          // mask
          gsap.set(tr, { translateX: -xMax * direction })
          gsap.to(tr, { translateX: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
          gsap.set(self.dragger, { translateX: xMax * direction })
          gsap.to(self.dragger, { translateX: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { translateX: 100 * direction, opacity: 0 })
            gsap.to(content, { translateX: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
          }
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = function(e) {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        // mask
        gsap.to(tr, { translateX: xMax * direction, opacity: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
        gsap.to(self.dragger, { translateX: -xMax * direction, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
        // content
        const contents = tr.querySelectorAll('.card-item > *')
        for (const content of contents) {
          gsap.to(content, { translateX: -100 * direction, opacity: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
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
