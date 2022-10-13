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

  const normalizeDelta = e => {
    const evt = {}
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1
    return evt
  }

  /***/
  ScrollTrigger.observe({
    target: self.dragger,
    type: 'wheel',
    wheelSpeed: -3,
    onWheel: trigger => {
      const clientX = normalizeDelta(trigger.event).deltaY
      if (!deltaY || Math.abs(deltaY) > Math.abs(clientX)) {
        self.dragstart({ clientX: 0 })
        console.log('start')
      }
      deltaY = clientX
      console.log(clientX, trigger.deltaY)
      //console.log(trigger.event)
      // pc clientX è sempre 300, event.deltaY sempre 100, wheelDeltaY sempre -120, deltamode 0
      // mac clientX e event.deltaY variabile, wheelDeltaY sempre -120, deltamode 0
      self.dragmove({ clientX })
    },
    onStop: trigger => {
      const clientX = normalizeDelta(trigger.event).deltaY
      deltaY = false
      self.dragend({ clientX })
      console.log('end', clientX, trigger.deltaY)
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
