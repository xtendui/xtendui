import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Mouseenter
      </div>

      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'mouseenter', off: false }">
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

        <button
          type="button"
          className="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 transition"
          data-xt-toggle-element>
          Toggle 2
        </button>

        <button
          type="button"
          className="xt-button rounded-full py-2.5 px-3.5 text-xs text-black font-semibold bg-gray-200 transition hover:bg-gray-300 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500 transition"
          data-xt-toggle-element>
          Toggle 3
        </button>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 1
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 2
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 3
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Focus
      </div>

      <form className="text-sm">
        <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'focus', off: false }">
          <input
            type="text"
            className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 0"
            placeholder="Toggle 0"
            data-xt-toggle-element
          />

          <input
            type="text"
            className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 1"
            placeholder="Toggle 1"
            data-xt-toggle-element
          />

          <input
            type="text"
            className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 2"
            placeholder="Toggle 2"
          />

          <input
            type="text"
            className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 3"
            placeholder="Toggle 3"
            data-xt-toggle-element
          />

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
            data-xt-toggle-target>
            Target 0
          </div>

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
            data-xt-toggle-target>
            Target 1
          </div>

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
            data-xt-toggle-target>
            Target 2
          </div>

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
            data-xt-toggle-target>
            Target 3
          </div>
        </div>
      </form>
    </div>
  )
}
