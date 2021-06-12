import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div
        className="xt-list xt-list-3 items-center"
        data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle' }">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-group="group0">
          Toggle Group 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-group="group0">
          Toggle Group 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 2
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-group="group1">
          Toggle Group 1
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
          data-xt-group="group0,group1">
          Toggle Group 0 and 1
        </button>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 1</div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
          data-xt-group="group0">
          Target Group 0
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
          data-xt-group="group1">
          Target Group 1a
        </div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
          data-xt-group="group1">
          Target Group 1b
        </div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 2</div>

        <div
          className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200"
          data-xt-group="group0,group1">
          Target Group 0 and 1
        </div>
      </div>
    </div>
  )
}
