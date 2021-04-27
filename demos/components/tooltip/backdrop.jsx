import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ classSkip: false }">
          <div className="xt-tooltip-item">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 on:z-tooltip">
              backdrop
            </button>

            <div className="xt-tooltip p-2">
              <div className="xt-backdrop bg-black opacity-25"></div>
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ on: 'click', off: 'click', classSkip: false }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 on:z-tooltip">
            backdrop click
          </button>

          <div className="xt-tooltip p-2">
            <div className="xt-backdrop bg-black opacity-25"></div>
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
