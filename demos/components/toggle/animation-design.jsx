import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div
      className="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle', duration: 500 }">
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

      <div className="xt-card *** xt-toggle *** group">
        <div className="xt-toggle-inner">
          <div className="*** xt-design *** rounded-md bg-gray-200 *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
          <div className="relative text-sm p-6 text-black xt-links-default *** transition duration-300 opacity-0 group-in:opacity-100 ***">
            Target 0
          </div>
        </div>
      </div>

      <div className="xt-card *** xt-toggle *** group">
        <div className="xt-toggle-inner">
          <div className="*** xt-design *** rounded-md bg-gray-200 *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
          <div className="relative text-sm p-6 text-black xt-links-default *** transition duration-300 opacity-0 group-in:opacity-100 ***">
            Target 1
          </div>
        </div>
      </div>
    </div>
  )
}
