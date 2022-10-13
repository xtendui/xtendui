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
  let self = new Xt.Slider(slider, {})
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
        console.log('start')
      }
      deltaY = clientX
      // clientX è sempre 300, event.deltaY sempre 100, wheelDeltaY sempre -120, deltamode 0
      console.log(clientX, trigger.velocityY, trigger.event)
      self.dragmove({ clientX })
    },
    onStop: trigger => {
      const clientX = trigger.deltaY
      deltaY = false
      self.dragend({ clientX })
      console.log('end', clientX)
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
  matches: '.demo--slider-scrolltrigger',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
