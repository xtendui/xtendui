import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ groupElements: false }">
        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element
          data-xt-group="group0">
          Toggle Group 0
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
          data-xt-toggle-element
          data-xt-group="group0">
          Toggle Group 0
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
          data-xt-toggle-element
          data-xt-group="group1">
          Toggle Group 1
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element
          data-xt-group="group0,group1">
          Toggle Group 0 and 1
        </button>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 1
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target
          data-xt-group="group0">
          Target Group 0
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target
          data-xt-group="group1">
          Target Group 1a
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target
          data-xt-group="group1">
          Target Group 1b
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 2
        </div>

        <div
          className="off:hidden out:pointer-events-none rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target
          data-xt-group="group0,group1">
          Target Group 0 and 1
        </div>
      </div>
    </div>
  )
}
