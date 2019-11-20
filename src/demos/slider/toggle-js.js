import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/addons/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider--toggle-js',
  mount: function(object) {
    // vars

    const time = Xt.vars.timeBig
    const timeMask = Xt.vars.timeBig
    const timeContent = Xt.vars.timeBig
    const sizeContent = 100
    const easeOut = Xt.vars.easeOut

    // init

    let self = new Xt.Slider(object, {
      durationOn: time,
      durationOff: time,
      instant: false,
    })

    // drag

    const eventDrag = function() {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / target.clientWidth
      // direction
      let direction = 1
      if (self.detail.xStart - self.detail.xCurrent > 0) {
        direction = -1
      }
      // mask
      gsap.set(target, { translateX: -self.detail.xPos + 'px', opacity: 1 })
      gsap.set(self.dragger, { translateX: self.detail.xPos })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.set(content, { translateX: sizeContent * ratio * direction, opacity: 1 })
      }
    }

    const eventDragReset = function() {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.set(target, { translateX: -self.detail.xPosOld + 'px' })
      gsap.to(target, { duration: timeMask / 1000, translateX: 0, opacity: 1, ease: easeOut })
      gsap.set(self.dragger, { translateX: self.detail.xPosOld })
      gsap.to(self.dragger, { duration: timeMask / 1000, translateX: 0, ease: easeOut })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.to(content, { duration: timeContent / 1000, translateX: 0, opacity: 1, ease: easeOut })
      }
    }

    self.dragger.addEventListener('drag.xt.slider', eventDrag)
    self.dragger.addEventListener('dragreset.xt.slider', eventDragReset)

    // activation

    const eventOn = function(e) {
      const tr = e.target
      if (self.targets.includes(tr)) {
        // event bubbles
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        if (self.initial) {
          // mask
          gsap.set(tr, { translateX: 0, opacity: 1, ease: easeOut })
          gsap.set(self.dragger, { translateX: 0, ease: easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { translateX: 0, opacity: 1, ease: easeOut })
          }
        } else {
          // setup
          gsap.set(tr, { opacity: 0 })
          // mask
          gsap.set(tr, { translateX: -xMax * direction })
          gsap.to(tr, { duration: timeMask / 1000, translateX: 0, opacity: 1, ease: easeOut })
          gsap.set(self.dragger, { translateX: xMax * direction })
          gsap.to(self.dragger, { duration: timeMask / 1000, translateX: 0, ease: easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { translateX: sizeContent * direction, opacity: 0 })
            gsap.to(content, { duration: timeContent / 1000, translateX: 0, opacity: 1, ease: easeOut })
          }
        }
      }
    }

    const eventOff = function(e) {
      const tr = e.target
      if (self.targets.includes(tr)) {
        // event bubbles
        const xMax = tr.clientWidth
        // direction
        let direction = 1
        if (tr.classList.contains('inverse')) {
          direction = -1
        }
        // mask
        gsap.to(tr, { duration: timeMask / 1000, translateX: xMax * direction, opacity: 0, ease: easeOut })
        gsap.to(self.dragger, { duration: timeMask / 1000, translateX: -xMax * direction, ease: easeOut })
        // content
        const contents = tr.querySelectorAll('.card-item > *')
        for (const content of contents) {
          gsap.to(content, { duration: timeContent / 1000, translateX: -sizeContent * direction, opacity: 0, ease: easeOut })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn)
    self.object.addEventListener('off.xt', eventOff)

    // unmount

    return function unmount() {
      self.dragger.removeEventListener('drag.xt.slider', eventDrag)
      self.dragger.removeEventListener('dragreset.xt.slider', eventDragReset)
      self.object.removeEventListener('on.xt', eventOn)
      self.object.removeEventListener('off.xt', eventOff)
      self.destroy()
      self = null
    }
  },
})
