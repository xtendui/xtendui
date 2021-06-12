import React from 'react'
import 'xtendui'
import 'xtendui/src/groupnumber'

export default function demo() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-200 text-center">
        Horizontal
      </div>

      <form className="text-sm">
        <div className="xt-list" data-xt-groupnumber>
          <div className="xt-list-inner">
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-l-md border border-gray-500 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
              data-xt-step="-1">
              -
            </button>
            <input
              type="number"
              className="block w-full w-16 border border-l-0 border-gray-500 py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
              aria-label="Quantity"
              defaultValue="1"
              min="0"
              max="100"
            />
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-r-md border border-l-0 border-gray-500 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
              data-xt-step="1">
              +
            </button>
          </div>
        </div>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-200 text-center">
        Vertical
      </div>

      <form className="text-sm">
        <div className="xt-list" data-xt-groupnumber>
          <div className="xt-list-inner">
            <input
              type="number"
              className="block w-full w-16 rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
              aria-label="Quantity"
              defaultValue="1"
              min="0"
              max="100"
            />
            <div className="xt-list-inner flex-col">
              <button
                type="button"
                className="xt-button text-2xs py-0.5 px-2.5 rounded-tr-md border border-gray-500 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
                data-xt-step="1">
                +
              </button>
              <button
                type="button"
                className="xt-button text-2xs py-0.5 px-2.5 rounded-br-md border border-t-0 border-gray-500 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500"
                data-xt-step="-1">
                -
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
