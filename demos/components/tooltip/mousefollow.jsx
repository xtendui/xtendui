import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'
import 'xtendui/src/mousefollow'

export default function Demo() {
  return (
    <div>
      <div data-xt-tooltip="{ duration: 300, popperjs: false }" data-xt-mousefollow="{ classSkip: true }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-tooltip-element>
          mouse follow
        </button>

        <div
          className="*** xt-mousefollow fixed !-mt-1 !ml-4 *** xt-tooltip p-3 group"
          data-xt-tooltip-target
          data-xt-mousefollow-target>
          <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** transition duration-300 ease-in-out-quint opacity-0 translate-x-10 group-in:opacity-100 group-in:translate-x-0 ***">
            <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>
    </div>
  )
}
