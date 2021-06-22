import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-toggle="{ targets: '#toggle--animation-0' }">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-toggle="{ targets: '#toggle--animation-1' }">
          Toggle 1
        </button>

        <div
          className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          id="toggle--animation-0">
          Target 0
        </div>

        <div
          className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          id="toggle--animation-1">
          Target 1
        </div>
      </div>
    </div>
  )
}
