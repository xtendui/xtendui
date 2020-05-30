import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-brands-infinite--factor',
  mount: object => {
    // slider

    let self = new Xt.Slider(object, {
      align: 'left',
      groupMq: false,
      autoHeight: false,
      drag: {
        manualPosition: true,
        wrap: true,
      },
    })

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        // set auto time depending on content
        const slideWidth = target.offsetWidth
        const draggerWidth = self.dragger.offsetWidth
        let time = slideWidth * 25 // constant speed
        if (object.classList.contains('demo--2020-brands-infinite--factor')) {
          time = (draggerWidth / slideWidth) * 10000 // faster the less horizontal space
        }
        // animate
        console.log(self.currentIndex, self.continue, time)
        if (self.continue) {
          gsap.set(self.dragger, { x: self.detail.dragPosCurrent })
        } else {
          gsap.to(self.dragger, { x: self.detail.dragPosCurrent, duration: time, ease: 'linear' }).eventCallback('onComplete', () => {
            self.goToNext()
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
        tween.pause()
      }
    }

    self.object.addEventListener('mouseenter', eventPause, true)

    // eventResume

    const eventResume = e => {
      // resume tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        tween.play()
      }
    }

    self.object.addEventListener('mouseleave', eventResume, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
