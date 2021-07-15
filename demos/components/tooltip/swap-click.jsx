import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--tooltip-swap-click-react" ref={ref}>
      <button
        type="button"
        className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
        data-xt-tooltip="{ targets: '#tooltip--swap-click, #tooltip--swap-click-swap', duration: 300 }">
        Swap click
      </button>

      <div
        className="xt-tooltip p-2 transition duration-300 opacity-0 translate-y-2 in:opacity-100 in:translate-y-0"
        id="tooltip--swap-click">
        <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
          Lorem ipsum dolor sit amet
        </div>
      </div>

      <div
        className="xt-tooltip p-2 transition duration-300 opacity-0 translate-y-2 in:opacity-100 in:translate-y-0 *** hidden ***"
        id="tooltip--swap-click-swap">
        <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
          Clicked!
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
    }

    const swap = () => {
      // swap
      self.targets[0].classList.add('hidden')
      self.targets[1].classList.remove('hidden')
      // open
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
      // swap back
      tooltip.addEventListener('offdone.xt.tooltip', swapBack, { once: true })
    }

    // resetTooltip: fix when swapping and moving away

    const resetTooltip = () => {
      // trigger our swap
      tooltip.dispatchEvent(new CustomEvent('offdone.xt.tooltip'))
      // trigger tooltip deactivation
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    }

    buttonSwap.addEventListener('mouseleave', resetTooltip)

    // click

    const click = () => {
      // swap
      tooltip.addEventListener('offdone.xt.tooltip', swap, { once: true })
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
    }

    buttonSwap.addEventListener('click', click)
  }

  // unmount

  return () => {}
}
