import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

/**
 * slider
 */

Xt.mount.push({
  matches: '#iframe--brands-featured-v1 body .slider', // add your own selector instead of body to contain the code
  mount: (object) => {
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

    // on

    const eventOn = (e) => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // time depending on target and dragger width
        const slideWidth = tr.offsetWidth
        const draggerWidth = self.dragger.offsetWidth
        let time = slideWidth * 15 // constant speed
        if (object.classList.contains('slider--factor')) {
          time = (draggerWidth / slideWidth) * 50000 // faster or slower depending on horizontal space
        }
        // animate
        if (self.initial) {
          // reset dragging position
          gsap.set(self.dragger, { x: 0 })
        }
        if (self.wrap) {
          // end dragging position instant
          gsap.set(self.dragger, { x: self.detail.dragPos })
        } else {
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

    const unmount = () => {
      removeEventListener('blur', eventPause)
      removeEventListener('focus', eventResume)
      self.destroy()
      self = null
    }
    return unmount
  },
})
