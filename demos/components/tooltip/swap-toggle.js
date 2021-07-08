import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

Xt.mount({
  matches: '.demo--tooltip-swap-toggle',
  mount: ({ ref }) => {
    const unmountButtonsSwap = mountButtonsSwap({ ref })

    // unmount

    return () => {
      unmountButtonsSwap()
    }
  },
})

/* mountButtonsSwap */

const mountButtonsSwap = ({ ref }) => {
  // vars

  const buttonsSwap = ref.querySelectorAll(':scope > .xt-button')

  for (const buttonSwap of buttonsSwap) {
    // vars

    let self = Xt.get('xt-tooltip', buttonSwap)
    const tooltip = buttonSwap.parentNode.querySelector('.xt-tooltip')

    // swap

    const swapBack = () => {
      // swap tooltip
      self.targets[0].classList.remove('hidden')
      self.targets[1].classList.add('hidden')
      // open
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    }

    const swap = () => {
      // swap
      self.targets[0].classList.add('hidden')
      self.targets[1].classList.remove('hidden')
      // open
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    }

    // resetTooltip: fix when swapping and moving away

    const resetTooltip = () => {
      // trigger our swap
      tooltip.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
      // trigger tooltip deactivation
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      // remove our listeners
      tooltip.removeEventListener('offdone.xt.tooltip', swap)
      tooltip.removeEventListener('offdone.xt.tooltip', swapBack)
    }

    buttonSwap.addEventListener('mouseleave', resetTooltip)

    // on

    const on = () => {
      // swap
      tooltip.addEventListener('offdone.xt.tooltip', swap, { once: true })
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    }

    buttonSwap.addEventListener('on.xt.toggle', on)

    // off

    const off = () => {
      // swap back
      tooltip.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    }

    buttonSwap.addEventListener('off.xt.toggle', off)
  }

  // unmount

  return () => {}
}
