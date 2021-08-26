import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--tooltip-swap-toggle-react" ref={ref}>
      <button
        type="button"
        className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
        data-xt-toggle
        data-xt-tooltip="{ targets: '#tooltip--swap-toggle, #tooltip--swap-toggle-swap', duration: 300 }">
        Swap toggle
      </button>

      <div
        className="xt-tooltip p-3 transition duration-300 opacity-0 translate-y-2 in:opacity-100 in:translate-y-0"
        id="tooltip--swap-toggle">
        <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
          <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
        </div>
      </div>

      <div
        className="xt-tooltip p-3 transition duration-300 opacity-0 translate-y-2 in:opacity-100 in:translate-y-0 *** hidden ***"
        id="tooltip--swap-toggle-swap">
        <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
          <div className="py-2 px-2.5 text-xs">Toggled!</div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountButtonsSwap = mountButtonsSwap({ ref })

  // unmount

  return () => {
    unmountButtonsSwap()
  }
}

/* mountButtonsSwap */

const mountButtonsSwap = ({ ref }) => {
  // vars

  const buttonsSwap = ref.querySelectorAll(':scope > .xt-button')

  for (const buttonSwap of buttonsSwap) {
    // vars

    const self = Xt.get({ name: 'xt-tooltip', el: buttonSwap })
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
