import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
        Lorem ipsum
        <span data-xt-tooltip-element>
          <a href="#">dolor</a>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </span>
        sit amet
      </div>
    </div>
  )
}
