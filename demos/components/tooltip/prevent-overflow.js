import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-prevent-overflow',
  mount: ({ ref }) => {
    // vars

    const tooltip = ref
    const boundary = ref.querySelector('[data-node-boundary]')

    // init

    let selfDestroy = () => {}
    new Xt.Tooltip(tooltip, {
      mouseParent: true,
      position: 'bottom-end',
      popperjs: {
        strategy: 'fixed',
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              boundary: boundary,
            },
          },
        ],
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
