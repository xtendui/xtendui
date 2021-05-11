import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  const refCurrent = useRef(null)
  let unmount
  let ref = useCallback(ref => {
    if (refCurrent.current) {
      unmount(refCurrent.current)
    }
    refCurrent.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--tooltip-swap-toggle-react" ref={ref}>
      <button
        type="button"
        className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700"
        data-xt-toggle
        data-xt-tooltip="{ targets: '#tooltip--swap-toggle, #tooltip--swap-toggle-swap', duration: 300 }">
        Swap toggle
      </button>

      <div className="xt-tooltip p-2 group" id="tooltip--swap-toggle">
        <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
          Lorem ipsum dolor sit amet
        </div>
      </div>

      <div className="xt-tooltip p-2 group hidden" id="tooltip--swap-toggle-swap">
        <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0">
          Toggled!
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

    let self = Xt.get('xt-tooltip', buttonSwap)
    const tooltip = buttonSwap.parentNode.querySelector('.xt-tooltip')

    // swap

    const swapBack = () => {
      tooltip.removeEventListener('offdone.xt.tooltip', swapBack)
      // swap tooltip
      self.targets[0].classList.remove('hidden')
      self.targets[1].classList.add('hidden')
      // open
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    }

    const swap = () => {
      tooltip.removeEventListener('offdone.xt.tooltip', swap)
      // swap
      self.targets[0].classList.add('hidden')
      self.targets[1].classList.remove('hidden')
      // open
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt.tooltip'))
    }

    // on
    const on = e => {
      // check because of event propagation
      if (e.target === buttonSwap) {
        // swap
        tooltip.addEventListener('offdone.xt.tooltip', swap)
        tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      }
    }

    buttonSwap.addEventListener('on.xt.toggle', on, true)

    // off

    const off = e => {
      // check because of event propagation
      if (e.target === buttonSwap) {
        // swap back
        tooltip.addEventListener('offdone.xt.tooltip', swapBack)
        tooltip.dispatchEvent(new CustomEvent('off.trigger.xt.tooltip'))
      }
    }

    buttonSwap.addEventListener('off.xt.toggle', off, true)
  }

  // unmount

  return () => {}
}
