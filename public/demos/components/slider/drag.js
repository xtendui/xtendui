import { Xt } from 'xtendui'
import 'xtendui/src/slider'

Xt.mount({
  matches: '.demo--slider-drag',
  mount: ({ ref }) => {
    // vars

    const slider = ref.querySelector('.xt-slider')

    // init

    let selfDestroy = () => {}
    new Xt.Slider(slider, {
      drag: {
        factor: 2,
        overflow: false,
      },
    }).then(self => {
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
