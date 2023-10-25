import { Xt } from 'xtendui'
import 'xtendui/src/slider'

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  // init

  /***/
  let self = new Xt.Slider(slider, {})
  /***/

  // Wheel

  /***/
  const wheel = e => {
    self.wheelEvent({}, e)
    e.preventDefault()
  }

  self.dragger.addEventListener('wheel', wheel, { passive: false })
  /***/

  // unmount

  return () => {
    self.dragger.removeEventListener('wheel', wheel)
    self.destroy()
    self = null
  }
}

/* mount */

Xt.mount({
  matches: '.demo--slider-wheel',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
