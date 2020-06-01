import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-brands-infinite--factor',
  mount: object => {
    // vars

    const timeScaleTimeOn = Xt.vars.timeMedium
    const timeScaleEaseOn = 'quint.in'
    const timeScaleTimeOff = Xt.vars.timeMedium
    const timeScaleEaseOff = 'quint.out'

    // slider

    let self = new Xt.Slider(object, {
      align: 'left',
      groupMq: false,
      autoHeight: false,
      drag: {
        manual: true,
        wrap: true,
      },
    })

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        // time depending on target and dragger width
        const slideWidth = target.offsetWidth
        const draggerWidth = self.dragger.offsetWidth
        let time = slideWidth * 25 // constant speed
        if (object.classList.contains('demo--2020-brands-infinite--factor')) {
          time = (draggerWidth / slideWidth) * 10000 // faster the less horizontal space
        }
        // animate
        if (self.wrap) {
          console.log('set')
          gsap.set(self.dragger, { x: self.detail.dragPosCurrent })
        } else {
          console.log('to')
          gsap.to(self.dragger, { x: self.detail.dragPosCurrent, duration: time, ease: 'linear' }).eventCallback('onComplete', () => {
            console.log('next')
            self.eventWrap()
            requestAnimationFrame(() => {
              self.goToNext()
            })
          })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // eventPause

    const eventPause = e => {
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, { timeScale: 0, duration: timeScaleTimeOff, ease: timeScaleEaseOff })
        // or instant: tween.pause()
      }
    }

    self.object.addEventListener('mouseenter', eventPause, true)
    addEventListener('blur', eventPause)

    // eventResume

    const eventResume = e => {
      // resume tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, { timeScale: 1, duration: timeScaleTimeOn, ease: timeScaleEaseOn })
        // or instant: tween.play()
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
