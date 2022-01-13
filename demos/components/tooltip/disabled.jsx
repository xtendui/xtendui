import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div className="demo--tooltip-disable-react">
      <div data-xt-tooltip="{ mouseParent: true }">
        Lorem ipsum
        <span>
          <a href="/" data-xt-tooltip-element>
            dolor
          </a>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">
                Lorem ipsum dolor sit amet
                <div
                  className="inline-block"
                  data-xt-tooltip="{ mouseParent: true, elements: '[data-xt-tooltip-element-nested]', targets: '[data-xt-tooltip-target-nested]', matches: { '(min-width: 768px)': { disabled: true } } }">
                  <span>
                    <a href="/" data-xt-tooltip-element-nested>
                      dolor
                    </a>

                    <div className="xt-tooltip p-3" data-xt-tooltip-target-nested>
                      <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                        <div className="py-2 px-2.5 text-xs">Consectetur adipiscing elit</div>
                      </div>
                    </div>
                  </span>
                </div>
                sit amet
              </div>
            </div>
          </div>
        </span>
        sit amet
      </div>
    </div>
  )
}
