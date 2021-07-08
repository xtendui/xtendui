import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--tooltip-prevent-overflow-react" ref={ref}>
      <div className="py-4 px-6 bg-primary-500">
        <div className="xt-list xt-list-3 items-center">
          <div data-xt-tooltip-element>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
              tooltip
            </button>

            <div className="xt-tooltip p-2" data-xt-tooltip-target>
              <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Consectetur adipiscing elit
              </div>
            </div>
          </div>

          <div data-xt-tooltip-element>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
              tooltip
            </button>

            <div className="xt-tooltip p-2" data-xt-tooltip-target>
              <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Consectetur adipiscing elit
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

/* mountTooltips */

const mountTooltip = ({ ref }) => {
  // vars

  const tooltip = ref
  const boundary = ref.querySelector(':scope > *')

  // init

  /***/
  let self = new Xt.Tooltip(tooltip, {
    position: 'bottom-end',
    popperjs: {
      strategy: 'fixed',
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            boundary: boundary,
          },
        },
      ],
    },
  })
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}
