import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-swap-click [data-xt-tooltip]',
  mount: ({ ref }) => {
    // vars

    const tooltip = ref
    Xt.get({ name: 'xt-tooltip', el: tooltip }).then(self => {
      const element = self.elements[0]

      // swap

      const swapBack = () => {
        // swap tooltip
        self.targets[0].classList.remove('hidden')
        self.targets[1].classList.add('hidden')
      }

      const swap = () => {
        // swap
        self.targets[0].classList.add('hidden')
        self.targets[1].classList.remove('hidden')
        // open
        element.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
        element.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
      }

      // resetTooltip: fix when swapping and moving away

      const resetTooltip = () => {
        // trigger our swap
        element.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
        // trigger tooltip deactivation
        element.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      }

      element.addEventListener('mouseleave', resetTooltip)

      // click

      const click = () => {
        // swap
        element.addEventListener('offdone.xt.tooltip', swap, { once: true })
        element.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      }

      element.addEventListener('click', click)
    })
  },
})
