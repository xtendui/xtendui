import React from 'react'
export default function component() {
  return (
    <div>
      <div data-xt-overlay>
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
          list group
        </button>

        <div className="xt-overlay">
          <div className="xt-backdrop bg-black pointer-events-none opacity-25"></div>
          <div className="xt-overlay-container max-w-3xl">
            <button
              type="button"
              className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
              aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon"
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
                      className="xt-button text-xs py-2 px-3.5 rounded-l-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
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
                      className="xt-input py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                      aria-label="Search"
                      placeholder="Seach Catalog"
                    />
                  </div>

                  <button
                    type="button"
                    className="xt-button text-xs py-2 px-3.5 rounded-r-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
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
