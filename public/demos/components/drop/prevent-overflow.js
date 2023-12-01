import { Xt } from 'xtendui'
import 'xtendui/src/drop'

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector('[data-node-drop]')
  const boundary = ref.querySelector('[data-node-boundary]')

  // init

  let selfDestroy = () => {}
  new Xt.Drop(drop, {
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
}

/* mount */

Xt.mount({
  matches: '.demo--drop-prevent-overflow',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})
