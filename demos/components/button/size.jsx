import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button *** text-3xs py-1.5 px-2.5 rounded-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          small
        </button>

        <button
          type="button"
          className="xt-button *** text-xs py-2.5 px-3.5 rounded-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          medium
        </button>

        <button
          type="button"
          className="xt-button *** text-base py-3 px-4 rounded-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          large
        </button>
      </div>
    </div>
  )
}
