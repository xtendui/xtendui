import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  // init

  /***/
  let self = new Xt.Slider(slider, {
    free: true,
    drag: {
      overflow: false,
    },
  })
  /***/

  // Wheel

  /***/
  let sticky = false

  const wheel = e => {
    if (sticky) {
      const notOverflowing = self.wheelEvent({}, e)
      if (notOverflowing) {
        e.preventDefault()
      }
    }
  }

  window.addEventListener('wheel', wheel, { passive: false })

  ScrollTrigger.create({
    trigger: slider,
    start: 'bottom bottom',
    end: 'top top',
    onToggle: self => {
      sticky = self.isActive
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
  matches: '.demo--slider-scrolltrigger-free',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
