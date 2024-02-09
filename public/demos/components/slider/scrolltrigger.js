import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

Xt.mount({
  matches: '.demo--slider-scrolltrigger',
  mount: ({ ref }) => {
    // vars

    const slider = ref.querySelector('.xt-slider')

    // init

    let selfDestroy = () => {}
    new Xt.Slider(slider, {
      free: true,
      drag: {
        overflow: false,
      },
    }).then(self => {
      // Scroll

      /***/
      const scrollTrigger = ScrollTrigger.create({
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
          self.drag._final = clientX
          // set direction
          self.direction = Math.sign(self.drag._initial - self.drag._final)
          self._inverse = self.direction < 0
          // ratio
          self.drag._ratio = Math.abs(self.drag._final - self.drag._initial) / Math.abs(maxCheck - min)
          self.drag._ratioInverse = 1 - self.drag._ratio
          // dispatch event
          self.drag._instant = true
          self.drag._dragging = true
          self.dragger.dispatchEvent(new CustomEvent(`dragposition.xt.slider`))
          self._logicDragposition()
          self.dragger.dispatchEvent(new CustomEvent(`drag.xt.slider`))
          // ??? non funzia
          self.dragend({ clientX })
        },
      })
      /***/

      // destroy

      selfDestroy = () => {
        scrollTrigger.kill()
        self.destroy()
        self = null
      }
    })

    // unmount

    return () => {
      selfDestroy()
    }
  },
})
