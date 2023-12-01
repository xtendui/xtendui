import { Xt } from 'xtendui'
import 'xtendui/src/slider'

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  // init

  let selfDestroy = () => {}
  new Xt.Slider(slider, {
    drag: {
      factor: 2,
      overflow: false,
    },
  }).then(self => {
    // destroy

    selfDestroy = () => {
      self.destroy()
      self = null
    }
  })

  // unmount

  return () => {
    selfDestroy()
  }
}

/* mount */

Xt.mount({
  matches: '.demo--slider-drag',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
