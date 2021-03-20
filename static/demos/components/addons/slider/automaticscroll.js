import { Xt } from 'xtendui'
import 'xtendui/src/core/slider'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.CCC--slider-automaticscroll',
  mount: ({ object }) => {
    const unmountSliders = mountSliders({ object })

    // unmount

    return () => {
      unmountSliders()
    }
  },
})

/* mountSliders */

const mountSliders = ({ object }) => {
  const sliders = object.querySelectorAll('.xt-slider')
  const unmounts = []

  for (const slider of sliders) {
    // vars

    const timeScaleTimeOn = 0.75
    const timeScaleEaseOn = 'quint.in'
    const timeScaleTimeOff = 0.75
    const timeScaleEaseOff = 'quint.out'

    // slider

    let self = new Xt.Slider(slider, {
      align: 'left',
      jump: false,
      drag: {
        manual: true,
        wrap: true,
      },
    })

    // on

    const eventOn = e => {
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        if (self.intial || self.wrap) {
          // reset dragging position
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { x: self.detail.dragPos })
          if (self.intial) {
            self.goToNext()
          }
        } else {
          // time depending on target and dragger width
          const slideWidth = tr.offsetWidth
          let time = (slideWidth * 15) / 1000 // constant speed
          // end dragging position
          gsap.killTweensOf(self.dragger)
          gsap
            .to(self.dragger, {
              x: self.detail.dragPos,
              duration: time,
              ease: 'linear',
            })
            .eventCallback('onComplete', () => {
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

    self.object.addEventListener('on.xt.slider', eventOn, true)

    // eventPause

    const eventPause = () => {
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 0,
          duration: timeScaleTimeOff,
          ease: timeScaleEaseOff,
        })
      }
    }

    self.object.addEventListener('mouseenter', eventPause, true)
    addEventListener('blur', eventPause)

    // eventResume

    const eventResume = () => {
      // resume tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 1,
          duration: timeScaleTimeOn,
          ease: timeScaleEaseOn,
        })
      }
    }

    self.object.addEventListener('mouseleave', eventResume, true)
    addEventListener('focus', eventResume)

    // unmount

    unmounts.push(() => {
      eventPause()
      removeEventListener('blur', eventPause)
      removeEventListener('focus', eventResume)
      self.destroy()
      self = null
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
