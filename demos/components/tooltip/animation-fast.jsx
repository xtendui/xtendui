import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--tooltip-animation-fast-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ position: 'bottom', duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Tooltip
          </button>

          <div className="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Tooltip
          </button>

          <div className="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Tooltip
          </button>

          <div className="xt-tooltip p-3 group" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>

        <div>
          <div className="xt-list xt-list-3 items-center" data-xt-tooltip="{ position: 'bottom', delay: 50 }">
            <div data-xt-tooltip-element>
              <button
                type="button"
                className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                tooltip multiple
              </button>

              <div className="xt-tooltip p-3 group" data-xt-tooltip-target>
                <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
                  <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
            </div>

            <div data-xt-tooltip-element>
              <button
                type="button"
                className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                tooltip multiple
              </button>

              <div className="xt-tooltip p-3 group" data-xt-tooltip-target>
                <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
                  <div className="py-2 px-2.5 text-xs">Consectetur adipiscing elit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltips = ref.querySelectorAll('.xt-tooltip')

  for (const tooltip of tooltips) {
    // vars

    const container = tooltip.closest('[data-xt-tooltip]')
    const delayReset = 500
    const durationFast = 100

    // fix only once when tooltip has multiple targets

    if (container.dataset.onlyOnceDone) return () => {}
    container.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      const self = Xt.get({ name: 'xt-tooltip', el: container })
      // make other tooltips fast
      const tooltipsOther = Array.from(tooltips).filter(x => x !== e.target)
      for (const tooltip of tooltipsOther) {
        tooltip.dataset.defaultXtDuration = self.options.duration
        self.options.duration = durationFast
        const inner = tooltip.querySelector(':scope > *')
        inner.style.transitionDuration = `${durationFast}ms`
      }
      // make all tooltips normal
      clearTimeout(window.xtTooltipFastTimeout)
      window.xtTooltipFastTimeout = setTimeout(() => {
        for (const tooltip of tooltips) {
          self.options.duration = tooltip.dataset.defaultXtDuration
          const inner = tooltip.querySelector(':scope > *')
          inner.style.transitionDuration = ''
        }
      }, delayReset)
    }

    tooltip.addEventListener('on.xt.tooltip', on)
  }

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
