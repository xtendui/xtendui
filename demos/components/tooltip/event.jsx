import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function Demo() {
  return (
    <div>
      <div data-xt-tooltip="{ on: 'click', off: 'click' }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-tooltip-element>
          click
        </button>

        <div className="xt-tooltip p-3" data-xt-tooltip-target>
          <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
            <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
          </div>
        </div>

        <form className="text-sm mt-4">
          <div data-xt-tooltip="{ on: 'focus', off: 'blur' }">
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Focus"
              placeholder="Focus"
              data-xt-tooltip-element
            />

            <div className="xt-tooltip p-3" data-xt-tooltip-target>
              <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
                <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
