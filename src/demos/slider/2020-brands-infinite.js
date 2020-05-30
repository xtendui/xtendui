import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--2020-brands-infinite--factor',
  mount: object => {
    // slider

    let self = new Xt.Slider(object, {
      auto: {
        initial: true,
      },
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
        self.options.auto.time = time
        self.options.drag.duration = time
        // animate
        if (self.continue) {
          gsap.set(self.dragger, { x: self.detail.dragPosCurrent, overwrite: true })
        } else {
          gsap.to(self.dragger, { x: self.detail.dragPosCurrent, duration: time, ease: 'linear', overwrite: true })
        }
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // autoPause

    const eventPause = e => {
      // pause auto
      self.object.dispatchEvent(new CustomEvent('autostop.trigger.xt'))
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        tween.pause()
      }
    }

    self.object.addEventListener('mouseenter', eventPause, true)

    // autoResume

    const autoResume = e => {
      // pause auto
      self.object.dispatchEvent(new CustomEvent('autostart.trigger.xt'))
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        tween.play()
      }
    }

    self.object.addEventListener('mouseleave', autoResume, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
