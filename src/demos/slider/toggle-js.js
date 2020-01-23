import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider-toggle-js',
  mount: object => {
    // vars

    const maskTime = Xt.vars.timeMedium
    const maskEase = Xt.vars.easePenguin
    const contentTime = Xt.vars.timeMedium
    const contentEase = Xt.vars.easePenguin

    // init

    let self = new Xt.Slider(object, {
      instant: false,
      durationOn: maskTime,
      durationOff: maskTime,
    })

    // drag

    const eventDrag = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / target.clientWidth
      // direction
      let direction = 1
      if (self.detail.dragStart - self.detail.dragCurrent > 0) {
        direction = -1
      }
      // mask
      gsap.set(target, { x: -self.detail.dragPos, opacity: 1 })
      gsap.set(self.dragger, { x: self.detail.dragPos })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.set(content, { x: 100 * ratio * direction, opacity: 1 })
      }
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = () => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // mask
      gsap.set(self.dragger, { x: self.detail.dragPosOld })
      gsap.to(self.dragger, { x: 0, duration: maskTime, ease: maskEase })
      gsap.set(target, { x: -self.detail.dragPosOld })
      gsap.to(target, { x: 0, opacity: 1, duration: maskTime, ease: maskEase })
      // content
      const contents = target.querySelectorAll('.card-item > *')
      for (const content of contents) {
        gsap.to(content, { x: 0, opacity: 1, duration: contentTime, ease: contentEase })
      }
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        const xMax = target.clientWidth
        // direction
        let direction = 1
        if (target.classList.contains('inverse')) {
          direction = -1
        }
        if (self.initial) {
          // mask
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { x: 0, ease: maskEase })
          gsap.killTweensOf(target)
          gsap.set(target, { x: 0, opacity: 1, ease: maskEase })
          // content
          const contents = target.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.killTweensOf(content)
            gsap.set(content, { x: 0, opacity: 1, ease: contentEase })
          }
        } else {
          // setup
          gsap.set(target, { opacity: 0 })
          // mask
          gsap.set(self.dragger, { x: xMax * direction })
          gsap.to(self.dragger, { x: 0, duration: maskTime, ease: maskEase })
          gsap.set(target, { x: -xMax * direction })
          gsap.to(target, { x: 0, opacity: 1, duration: maskTime, ease: maskEase })
          // content
          const contents = target.querySelectorAll('.card-item > *')
          for (const content of contents) {
            gsap.set(content, { x: 100 * direction, opacity: 0 })
            gsap.to(content, { x: 0, opacity: 1, duration: contentTime, ease: contentEase })
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
        // direction
        let direction = 1
        if (target.classList.contains('inverse')) {
          direction = -1
        }
        // mask
        gsap.to(self.dragger, { x: -xMax * direction, duration: maskTime, ease: maskEase })
        gsap.to(target, { x: xMax * direction, opacity: 0, duration: maskTime, ease: maskEase })
        // content
        const contents = target.querySelectorAll('.card-item > *')
        for (const content of contents) {
          gsap.to(content, { x: -100 * direction, opacity: 0, duration: contentTime, ease: contentEase })
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
