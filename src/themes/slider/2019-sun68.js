import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2019-sun68',
  mount: object => {
    // vars

    const imgTime = 750
    const imgEase = Xt.vars.easeCheetah
    const imgZoom = 1.1
    const imgZoomTime = 6000
    const imgZoomEase = Xt.vars.easeSineInOut

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
        friction: false,
        overflow: false,
      },
    })

    // drag

    const eventDrag = e => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      const ratio = Math.abs(self.detail.dragStart - self.detail.dragCurrent) / target.clientWidth
      const imgSize = self.dragger.offsetWidth / 6
      // direction
      let direction = 1
      if (self.detail.dragStart - self.detail.dragCurrent > 0) {
        direction = -1
      }
      // others
      for (const tr of self.targets.filter(x => !self.hasCurrent(x))) {
        const img = target.querySelector('.slide_img_inner')
        gsap.set(img, { x: imgSize * direction - imgSize * ratio * direction, opacity: ratio + 0.5 })
      }
      // img
      const img = target.querySelector('.slide_img_inner')
      gsap.set(img, { x: -imgSize * ratio * direction, opacity: 1 - ratio + 0.5 })
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragend

    const eventDragReset = e => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // img
      const img = target.querySelector('.slide_img_inner')
      gsap.to(img, { x: 0, opacity: 1, duration: imgTime, ease: imgEase })
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        const img = target.querySelector('.slide_img_inner')
        if (self.initial) {
          gsap.set(img, { x: 0, opacity: 1, scale: 1 })
          gsap.to(img, { scale: imgZoom, duration: imgZoomTime, ease: imgZoomEase, repeat: -1, yoyo: true })
        } else {
          gsap.to(img, { x: 0, opacity: 1, duration: imgTime, ease: imgEase }).eventCallback('onComplete', () => {
            gsap.to(img, { scale: imgZoom, duration: imgZoomTime, ease: imgZoomEase, repeat: -1, yoyo: true })
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
        const imgSize = self.dragger.offsetWidth / 6
        // direction
        let direction = 1
        if (target.classList.contains('inverse')) {
          direction = -1
        }
        // img
        const img = target.querySelector('.slide_img_inner')
        gsap.to(img, { x: imgSize * direction, opacity: 0.5, scale: 1, duration: imgTime, ease: imgEase }).eventCallback('onComplete', () => {
          gsap.set(img, { x: 0, opacity: 1 })
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
