import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', duration: 300 }">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          tooltip
        </button>

        <div className="xt-tooltip p-2 group">
          <div className="xt-tooltip-inner">
            <div className="xt-design rounded-sm shadow-tooltip bg-black transform transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4"></div>
            <div className="relative text-xs py-2 px-3.5 font-semibold text-white xt-links-inverse transition duration-300 opacity-0 group-in:opacity-100">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
