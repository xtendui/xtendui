import React from 'react'
import 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  return (
    <div className="demo--drop-disable-react">
      <div data-xt-drop="{ matches: { '(min-width: 768px)': { disabled: true } } }">
        <div data-xt-drop-element>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            drop
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
                <div data-xt-drop="{ elements: '[data-xt-drop-element-nested]', targets: '[data-xt-drop-target-nested]' }">
                  <div data-xt-drop-element-nested>
                    <button
                      type="button"
                      className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                      nested
                    </button>

                    <div className="xt-drop p-4" data-xt-drop-target-nested>
                      <div className="xt-backdrop bg-black opacity-25"></div>
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
    </div>
  )
}
