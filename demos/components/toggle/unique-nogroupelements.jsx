import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function Demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3', groupElements: false }">
          Toggle
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3', groupElements: false }">
          Toggle same
        </button>

        <div
          className="off:hidden out:pointer-events-none bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          id="toggle--unique-2">
          Target 0
        </div>

        <div
          className="off:hidden out:pointer-events-none bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          id="toggle--unique-3">
          Target 1
        </div>
      </div>
    </div>
  )
}