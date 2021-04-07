import React, { useRef, useCallback } from 'react'
import 'xtendui/src/tooltip'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--tooltip-animation-fast-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-duration="300">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition ease-out duration-300 opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-duration="300">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition ease-out duration-300 opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-duration="300">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition ease-out duration-300 opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div>
          <div
            className="xt-list xt-list-3 items-center"
            data-xt-tooltip="{ position: 'bottom', elements: '.xt-tooltip-item', targets: '.xt-tooltip', delay: 25 }">
            <div className="xt-tooltip-item">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                tooltip multiple
              </button>

              <div className="xt-tooltip p-2 group" data-xt-duration="300">
                <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition ease-out duration-300 opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>

            <div className="xt-tooltip-item">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                tooltip multiple
              </button>

              <div className="xt-tooltip p-2 group" data-xt-duration="300">
                <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition ease-out duration-300 opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0">
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
  const tooltips = ref.querySelectorAll('.xt-tooltip')

  for (const tooltip of tooltips) {
    // vars

    const object = tooltip.closest('[data-xt-tooltip]')
    let timeout
    const delay = 1500
    const duration = 50

    // fix only once when tooltip has multiple targets

    if (object.dataset.onlyOnceDone) return
    object.dataset.onlyOnceDone = 'true'

    // on

    const on = e => {
      // make other tooltips fast
      const tooltipsOther = Array.from(tooltips).filter(x => x !== e.target)
      for (const tooltip of tooltipsOther) {
        tooltip.dataset.defaultXtDuration = tooltip.getAttribute('data-xt-duration')
        tooltip.setAttribute('data-xt-duration', duration)
        const inner = tooltip.querySelector(':scope > *')
        inner.style.transitionDuration = `${duration}ms`
      }
      // make all tooltips normal
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        for (const tooltip of tooltips) {
          tooltip.setAttribute('data-xt-duration', tooltip.dataset.defaultXtDuration)
          const inner = tooltip.querySelector(':scope > *')
          inner.style.transitionDuration = ''
        }
      }, delay)
    }

    tooltip.addEventListener('on.xt.tooltip', on)
  }

  // unmount

  return () => {}
}
