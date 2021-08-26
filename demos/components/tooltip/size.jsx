import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Small
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card *** rounded-md *** shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-1 px-2 text-3xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Medium
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card *** rounded-md *** shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Large
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card *** rounded-md *** shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2.5 px-4 text-base">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            max-width
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card *** max-w-lg rounded-md *** shadow-md text-white xt-links-inverse font-medium bg-black">
              <div className="py-2 px-2.5 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc
                ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium
                metus egestas congue.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
