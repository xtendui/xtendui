import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 *** xt-disabled ***"
          aria-disabled="true">
          Gray
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 *** xt-disabled ***"
          aria-disabled="true">
          Primary
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100 *** xt-disabled ***"
          aria-disabled="true">
          Text
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md xt-link *** xt-disabled ***"
          aria-disabled="true">
          link
        </button>
      </div>
    </div>
  )
}