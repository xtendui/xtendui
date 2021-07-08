import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div data-xt-tooltip>
        Lorem ipsum
        <span data-xt-tooltip-element data-xt-group="my-group">
          <a href="#">dolor</a>

          <div className="xt-tooltip p-2" data-xt-tooltip-target data-xt-group="my-group">
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>

          <div className="xt-tooltip p-2" data-xt-tooltip-target data-xt-position="right-end" data-xt-group="my-group">
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Consectetur adipiscing elit
            </div>
          </div>
        </span>
        sit
        <span data-xt-tooltip-element>
          <a href="#">amet</a>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
