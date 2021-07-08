import React from 'react'
import 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  return (
    <div>
      <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
        <div data-xt-drop-element>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            mouse
          </button>

          <div className="xt-drop p-4" data-xt-drop-target>
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="xt-list flex-col">
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
                <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave', position: 'right-start' }">
                  <div data-xt-drop-element>
                    <button
                      type="button"
                      className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                      nested
                    </button>

                    <div className="xt-drop p-4" data-xt-drop-target>
                      <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-white xt-links-inverse bg-primary-500">
                        <nav className="xt-list flex-col">
                          <a
                            href="#"
                            className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </a>
                          <button
                            type="button"
                            className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                            Dolor sit
                          </button>
                          <button
                            type="button"
                            className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-white font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                            Amet
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <form className="text-sm mt-4">
        <div data-xt-drop="{ on: 'focus', off: false }">
          <input
            type="text"
            className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Focus"
            placeholder="Focus"
            data-xt-drop-element
          />

          <div className="xt-drop p-4" data-xt-drop-target>
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
              <nav className="xt-list flex-col">
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
      </form>
    </div>
  )
}
