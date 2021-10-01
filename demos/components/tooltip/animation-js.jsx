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
        <div data-xt-tooltip-element>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
            Tooltip
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Consectetur adipiscing elit</div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip-element>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
            Tooltip
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Consectetur adipiscing elit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountTooltips */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref

  const targetTimeOn = 0.3
  const targetEaseOn = 'quint.out'
  const targetXOn = 16
  const targetTimeOff = 0.3
  const targetEaseOff = 'quint.out'
  const targetXOff = 16

  // init

  /***/
  let self = new Xt.Tooltip(tooltip, {
    duration: 300,
    delay: 50,
  })
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      const target = tr.querySelector(':scope > *')
      gsap.killTweensOf(target)
      gsap.set(target, {
        x: -self.direction * targetXOn,
        opacity: 0,
      })
      gsap.to(target, {
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
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      const target = tr.querySelector(':scope > *')
      gsap.killTweensOf(target)
      gsap.to(target, {
        x: self.direction * targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  for (const tr of self.targets) {
    tr.addEventListener('off.xt.tooltip', off)
  }
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountTooltip = mountTooltip({ ref })

  // unmount

  return () => {
    unmountTooltip()
  }
}
