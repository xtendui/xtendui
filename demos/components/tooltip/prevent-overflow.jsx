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
      <div
        className="xt-card p-7 sm:p-9 text-base rounded-2xl text-white xt-links-inverse bg-primary-500"
        data-node-boundary>
        <div className="xt-list xt-list-3 items-center">
          <div data-xt-tooltip-element>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              Tooltip
            </button>

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
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
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
              <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
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
  const boundary = ref.querySelector('[data-node-boundary]')

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
