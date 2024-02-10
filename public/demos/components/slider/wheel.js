import { Xt } from 'xtendui'
import 'xtendui/src/slider'

Xt.mount({
  matches: '.demo--slider-wheel .xt-slider',
  mount: ({ ref }) => {
    // vars

    const slider = ref

    // init

    let selfDestroy = () => {}
    new Xt.Slider(slider, {}).then(self => {
      // Wheel

      /***/
      const wheel = e => {
        self.wheelEvent({}, e)
        e.preventDefault()
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
  },
})
