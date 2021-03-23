import { Xt } from 'xtendui'
import 'xtendui/src/core/tooltip'

Xt.mount.push({
  matches: '.demo--tooltip-swap-click',
  mount: ({ object }) => {
    const unmountButtonsSwap = mountButtonsSwap({ object })

    // unmount

    return () => {
      unmountButtonsSwap()
    }
  },
})

/* mountButtonsSwap */

const mountButtonsSwap = ({ object }) => {
  const buttonsSwap = object.querySelectorAll(':scope > .xt-button')

  for (const buttonSwap of buttonsSwap) {
    // vars

    const tooltip = buttonSwap.parentNode.querySelector('.xt-tooltip')

    // swap

    const swapBack = () => {
      tooltip.removeEventListener('offdone.xt.tooltip', swapBack)
      // swap tooltip
      let self = Xt.get('xt-tooltip', buttonSwap)
      if (self) {
        self.targets[0].classList.remove('hidden')
        self.targets[1].classList.add('hidden')
      }
    }

    const swap = () => {
      tooltip.removeEventListener('offdone.xt.tooltip', swap)
      // swap
      let self = Xt.get('xt-tooltip', buttonSwap)
      console.log(self.targets)
      self.targets[0].classList.add('hidden')
      self.targets[1].classList.remove('hidden')
      // open
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
      // swap back
      tooltip.addEventListener('offdone.xt.tooltip', swapBack)
    }

    // click

    const click = () => {
      // swap
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      tooltip.addEventListener('offdone.xt.tooltip', swap)
    }

    buttonSwap.addEventListener('click', click)
  }

  // unmount

  return () => {}
}
