import React from 'react'
export default function demo() {
  return (
    <div>
      <nav aria-label="Toolbar" className="xt-list xt-list-2">
        <div className="inline-flex *** group ***">
          <a
            href="/"
            className="xt-button py-2.5 px-3.5 text-sm rounded-l-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 group-hover:bg-gray-200 group-active:bg-gray-300 group-on:bg-gray-200">
            Back
          </a>
          <a
            href="/"
            className="xt-button py-2.5 px-3.5 text-sm rounded-r-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 group-hover:text-white group-hover:bg-primary-600 group-active:text-white group-active:bg-primary-700 group-on:text-white group-on:bg-primary-600">
            Clear
          </a>
        </div>
      </nav>
    </div>
  )
}
