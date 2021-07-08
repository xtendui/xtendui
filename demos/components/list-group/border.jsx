import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-list flex-nowrap">
          <div className="xt-list-inner flex-auto">
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-xs *** rounded-l-md border border-gray-400 *** text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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
              className="block w-full *** border border-l-0 border-gray-400 *** py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs *** rounded-r-md border border-l-0 border-gray-400 *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            Lorem ipsum
          </button>
        </div>
      </form>
    </div>
  )
}
