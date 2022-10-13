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
  /***/
  let deltaY = false
  /***/

  // init

  /***/
  let self = new Xt.Slider(slider, {
    free: true,
  })
  /***/

  // ScrollTrigger

  /***/
  ScrollTrigger.observe({
    target: self.dragger,
    type: 'wheel',
    wheelSpeed: -3,
    onWheel: trigger => {
      const clientX = trigger.deltaY
      if (!deltaY || Math.abs(deltaY) > Math.abs(clientX)) {
        self.dragstart({ clientX: 0 })
      }
      deltaY = clientX
      self.dragmove({ clientX })
    },
    onStop: trigger => {
      const clientX = trigger.deltaY
      deltaY = false
      self.dragend({ clientX })
    },
    onStopDelay: 0,
    debounce: false,
    preventDefault: true,
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
