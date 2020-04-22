import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider-toggle-js',
  mount: object => {
    // vars

    const maskTimeOn = Xt.vars.timeSmall
    const maskTimeOff = Xt.vars.timeSmall
    const maskEaseOn = 'cheetah'
    const maskEaseOff = 'cheetah'

    const contentTimeOn = Xt.vars.timeSmall
    const contentTimeOff = Xt.vars.timeSmall
    const contentEaseOn = 'cheetah'
    const contentEaseOff = 'cheetah'

    // init

    let self = new Xt.Slider(object, {
      instant: { elements: true, elementsInner: true },
      durationOn: Xt.vars.timeSmall,
      durationOff: Xt.vars.timeSmall,
    })

    // drag

    const eventDrag = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / target.clientWidth
      // mask
      gsap.set(target, { x: -self.detail.dragPos, opacity: 1 })
      gsap.set(self.dragger, { x: self.detail.dragPos })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.set(content, { x: -100 * ratio * self.direction, opacity: 1 })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.set(self.dragger, { x: self.detail.dragPosOld })
      gsap.to(self.dragger, { x: 0, duration: maskTimeOn, ease: maskEaseOn })
      gsap.set(target, { x: -self.detail.dragPosOld })
      gsap.to(target, { x: 0, opacity: 1, duration: maskTimeOn, ease: maskEaseOn })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOn, ease: contentEaseOn })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        const xMax = target.clientWidth
        if (self.initial) {
          // mask
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { x: 0, ease: maskEaseOn })
          gsap.killTweensOf(target)
          gsap.set(target, { x: 0, opacity: 1, ease: maskEaseOn })
          // content
          const contents = target.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.killTweensOf(content)
            gsap.set(content, { x: 0, opacity: 1, ease: contentEaseOn })
          }
        } else {
          // setup
          gsap.set(target, { opacity: 0 })
          // mask
          gsap.set(self.dragger, { x: xMax * self.direction })
          gsap.to(self.dragger, { x: 0, duration: maskTimeOn, ease: maskEaseOn })
          gsap.set(target, { x: -xMax * self.direction })
          gsap.to(target, { x: 0, opacity: 1, duration: maskTimeOn, ease: maskEaseOn })
          // content
          const contents = target.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { x: 100 * self.direction, opacity: 0 })
            gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOn, ease: contentEaseOn })
          }
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        const xMax = target.clientWidth
        // mask
        gsap.to(self.dragger, { x: -xMax * self.direction, duration: maskTimeOff, ease: maskEaseOff })
        gsap.to(target, { x: xMax * self.direction, opacity: 0, duration: maskTimeOff, ease: maskEaseOff })
        // content
        const contents = target.querySelectorAll('.card-item > *')
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
