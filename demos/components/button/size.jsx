import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button *** py-2 px-3 text-xs rounded-md *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
          Small
        </button>

        <button
          type="button"
          className="xt-button *** py-2.5 px-3.5 text-sm rounded-md *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
          Medium
        </button>

        <button
          type="button"
          className="xt-button *** py-3 px-4 text-base rounded-md *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
          Large
        </button>
      </div>
    </div>
  )
}
