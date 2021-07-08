import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div className="demo--toggle-animation-react">
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
          className="target off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow w-full"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="target off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow w-full"
          data-xt-toggle-target>
          Target 1
        </div>
      </div>
    </div>
  )
}
