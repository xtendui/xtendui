import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-list *** flex-nowrap ***">
          <button type="submit" className="*** flex items-stretch group ***">
            <div className="xt-button py-2.5 px-3.5 text-sm *** rounded-l-md *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 group-hover:text-white group-hover:bg-primary-600 group-active:text-white group-active:bg-primary-700 group-on:text-white group-on:bg-primary-600">
              Search
            </div>
            <div className="xt-button py-2.5 px-3.5 text-sm font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 group-hover:bg-gray-200 group-active:bg-gray-300 group-on:bg-gray-200">
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
            </div>
          </button>
          <div className="inline-flex flex-auto">
            <input
              type="text"
              className="block w-full *** rounded-r-md *** py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
