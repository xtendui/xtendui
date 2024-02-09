import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-dragposition-js',
  mount: ({ ref }) => {
    // vars

    const slider = ref.querySelector('.xt-slider')
    let dragDuration
    const dragEase = 'quart.out'

    // init

    let selfDestroy = () => {}
    new Xt.Slider(slider, {
      duration: () => dragDuration * 1000,
      dragposition: true,
    }).then(self => {
      // dragposition (set internal position to resume animation mid dragging)

      const dragposition = () => {
        // duration depending on instant and dragger size
        dragDuration = self.drag._instant ? 0 : Math.max(0.5, Math.min(1, Math.log(self.drag.size / 400)))
        // position animation to keep updated with animation
        gsap.killTweensOf(self.drag)
        gsap.to(self.drag, {
          _position: self.drag._final,
          duration: dragDuration,
          ease: dragEase,
        })
        // dragger animation
        gsap.killTweensOf(self.dragger)
        gsap.to(self.dragger, {
          x: self.drag._final,
          duration: self.drag._dragging ? 0.5 : dragDuration,
          ease: dragEase,
        })
      }

      self.dragger.addEventListener('dragposition.xt.slider', dragposition)

      // destroy

      selfDestroy = () => {
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
