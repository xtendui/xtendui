import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'

Xt.mount.push({
  matches: '.demo--2020-brands-slider',
  mount: object => {
    // slider

    let self = new Xt.Slider(object, {
      auto: {
        timeInitial: 0,
      },
      align: 'left',
      groupMq: false,
      autoHeight: false,
      drag: {
        wrap: true,
      },
    })

    // on

    const eventOn = e => {
      const target = e.target
      // useCapture delegation
      if (self.targets.includes(target)) {
        // set auto time
        const slideWidth = target.offsetWidth
        const draggerWidth = self.dragger.offsetWidth
        let time = slideWidth * 25
        if (object.classList.contains('demo--2020-brands-slider--factor')) {
          time = (draggerWidth / slideWidth) * 100000 // faster the less horizontal space
        }
        self.options.auto.time = time
        self.object.querySelector('.slides-inner').style.transitionDuration = time + 'ms'
      }
    }

    self.object.addEventListener('on.xt', eventOn, true)

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
