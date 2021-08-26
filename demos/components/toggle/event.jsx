import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Mouseenter
      </div>

      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'mouseenter', off: false }">
        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 2
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 3
        </button>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 1
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 2
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 3
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Focus
      </div>

      <form className="text-sm">
        <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'focus', off: false }">
          <input
            type="text"
            className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 0"
            placeholder="Toggle 0"
            data-xt-toggle-element
          />

          <input
            type="text"
            className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 1"
            placeholder="Toggle 1"
            data-xt-toggle-element
          />

          <input
            type="text"
            className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 2"
            placeholder="Toggle 2"
          />

          <input
            type="text"
            className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Toggle 3"
            placeholder="Toggle 3"
            data-xt-toggle-element
          />

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
            data-xt-toggle-target>
            Target 0
          </div>

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
            data-xt-toggle-target>
            Target 1
          </div>

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
            data-xt-toggle-target>
            Target 2
          </div>

          <div
            className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
            data-xt-toggle-target>
            Target 3
          </div>
        </div>
      </form>
    </div>
  )
}
