import React from 'react'
export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', on: 'click', off: 'click' }">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          click
        </button>

        <div className="xt-tooltip p-2">
          <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
            Lorem ipsum
            <div
              className="inline-block"
              data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', on: 'click', off: 'click', position: 'auto' }">
              <a href="#">dolor</a>

              <div className="xt-tooltip p-2">
                <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                  Consectetur adipiscing elit
                </div>
              </div>
            </div>
            sit amet
          </div>
        </div>
      </div>

      <form className="text-sm mt-4">
        <div data-xt-tooltip="{ elements: ':scope > input', targets: ':scope > .xt-tooltip', on: 'focus', off: 'blur' }">
          <input
            type="text"
            className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
            aria-label="Focus"
            placeholder="Focus"
          />

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
