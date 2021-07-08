import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="bg-primary-500 py-5 px-6">
        <div className="xt-list xt-list-3 items-center text-white xt-links-inverse">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md *** text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 ***">
            Gray
          </button>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md *** text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 ***">
            Primary
          </button>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md *** text-white font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100 ***">
            Text
          </button>

          <button type="button" className="xt-button py-2.5 px-3.5 text-xs rounded-md *** xt-link ***">
            Link
          </button>
        </div>
      </div>
    </div>
  )
}
