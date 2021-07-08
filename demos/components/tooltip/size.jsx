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
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-tooltip-element>
            small
          </button>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative *** py-1 px-2 text-3xs rounded-sm *** shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-tooltip-element>
            medium
          </button>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative *** py-2 px-3.5 text-xs rounded-sm *** shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-tooltip-element>
            large
          </button>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative *** py-2.5 px-4 text-base rounded-sm *** shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>

        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-tooltip-element>
            max-width
          </button>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="relative *** py-2 px-3.5 text-xs max-w-lg rounded-sm *** shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut
              fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus
              egestas congue.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
