import React from 'react'
export default function demo() {
  return (
    <div className="demo--toggle-animation-inverse-react">
      <div
        className="xt-list xt-list-3 items-center"
        data-xt-toggle="{ targets: ':scope > .xt-toggle, :scope > .xt-toggle-inverse', min: 1, duration: 500 }">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Toggle normal
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Toggle 0 inverse
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Toggle 1 inverse
        </button>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 ">
          Target normal
        </div>

        <div
          className="xt-card xt-toggle-inverse rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
          data-xt-duration-out="25">
          Target 0 inverse
        </div>

        <div
          className="xt-card xt-toggle-inverse rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
          data-xt-duration-out="25">
          Target 1 inverse
        </div>
      </div>
    </div>
  )
}
