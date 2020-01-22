import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider-toggle-js',
  mount: object => {
    // init

    let self = new Xt.Slider(object, {
      instant: false,
      durationOn: Xt.vars.timeMedium,
      durationOff: Xt.vars.timeMedium,
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / tr.clientWidth
      // direction
      let direction = 1
      if (self.detail.dragStart - self.detail.dragCurrent > 0) {
        direction = -1
      }
      // mask
      gsap.set(tr, { x: -self.detail.dragPos + 'px', opacity: 1 })
      gsap.set(self.dragger, { x: self.detail.dragPos })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.set(content, { x: 100 * ratio * direction, opacity: 1 })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.set(tr, { x: -self.detail.dragPosOld + 'px' })
      gsap.to(tr, { x: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
      gsap.set(self.dragger, { x: self.detail.dragPosOld })
      gsap.to(self.dragger, { x: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.to(content, { x: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
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
          gsap.set(tr, { x: 0, opacity: 1, ease: Xt.vars.easeOut })
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { x: 0, ease: Xt.vars.easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.killTweensOf(content)
            gsap.set(content, { x: 0, opacity: 1, ease: Xt.vars.easeOut })
          }
        } else {
          // setup
          gsap.set(tr, { opacity: 0 })
          // mask
          gsap.set(tr, { x: -xMax * direction })
          gsap.to(tr, { x: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
          gsap.set(self.dragger, { x: xMax * direction })
          gsap.to(self.dragger, { x: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { x: 100 * direction, opacity: 0 })
            gsap.to(content, { x: 0, opacity: 1, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
          }
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = e => {
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
        gsap.to(tr, { x: xMax * direction, opacity: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
        gsap.to(self.dragger, { x: -xMax * direction, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
        // content
        const contents = tr.querySelectorAll('.card-item > *')
        for (const content of contents) {
          gsap.to(content, { x: -100 * direction, opacity: 0, duration: Xt.vars.timeMedium, ease: Xt.vars.easeOut })
        }
      }
    }

    self.object.addEventListener('off.xt', eventOff, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
