import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--tooltip-animation-js-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <div className="xt-tooltip-item">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            tooltip
          </button>

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Consectetur adipiscing elit
            </div>
          </div>
        </div>

        <div className="xt-tooltip-item">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            tooltip
          </button>

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountTooltip = mountTooltip({ ref })

  // unmount

  return () => {
    unmountTooltip()
  }
}

/* mountTooltips */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref.querySelector(':scope > .xt-list')

  const targetTimeOn = 0.3
  const targetEaseOn = 'quint.out'
  const targetTimeOff = 0.3
  const targetEaseOff = 'quint.out'

  // init

  /***/
  let self = new Xt.Tooltip(tooltip, {
    elements: ':scope > .xt-tooltip-item',
    targets: ':scope > .xt-tooltip-item > .xt-tooltip',
    duration: 300,
    delay: 50,
  })
  /***/

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      const inner = tr.querySelector(':scope > *')
      gsap.killTweensOf(inner)
      gsap.set(inner, {
        x: -self.direction * 15,
        opacity: 0,
      })
      gsap.to(inner, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('on.xt.tooltip', on)
  }

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      const inner = tr.querySelector(':scope > *')
      gsap.killTweensOf(inner)
      gsap.to(inner, {
        x: self.direction * 15,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.tooltip', off)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
