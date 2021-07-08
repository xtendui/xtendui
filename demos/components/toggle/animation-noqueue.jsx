import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ queue: false, duration: 500 }">
        <button
          type="button"
          className="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 transition"
          data-xt-toggle-element>
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 transition"
          data-xt-toggle-element>
          Toggle 1
        </button>

        <div className="relative w-full">
          <div
            className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** rounded-full text-xs py-2.5 px-3.5 font-semibold shadow *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
            data-xt-toggle-target>
            Target 0
          </div>

          <div
            className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** rounded-full text-xs py-2.5 px-3.5 font-semibold shadow *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
            data-xt-toggle-target>
            Target 1
          </div>
        </div>

        <div className="mt-2">Active targets are not absolute so content flow normally.</div>
      </div>
    </div>
  )
}
