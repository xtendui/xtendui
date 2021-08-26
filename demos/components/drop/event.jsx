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
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
            mouse
          </button>

          <div className="xt-drop p-3" data-xt-drop-target>
            <div className="xt-card w-64 rounded-md shadow-lg text-gray-900 xt-links-default bg-white">
              <nav className="xt-list flex-col p-3">
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Dolor sit
                </button>
                <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave', position: 'right-start' }">
                  <div data-xt-drop-element>
                    <button
                      type="button"
                      className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                      nested
                    </button>

                    <div className="xt-drop p-3" data-xt-drop-target>
                      <div className="xt-card w-64 rounded-md shadow-lg text-white xt-links-inverse bg-primary-500">
                        <nav className="xt-list flex-col p-3">
                          <a
                            href="#"
                            className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          </a>
                          <button
                            type="button"
                            className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                            Dolor sit
                          </button>
                          <button
                            type="button"
                            className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
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
            className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Focus"
            placeholder="Focus"
            data-xt-drop-element
          />

          <div className="xt-drop p-3" data-xt-drop-target>
            <div className="xt-card w-64 rounded-md shadow-lg text-gray-900 xt-links-default bg-white">
              <nav className="xt-list flex-col p-3">
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto justify-start text-left font-medium leading-snug transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
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
