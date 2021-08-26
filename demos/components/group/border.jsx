import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-list flex-col md:flex-row md:flex-nowrap">
          <div className="inline-flex flex-auto">
            <button
              type="submit"
              className="xt-button py-2.5 px-3.5 text-sm rounded-tl-md md:rounded-l-md *** border border-b-0 md:border-b border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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
              className="block w-full *** border border-b-0 border-l-0 md:border-b md:border-r-0 border-gray-300 *** py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>

          <button
            type="submit"
            className="xt-button py-2.5 px-3.5 text-sm rounded-b-md md:rounded-bl-none md:rounded-r-md *** border border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
