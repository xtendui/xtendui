import { Xt } from 'xtendui'
import 'xtendui/src/slider'

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  // init

  /***/
  let self = new Xt.Slider(slider, {
    drag: {
      factor: 2,
      overflow: ({ overflow }) => {
        return Math.pow(overflow, 0.6)
      },
    },
  })
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
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
