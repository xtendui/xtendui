import { Xt } from 'xtendui'
import 'xtendui/src/slider'

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  // init

  let selfDestroy
  new Xt.Slider(slider, {
    free: true,
    drag: {
      overflow: false,
    },
  }).then(self => {
    // Wheel

    /***/
    const wheel = e => {
      const notOverflowing = self.wheelEvent({}, e)
      if (notOverflowing) {
        e.preventDefault()
      }
    }

    self.dragger.addEventListener('wheel', wheel, { passive: false })
    /***/

    // destroy

    selfDestroy = () => {
      self.dragger.removeEventListener('wheel', wheel)
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
  matches: '.demo--slider-wheel-free',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
