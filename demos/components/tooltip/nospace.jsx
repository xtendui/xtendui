import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            bottom
          </button>

          <div className="xt-tooltip">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 w-4 h-4 bg-black"></div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom-start' }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            bottom start
          </button>

          <div className="xt-tooltip">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 w-4 h-4 bg-black"></div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'right-end' }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            right end
            <br />
            ...
          </button>

          <div className="xt-tooltip">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 w-4 h-4 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
