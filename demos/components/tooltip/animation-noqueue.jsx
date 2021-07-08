import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-tooltip="{ queue: false, duration: 300 }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-tooltip-target>
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip-element>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            tooltip
          </button>

          <div className="xt-tooltip p-2 group" data-xt-tooltip-target>
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***">
              Consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
