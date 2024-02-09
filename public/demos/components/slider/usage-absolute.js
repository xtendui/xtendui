import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--slider-usage-absolute',
  mount: ({ ref }) => {
    // vars

    const slider = ref.querySelector('.xt-slider')

    // slider

    let selfDestroy = () => {}
    new Xt.Slider(slider, {
      mode: 'absolute',
    }).then(self => {
      // dragposition (set internal position to resume animation mid dragging)

      const dragposition = () => {
        // position animation to keep updated with animation
        gsap.set(self.drag, {
          _position: self.drag._final,
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
