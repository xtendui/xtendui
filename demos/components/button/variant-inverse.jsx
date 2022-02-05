import React from 'react'
export default function Demo() {
  return (
    <div>
      <div className="xt-card p-7 sm:p-9 text-base rounded-2xl text-white xt-links-inverse bg-primary-500">
        <div className="xt-list xt-list-3 items-center text-white xt-links-inverse">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 ***">
            Gray
          </button>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 ***">
            Primary
          </button>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md *** font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 ***">
            Text
          </button>

          <button type="button" className="xt-button py-2.5 px-3.5 text-sm rounded-md *** xt-link ***">
            Link
          </button>
        </div>
      </div>
    </div>
  )
}
