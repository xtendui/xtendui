import React from 'react'
import 'xtendui'
import 'xtendui/src/overlay'

export default function demo() {
  return (
    <div>
      <div data-xt-overlay>
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
          data-xt-overlay-element>
          list group
        </button>

        <div className="xt-overlay" data-xt-overlay-target>
          <div className="xt-backdrop pointer-events-none bg-black opacity-25"></div>
          <div className="xt-overlay-container max-w-3xl">
            <button
              type="button"
              className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
              aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="xt-overlay-inner">
              <form className="text-sm rounded-md shadow-overlay">
                <div className="xt-list flex-nowrap max-w-sm">
                  <div className="xt-list-inner flex-auto">
                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-xs rounded-l-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon text-xl -my-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="block w-full py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                      aria-label="Search"
                      placeholder="Seach Catalog"
                    />
                  </div>

                  <button
                    type="button"
                    className="xt-button py-2.5 px-3.5 text-xs rounded-r-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
