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

          <div className="xt-tooltip p-3" data-xt-tooltip-target data-xt-group="my-group">
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>

          <div className="xt-tooltip p-3" data-xt-tooltip-target data-xt-position="right-end" data-xt-group="my-group">
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Consectetur adipiscing elit</div>
            </div>
          </div>
        </span>
        sit
        <span data-xt-tooltip-element>
          <a href="#">amet</a>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
