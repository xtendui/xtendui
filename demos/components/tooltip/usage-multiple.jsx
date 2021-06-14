import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ elements: ':scope > .xt-tooltip-item', targets: ':scope > .xt-tooltip-item > .xt-tooltip' }">
        Lorem ipsum
        <span className="*** xt-tooltip-item ***">
          <a href="#">dolor</a>

          <div className="*** xt-tooltip *** p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </span>
        sit
        <span className="*** xt-tooltip-item ***">
          <a href="#">amet</a>

          <div className="*** xt-tooltip *** p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Consectetur adipiscing elit
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
