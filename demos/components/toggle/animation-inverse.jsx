import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 500 }">
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

        <div
          className="*** done:hidden *** rounded-full text-xs py-2.5 px-3.5 font-semibold shadow w-full *** transition opacity-100 translate-x-0 on:opacity-0 on:translate-x-4 out:transition-none out:opacity-0 out:-translate-x-4 ***"
          data-xt-toggle-target
          data-xt-duration-out="raf">
          Target 0
        </div>

        <div
          className="*** done:hidden *** rounded-full text-xs py-2.5 px-3.5 font-semibold shadow w-full *** transition opacity-100 translate-x-0 on:opacity-0 on:translate-x-4 out:transition-none out:opacity-0 out:-translate-x-4 ***"
          data-xt-toggle-target
          data-xt-duration-out="raf">
          Target 1
        </div>
      </div>
    </div>
  )
}
