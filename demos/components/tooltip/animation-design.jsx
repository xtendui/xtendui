import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ duration: 300 }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-tooltip-element>
          Tooltip
        </button>

        <div className="xt-tooltip p-3 group" data-xt-tooltip-target>
          <div className="*** relative ***">
            <div className="*** xt-design *** rounded-md shadow-md bg-black *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
            <div className="*** xt-card *** font-medium text-white xt-links-inverse *** transition duration-300 opacity-0 group-in:opacity-100 ***">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}