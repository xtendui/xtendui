import React from 'react'
export default function component() {
  return (
    <div>
      <div data-xt-tooltip="{ preventEvent: true }">
        <a
          href="#tooltip-with-link-1"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          tooltip
        </a>

        <div className="xt-tooltip p-2">
          <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  )
}
