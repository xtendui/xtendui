import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div className="demo--tooltip-disable-react">
      <div data-xt-tooltip>
        Lorem ipsum
        <span data-xt-tooltip-element>
          <a href="#">dolor</a>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum
              <div
                className="inline-block"
                data-xt-tooltip="{ elements: '[data-xt-tooltip-element-nested]', targets: '[data-xt-tooltip-target-nested]', matches: { '(min-width: 768px)': { disabled: true } } }">
                <span data-xt-tooltip-element-nested>
                  <a href="#">dolor</a>

                  <div className="xt-tooltip p-2" data-xt-tooltip-target-nested>
                    <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                      Consectetur adipiscing elit
                    </div>
                  </div>
                </span>
              </div>
              sit amet
            </div>
          </div>
        </span>
        sit amet
      </div>
    </div>
  )
}
