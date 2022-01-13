import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-tooltip="{ mouseParent: true, duration: 300, delay: 50 }">
        <div>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Tooltip
          </button>

          <div className="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** opacity-0 group-dir-before:translate-x-4 group-dir-after:-translate-x-4 group-in:transition group-in:duration-300 group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:opacity-0 group-out-before:-translate-x-4 group-out-after:translate-x-4 ***">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Tooltip
          </button>

          <div className="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
            <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** opacity-0 group-dir-before:translate-x-4 group-dir-after:-translate-x-4 group-in:transition group-in:duration-300 group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:opacity-0 group-out-before:-translate-x-4 group-out-after:translate-x-4 ***">
              <div className="py-2 px-2.5 text-xs">Consectetur adipiscing elit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
