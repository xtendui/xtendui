import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

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

/* mountTooltips */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref.querySelector(':scope > * > .xt-list')
  const boundary = ref.querySelector(':scope > *')

  // init

  let self = new Xt.Tooltip(tooltip, {
    elements: ':scope > .xt-tooltip-item',
    targets: ':scope > .xt-tooltip-item > .xt-tooltip',
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
