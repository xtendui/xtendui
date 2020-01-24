import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'

Xt.mount.push({
  matches: '.demo--2020-brands',
  mount: object => {
    // slider

    let self = new Xt.Slider(object, {
      auto: {
        time: 25000, // same as css
        timeInitial: 0,
      },
      align: 'left',
      groupMq: false,
      autoHeight: false,
      drag: {
        wrap: true,
      },
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  },
})
