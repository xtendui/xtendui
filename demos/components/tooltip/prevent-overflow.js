import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

/* mountTooltips */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref
  const boundary = ref.querySelector('[data-node-boundary]')

  // init

  /***/
  let self = new Xt.Tooltip(tooltip, {
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
  matches: '.demo--tooltip-prevent-overflow',
  mount: ({ ref }) => {
    const unmountTooltip = mountTooltip({ ref })

    // unmount

    return () => {
      unmountTooltip()
    }
  },
})
