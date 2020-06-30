import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/variables.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider-toggle-js',
  mount: object => {
    // vars

    const maskTimeOn = Xt.vars.timeLarge
    const maskEaseOn = 'quart.inOut'
    const maskTimeOff = Xt.vars.timeLarge
    const maskEaseOff = 'quart.inOut'

    const contentTimeOn = Xt.vars.timeLarge
    const contentEaseOn = 'quart.inOut'
    const contentTimeOff = Xt.vars.timeLarge
    const contentEaseOff = 'quart.inOut'

    // init

    let self = new Xt.Slider(object, {
      instant: {
        elements: true,
        elementsInner: true,
      },
      durationOn: Xt.vars.timeLarge,
      durationOff: Xt.vars.timeLarge,
    })

    // drag

    const eventDrag = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.set(tr, { x: -self.detail.dragPos, opacity: 1 })
      gsap.set(self.dragger, { x: self.detail.dragPos })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.set(content, { x: -100 * self.detail.dragRatio * self.direction, opacity: 1 })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const tr = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.to(self.dragger, { x: 0, duration: maskTimeOff, ease: maskEaseOff })
      gsap.to(tr, { x: 0, opacity: 1, duration: maskTimeOff, ease: maskEaseOff })
      // content
      const contents = tr.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOff, ease: contentEaseOff })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        const xMax = tr.clientWidth
        if (self.initial) {
          // mask
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { x: 0 })
          gsap.killTweensOf(tr)
          gsap.set(tr, { x: 0, opacity: 1 })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.killTweensOf(content)
            gsap.set(content, { x: 0, opacity: 1 })
          }
        } else {
          if (!self.detail.dragging) {
            // setup
            gsap.set(tr, { opacity: 0 })
            // mask
            gsap.set(self.dragger, { x: xMax * self.direction })
            gsap.set(tr, { x: -xMax * self.direction })
          }
          gsap.to(self.dragger, { x: 0, duration: maskTimeOn, ease: maskEaseOn })
          gsap.to(tr, { x: 0, opacity: 1, duration: maskTimeOn, ease: maskEaseOn })
          // content
          const contents = tr.querySelectorAll('.card-item > *')
          for (const content of contents) {
            if (!self.detail.dragging) {
              gsap.set(content, { x: 100 * self.direction, opacity: 0 })
            }
            gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOn, ease: contentEaseOn })
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
        // mask
        gsap.to(self.dragger, { x: -xMax * self.direction, duration: maskTimeOff, ease: maskEaseOff })
        gsap.to(tr, { x: xMax * self.direction, opacity: 0, duration: maskTimeOff, ease: maskEaseOff })
        // content
        const contents = tr.querySelectorAll('.card-item > *')
        for (const content of contents) {
          gsap.to(content, { x: -100 * self.direction, opacity: 0, duration: contentTimeOff, ease: contentEaseOff })
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
