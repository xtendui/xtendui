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
  })
  /***/

  // ScrollTrigger

  /***/
  let deltaY = false

  ScrollTrigger.observe({
    target: self.dragger,
    type: 'wheel',
    wheelSpeed: -2,
    onWheel: trigger => {
      if (!deltaY || Math.abs(deltaY) > Math.abs(trigger.deltaY)) {
        self.dragstart({ clientX: trigger.deltaY })
      }
      deltaY = trigger.deltaY
      self.dragmove({ clientX: trigger.deltaY })
    },
    onStop: trigger => {
      deltaY = false
      self.dragend({ clientX: trigger.deltaY })
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
