import { Xt } from 'xtendui'
import 'xtendui/src/drop'

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

/* mountDrops */

const mountDrops = ({ ref }) => {
  // vars

  const drop = ref.querySelector(':scope > * > .xt-list')
  const boundary = ref.querySelector(':scope > *')

  // init

  let self = new Xt.Drop(drop, {
    elements: ':scope > .xt-drop-item',
    targets: ':scope > .xt-drop-item > .xt-drop',
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

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
