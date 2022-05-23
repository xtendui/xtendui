import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function Demo() {
  return (
    <div>
      <div data-xt-tooltip="{ mouseParent: true }">
        Lorem ipsum
        <span>
          <a href="/" data-xt-tooltip-element>
            dolor
          </a>

          <div className="*** xt-tooltip p-3 ***" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </span>
        sit
        <span>
          <a href="/" data-xt-tooltip-element>
            amet
          </a>

          <div className="*** xt-tooltip p-3 ***" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Consectetur adipiscing elit</div>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}