import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div
        className="xt-list xt-list-3 items-center"
        data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle', matches: { '(max-width: 767px)': { max: 2 }, '(min-width: 768px)': { max: 3 } } }">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 2
        </button>

        <div className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 0
        </div>

        <div className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 1
        </div>

        <div className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 2
        </div>
      </div>
    </div>
  )
}
