import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--slider--2019-sun68',
  mount: object => {
    // vars

    const contentTimeOn = Xt.vars.timeLarge
    const contentTimeOff = Xt.vars.timeLarge
    const contentEaseOn = 'expo.out'
    const contentEaseOff = 'expo.out'

    const contentZoom = 1.1
    const contentZoomTime = Xt.vars.timeBig * 3
    const contentZoomEase = 'sine.inOut'

    // slider

    let self = new Xt.Slider(object, {
      auto: {
        time: 6000,
      },
      align: 'left',
      autoHeight: false,
      groupMq: false,
      drag: {
        wrap: true,
        overflow: false,
      },
    })

    // drag

    const eventDrag = e => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / target.clientWidth
      const size = self.dragger.offsetWidth / 6
      // direction
      let direction = 1
      if (self.detail.dragStart - self.detail.dragCurrent > 0) {
        direction = -1
      }
      // content others
      for (const tr of self.targets.filter(x => !self.hasCurrent(x))) {
        const other = tr.querySelector('.slide_img_inner')
        gsap.set(other, { x: -size * ratio * direction + size * direction, opacity: ratio + 0.5 })
      }
      // content
      const content = target.querySelector('.slide_img_inner')
      gsap.set(content, { x: -size * ratio * direction, opacity: 1 - ratio + 0.5 })
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = e => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // content others
      for (const tr of self.targets.filter(x => !self.hasCurrent(x))) {
        const other = tr.querySelector('.slide_img_inner')
        gsap.to(other, { x: 0, opacity: 0.5, duration: contentTimeOn, ease: contentEaseOn })
      }
      // content
      const content = target.querySelector('.slide_img_inner')
      gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOn, ease: contentEaseOn })
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        if (self.initial) {
          // content
          const content = target.querySelector('.slide_img_inner')
          gsap.set(content, { x: 0, opacity: 1, scale: 1 })
          gsap.to(content, { scale: contentZoom, duration: contentZoomTime, ease: contentZoomEase, repeat: -1, yoyo: true })
        } else {
          // content
          const content = target.querySelector('.slide_img_inner')
          gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOn, ease: contentEaseOn }).eventCallback('onComplete', () => {
            gsap.to(content, { scale: contentZoom, duration: contentZoomTime, ease: contentZoomEase, repeat: -1, yoyo: true })
          })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // off

    const eventOff = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        const size = self.dragger.offsetWidth / 6
        // direction
        let direction = 1
        if (target.classList.contains('inverse')) {
          direction = -1
        }
        // content
        const content = target.querySelector('.slide_img_inner')
        gsap.to(content, { x: size * direction, opacity: 0.5, scale: 1, duration: contentTimeOff, ease: contentEaseOff }).eventCallback('onComplete', () => {
          gsap.set(content, { x: 0, opacity: 1 })
        })
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
