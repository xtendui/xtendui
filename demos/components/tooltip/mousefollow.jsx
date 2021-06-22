import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'
import 'xtendui/src/mousefollow'

export default function demo() {
  return (
    <div>
      <div
        data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', duration: 300, popperjs: false }"
        data-xt-mousefollow>
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          mouse follow
        </button>

        <div className="*** xt-mousefollow fixed *** xt-tooltip p-2 group">
          <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black -mt-1 ml-4 pointer-events-none transition duration-300 ease-in-out-quint opacity-0 translate-x-10 group-in:opacity-100 group-in:translate-x-0">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  )
}
