import { Xt } from 'xtendui'
import 'xtendui/src/drop'

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector('[data-node-drop]')
  const boundary = ref.querySelector('[data-node-boundary]')

  // init

  /***/
  let self = new Xt.Drop(drop, {
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
  matches: '.demo--drop-prevent-overflow',
  mount: ({ ref }) => {
    const unmountDrops = mountDrops({ ref })

    // unmount

    return () => {
      unmountDrops()
    }
  },
})
