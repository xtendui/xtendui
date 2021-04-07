import React from 'react'
export default function component() {
  return (
    <div>
      <div data-xt-tooltip="{ elements: '.xt-tooltip-item', targets: '.xt-tooltip' }">
        Lorem ipsum
        <span className="xt-tooltip-item" data-xt-group="my-group">
          <a href="#">dolor</a>

          <div className="xt-tooltip p-2" data-xt-group="my-group">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>

          <div className="xt-tooltip p-2" data-xt-position="right-end" data-xt-group="my-group">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Consectetur adipiscing elit
            </div>
          </div>
        </span>
        sit
        <span className="xt-tooltip-item">
          <a href="#">amet</a>

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
