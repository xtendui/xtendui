import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'

Xt.mount.push({
  matches: '.demo--slider--2020-brands',
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
      const tr = e.target
      // useCapture delegation
      if (self.targets.includes(tr)) {
        // set auto time
        const draggerWidth = self.dragger.offsetWidth
        const slideWidth = tr.offsetWidth
        let time
        if (object.classList.contains('demo--slider--2020-brands--constant')) {
          time = (slideWidth / draggerWidth) * 50000
        } else {
          time = (draggerWidth / slideWidth) * 100000
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
