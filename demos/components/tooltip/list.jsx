import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-tooltip="{ position: 'right' }">
        <div data-xt-tooltip-element>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            list
          </button>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="*** xt-list flex-col ***">
                <a
                  href="#"
                  className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
