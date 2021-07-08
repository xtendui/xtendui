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
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-tooltip-element>
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-tooltip-target data-xt-duration="100">
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-tooltip-element>
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-tooltip-target data-xt-duration="500">
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-tooltip-element>
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-tooltip-target data-xt-duration="500">
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div>
          <div className="xt-list xt-list-3 items-center" data-xt-tooltip="{ position: 'bottom', delay: 50 }">
            <div data-xt-tooltip-element>
              <button
                type="button"
                className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
                tooltip multiple
              </button>

              <div className="xt-tooltip p-2 group" data-xt-tooltip-target>
                <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>

            <div data-xt-tooltip-element>
              <button
                type="button"
                className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
                tooltip multiple
              </button>

              <div className="xt-tooltip p-2 group" data-xt-tooltip-target>
                <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black *** transition duration-300 opacity-0 translate-y-4 group-in:opacity-100 group-in:translate-y-0 ***">
                  Consectetur adipiscing elit
                </div>
              </div>
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

/* mountTooltip */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltips = ref.querySelectorAll('.xt-tooltip')

  for (const tooltip of tooltips) {
    // vars

    const container = tooltip.closest('[data-xt-tooltip]')
    const self = Xt.get('xt-tooltip', container)
    const delayReset = 1000
    const durationFast = 100

    // fix only once when tooltip has multiple targets

    if (container.dataset.onlyOnceDone) return () => {}
    container.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      for (const tooltip of tooltips) {
        tooltip.dataset.defaultXtDuration = 'test'
      }
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
