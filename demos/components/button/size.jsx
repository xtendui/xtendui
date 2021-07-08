import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button *** py-1.5 px-2.5 text-3xs rounded-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
          small
        </button>

        <button
          type="button"
          className="xt-button *** py-2.5 px-3.5 text-xs rounded-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
          medium
        </button>

        <button
          type="button"
          className="xt-button *** py-3 px-4 text-base rounded-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
          large
        </button>
      </div>
    </div>
  )
}
