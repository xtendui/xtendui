import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
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

      <div className="off:hidden out:pointer-events-none w-full group" data-xt-toggle-target>
        <div className="relative">
          <div className="*** xt-design *** rounded-full shadow *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
          <div className="py-2.5 px-3.5 text-xs font-semibold *** transition duration-300 opacity-0 group-in:opacity-100 ***">
            Target 0
          </div>
        </div>
      </div>

      <div className="off:hidden out:pointer-events-none w-full group" data-xt-toggle-target>
        <div className="relative">
          <div className="*** xt-design *** rounded-full shadow *** transition duration-300 opacity-0 -translate-x-4 group-in:opacity-100 group-in:translate-x-0 group-out:translate-x-4 ***"></div>
          <div className="py-2.5 px-3.5 text-xs font-semibold *** transition duration-300 opacity-0 group-in:opacity-100 ***">
            Target 1
          </div>
        </div>
      </div>
    </div>
  )
}
