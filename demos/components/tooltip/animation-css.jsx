import React from 'react'
export default function component() {
  return (
    <div className="demo--tooltip-animation-css-react">
      <div data-xt-tooltip>
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
          tooltip
        </button>

        <div className="xt-tooltip p-2" data-xt-duration="300">
          <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  )
}
