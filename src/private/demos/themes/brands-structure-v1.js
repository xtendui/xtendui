import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import gsap from 'gsap'

/**
 * slider
 */

Xt.mount.push({
  matches: '#iframe--brands-structure-v1 body .slider', // add your own selector instead of body to contain the code
  mount: object => {
    // vars

    const timeScaleTimeOn = Xt.vars.timeMedium
    const timeScaleEaseOn = 'quint.in'
    const timeScaleTimeOff = Xt.vars.timeBig
    const timeScaleEaseOff = 'quint.out'

    // slider

    let self = new Xt.Slider(object, {
      align: 'left',
      groupMq: false,
      autoHeight: false,
      jump: false,
      drag: {
        manual: true,
        wrap: true,
      },
    })

    // init

    const eventInit = () => {
      if (!self.wrap) {
        // reset dragging position
        gsap.set(self.dragger, { x: self.detail.dragPos })
        self.goToNext()
      }
    }

    self.object.addEventListener('init.xt', eventInit, true)

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // animate
        if (self.wrap) {
          // end dragging position instant
          gsap.set(self.dragger, { x: self.detail.dragPos })
        } else {
          // time depending on target and dragger width
          const slideWidth = tr.offsetWidth
          const draggerWidth = self.dragger.offsetWidth
          let time = slideWidth * 15 // constant speed
          if (object.classList.contains('slider--factor')) {
            time = (draggerWidth / slideWidth) * 50000 // faster or slower depending on horizontal space
          }
          // end dragging position
          gsap.to(self.dragger, { x: self.detail.dragPos, duration: time, ease: 'linear' }).eventCallback('onComplete', () => {
            // wrap before changing slide if needed, needed with drag.wrap = true
            self.eventWrap()
            requestAnimationFrame(() => {
              // go to next slide
              self.goToNext()
            })
          })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // eventPause

    const eventPause = () => {
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, { timeScale: 0, duration: timeScaleTimeOff, ease: timeScaleEaseOff })
      }
    }

    self.object.addEventListener('mouseenter', eventPause, true)
    addEventListener('blur', eventPause)

    // eventResume

    const eventResume = () => {
      // resume tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, { timeScale: 1, duration: timeScaleTimeOn, ease: timeScaleEaseOn })
      }
    }

    self.object.addEventListener('mouseleave', eventResume, true)
    addEventListener('focus', eventResume)

    // unmount

    return () => {
      removeEventListener('blur', eventPause)
      removeEventListener('focus', eventResume)
      self.destroy()
      self = null
    }
  },
})
