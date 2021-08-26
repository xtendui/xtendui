import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ position: 'bottom' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            bottom
          </button>

          <div className="xt-tooltip off:hidden out:pointer-events-none" data-xt-tooltip-target>
            <div className="xt-card py-2 px-2.5 text-xs rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 w-3 h-3 bg-black"></div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'bottom-start' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            bottom start
          </button>

          <div className="xt-tooltip off:hidden out:pointer-events-none" data-xt-tooltip-target>
            <div className="xt-card py-2 px-2.5 text-xs rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 w-3 h-3 bg-black"></div>
          </div>
        </div>

        <div data-xt-tooltip="{ position: 'right-end' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            right end
            <br />
            ...
          </button>

          <div className="xt-tooltip off:hidden out:pointer-events-none" data-xt-tooltip-target>
            <div className="xt-card py-2 px-2.5 text-xs rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 w-3 h-3 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
