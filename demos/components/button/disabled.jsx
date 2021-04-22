import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400 xt-disabled"
          aria-disabled="true">
          Gray
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 xt-disabled"
          aria-disabled="true">
          Primary
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100 xt-disabled"
          aria-disabled="true">
          Text
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md xt-link xt-disabled"
          aria-disabled="true">
          link
        </button>
      </div>
    </div>
  )
}