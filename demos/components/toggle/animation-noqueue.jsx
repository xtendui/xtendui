import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div className="demo--toggle-animation-noqueue-react">
      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ queue: false, duration: 500 }">
        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 1
        </button>

        <div className="relative w-full">
          <div
            className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
            data-xt-toggle-target>
            Target 0
          </div>

          <div
            className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** rounded-full text-xs py-2 px-3 font-medium shadow w-full *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
            data-xt-toggle-target>
            Target 1
          </div>
        </div>

        <div className="mt-2">Active targets are not absolute so content flow normally.</div>
      </div>
    </div>
  )
}
