import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ on: 'click', off: 'click' }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
          data-xt-tooltip-element>
          click
        </button>

        <div className="xt-tooltip p-2" data-xt-tooltip-target>
          <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      <form className="text-sm mt-4">
        <div data-xt-tooltip="{ on: 'focus', off: 'blur' }">
          <input
            type="text"
            className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Focus"
            placeholder="Focus"
            data-xt-tooltip-element
          />

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
