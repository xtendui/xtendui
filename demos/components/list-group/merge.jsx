import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <button type="button" className="xt-list *** group ***">
          <div className="xt-button py-2.5 px-3.5 text-xs rounded-l-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition group-hover:bg-primary-600 group-active:bg-primary-700 group-on:on:bg-primary-600 ***">
            Search
          </div>

          <div className="xt-button py-2.5 px-3.5 text-xs rounded-r-md *** text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition group-hover:bg-gray-200 group-active:bg-gray-300 group-on:on:bg-gray-200 ***">
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
      </form>
    </div>
  )
}
