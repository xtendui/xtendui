import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2019-sun68',
  mount: object => {
    // vars

    const contentTimeOn = Xt.vars.timeBig
    const contentTimeOff = Xt.vars.timeBig
    const contentEaseOn = 'expo.out'
    const contentEaseOff = 'expo.inOut'

    const contentZoom = 1.1
    const contentZoomTime = Xt.vars.timeGiant * 3
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
        friction: false,
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
      // others
      for (const tr of self.targets.filter(x => !self.hasCurrent(x))) {
        const other = tr.querySelector('.slide_img_inner')
        gsap.set(other, { x: size * direction - size * ratio * direction, opacity: ratio + 0.5 })
      }
      // content
      const content = target.querySelector('.slide_img_inner')
      gsap.set(content, { x: -size * ratio * direction, opacity: 1 - ratio + 0.5 })
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragend

    const eventDragReset = e => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // content
      const content = target.querySelector('.slide_other_inner')
      gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOn, ease: contentEaseOn })
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        const content = target.querySelector('.slide_img_inner')
        if (self.initial) {
          gsap.set(content, { x: 0, opacity: 1, scale: 1 })
          gsap.to(content, { scale: contentZoom, duration: contentZoomTime, ease: contentZoomEase, repeat: -1, yoyo: true })
        } else {
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
