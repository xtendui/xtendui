import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--tooltip-swap-click-react" ref={ref}>
      <div data-xt-tooltip="{ duration: 300 }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-tooltip-element
          data-xt-group="all">
          Swap click
        </button>

        <div className="xt-tooltip p-3 *** group ***" data-xt-tooltip-target data-xt-group="all">
          <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 opacity-0 -translate-y-2 group-in:opacity-100 group-in:translate-y-0 ***">
            <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
          </div>
        </div>

        <div className="xt-tooltip p-3 *** group hidden ***" data-xt-tooltip-target data-xt-group="all">
          <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 opacity-0 -translate-y-2 group-in:opacity-100 group-in:translate-y-0 ***">
            <div className="py-2 px-2.5 text-xs">Clicked!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref.querySelector('[data-xt-tooltip]')
  const self = Xt.get({ name: 'xt-tooltip', el: tooltip })
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

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountTooltip = mountTooltip({ ref })

  // unmount

  return () => {
    unmountTooltip()
  }
}
