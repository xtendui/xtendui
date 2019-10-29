import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import { TweenMax } from 'gsap/TweenMax'

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
      TweenMax.set(target, { x: -self.detail.xPos + 'px', opacity: 1 })
      TweenMax.set(self.dragger, { x: self.detail.xPos })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        TweenMax.set(content, { x: sizeContent * ratio * direction, opacity: 1 })
      }
    }

    const eventDragReset = function() {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      TweenMax.set(target, { x: -self.detail.xPosOld + 'px' })
      TweenMax.to(target, timeMask / 1000, { x: 0, opacity: 1, ease: easeOut })
      TweenMax.set(self.dragger, { x: self.detail.xPosOld })
      TweenMax.to(self.dragger, timeMask / 1000, { x: 0, ease: easeOut })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        TweenMax.to(content, timeContent / 1000, { x: 0, opacity: 1, ease: easeOut })
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
          TweenMax.set(tr, { x: 0, opacity: 1, ease: easeOut })
          TweenMax.set(self.dragger, { x: 0, ease: easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            TweenMax.set(content, { x: 0, opacity: 1, ease: easeOut })
          }
        } else {
          // setup
          TweenMax.set(tr, { opacity: 0 })
          // mask
          TweenMax.set(tr, { x: -xMax * direction })
          TweenMax.to(tr, timeMask / 1000, { x: 0, opacity: 1, ease: easeOut })
          TweenMax.set(self.dragger, { x: xMax * direction })
          TweenMax.to(self.dragger, timeMask / 1000, { x: 0, ease: easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            TweenMax.set(content, { x: sizeContent * direction, opacity: 0 })
            TweenMax.to(content, timeContent / 1000, { x: 0, opacity: 1, ease: easeOut })
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
        TweenMax.to(tr, timeMask / 1000, { x: xMax * direction, opacity: 0, ease: easeOut })
        TweenMax.to(self.dragger, timeMask / 1000, { x: -xMax * direction, ease: easeOut })
        // content
        const contents = tr.querySelectorAll('.card-item > *')
        for (const content of contents) {
          TweenMax.to(content, timeContent / 1000, { x: -sizeContent * direction, opacity: 0, ease: easeOut })
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
