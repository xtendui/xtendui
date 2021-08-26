import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 flex-col">
        <form className="*** text-xs ***">
          <div className="xt-list flex-col md:flex-row md:flex-nowrap  *** xt-list-1 max-w-xs ***">
            <div className="inline-flex flex-auto">
              <button
                type="submit"
                className="xt-button *** py-2 px-3 text-xs *** rounded-tl-md md:rounded-l-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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
                className="block w-full rounded-b-md md:rounded-bl-none md:rounded-r-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <button
              type="submit"
              className="xt-button *** py-2 px-3 text-xs *** rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              Search
            </button>
          </div>
        </form>

        <form className="*** text-sm ***">
          <div className="xt-list flex-col md:flex-row md:flex-nowrap *** xt-list-2 max-w-sm ***">
            <div className="inline-flex flex-auto">
              <button
                type="submit"
                className="xt-button *** py-2.5 px-3.5 text-sm *** rounded-tl-md md:rounded-l-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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
                className="block w-full rounded-b-md md:rounded-bl-none md:rounded-r-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <button
              type="submit"
              className="xt-button *** py-2.5 px-3.5 text-sm *** rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              Search
            </button>
          </div>
        </form>

        <form className="*** text-base ***">
          <div className="xt-list flex-col md:flex-row md:flex-nowrap *** xt-list-3 max-w-md ***">
            <div className="inline-flex flex-auto">
              <button
                type="submit"
                className="xt-button *** py-3 px-4 text-base *** rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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
                className="block w-full  rounded-b-md md:rounded-bl-none md:rounded-r-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <button
              type="submit"
              className="xt-button *** py-3 px-4 text-base *** rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
