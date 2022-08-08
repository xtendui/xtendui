import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function Demo() {
  return (
    <div>
      <div data-xt-tooltip="{ on: 'click', off: 'click' }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-tooltip-element>
          Tooltip
        </button>

        <div className="xt-tooltip p-3" data-xt-tooltip-target>
          <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
            <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            <button
              type="button"
              className="xt-button *** xt-dismiss *** py-2.5 px-3.5 text-sm rounded-b-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}