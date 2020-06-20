import { Xt } from 'xtend-library/src/xt.js'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/addons/slider/navigation-sides.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '#iframe--2019-sun68-hero .slider',
  mount: object => {
    // vars

    const contentTimeOn = Xt.vars.timeLarge
    const contentEaseOn = 'expo.out'
    const contentTimeOff = Xt.vars.timeLarge
    const contentEaseOff = 'expo.out'

    const contentZoom = 0.2
    const contentZoomTime = Xt.vars.timeBig * 4
    const contentZoomEase = 'sine.inOut'

    // slider

    let self = new Xt.Slider(object, {
      auto: {
        time: 4000,
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
      const size = self.dragger.offsetWidth / 6
      // content others
      for (const other of self.targets.filter(x => !self.hasCurrent(x))) {
        const contentOther = other.querySelector('.slide_asset .media-container')
        gsap.set(contentOther, { x: size * self.detail.dragRatio * self.direction - size * self.direction, opacity: self.detail.dragRatio + 0.5 })
      }
      // content
      const content = target.querySelector('.slide_asset .media-container')
      gsap.set(content, { x: size * self.detail.dragRatio * self.direction, opacity: self.detail.dragRatioInverse + 0.5 })
    }

    self.dragger.addEventListener('drag.xt', eventDrag)

    // dragreset

    const eventDragReset = e => {
      const target = self.targets.filter(x => self.hasCurrent(x))[0]
      // content others
      for (const other of self.targets.filter(x => !self.hasCurrent(x))) {
        const contentOther = other.querySelector('.slide_asset .media-container')
        gsap.to(contentOther, { x: 0, opacity: 0.5, duration: contentTimeOff, ease: contentEaseOff })
      }
      // content
      const content = target.querySelector('.slide_asset .media-container')
      gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOff, ease: contentEaseOff })
    }

    self.dragger.addEventListener('dragreset.xt', eventDragReset)

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        if (self.initial) {
          // content
          const content = target.querySelector('.slide_asset .media-container')
          gsap.set(content, { x: 0, opacity: 1, scale: 1 })
          gsap.to(content, { scale: 1 + contentZoom, duration: contentZoomTime, ease: contentZoomEase, repeat: -1, yoyo: true })
        } else {
          // content
          const content = target.querySelector('.slide_asset .media-container')
          gsap.to(content, { x: 0, opacity: 1, duration: contentTimeOn, ease: contentEaseOn }).eventCallback('onComplete', () => {
            gsap.to(content, { scale: 1 + contentZoom, duration: contentZoomTime, ease: contentZoomEase, repeat: -1, yoyo: true })
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
        const size = self.detail.draggerWidth / 6
        // content
        const content = target.querySelector('.slide_asset .media-container')
        gsap
          .to(content, { x: size * self.direction, opacity: 0.5, scale: 1, duration: contentTimeOff, ease: contentEaseOff })
          .eventCallback('onComplete', () => {
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
