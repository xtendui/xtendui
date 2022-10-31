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

  // Scroll

  /***/
  ScrollTrigger.create({
    trigger: slider,
    start: 'bottom bottom',
    end: 'top top',
    pin: true,
    pinSpacing: true,
    onUpdate: selfScrolltrigger => {
      const first = self._groups[self.drag._wrapFirst].target
      const last = self._groups[self.drag._wrapLast].target
      const min = Xt.dataStorage.get(first, `${self.ns}GroupLeft`)
      const max = Xt.dataStorage.get(last, `${self.ns}GroupLeft`)
      const maxCheck = max
      //console.log(min, max)
      /*
      self.dragstart({ clientX: deltaY })
      self.dragmove({ clientX }, { keepActivated: true, setup: false })
      self.dragend({ clientX })
      deltaY = clientX
      */
      const clientX = max * selfScrolltrigger.progress
      //console.log(selfScrolltrigger.progress)
      //self.wheelEvent({}, { deltaY: clientX })
      // val
      self.drag.final = clientX
      // set direction
      self.direction = Math.sign(self.drag._initial - self.drag.final)
      self._inverse = self.direction < 0
      // ratio
      self.drag.ratio = Math.abs(self.drag.final - self.drag._initial) / Math.abs(maxCheck - min)
      self.drag.ratioInverse = 1 - self.drag.ratio
      // dispatch event
      self.drag.instant = true
      self.drag.dragging = true
      self.dragger.dispatchEvent(new CustomEvent(`dragposition.xt.slider`))
      self._logicDragposition()
      self.dragger.dispatchEvent(new CustomEvent(`drag.xt.slider`))
      // ??? non funzia
      self.dragend({ clientX })
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
  matches: '.demo--slider-scrolltrigger',
  mount: ({ ref }) => {
    const unmountSlider = mountSlider({ ref })

    // unmount

    return () => {
      unmountSlider()
    }
  },
})
