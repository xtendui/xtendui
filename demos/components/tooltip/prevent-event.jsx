import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ preventEvent: true }">
        <a
          href="#tooltip-with-link-1"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
          data-xt-tooltip-element>
          tooltip
        </a>

        <div className="xt-tooltip p-2" data-xt-tooltip-target>
          <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  )
}
