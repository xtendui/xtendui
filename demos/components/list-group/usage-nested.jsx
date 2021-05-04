import React from 'react'
export default function component() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-list">
          <div className="xt-list-inner">
            <input
              type="number"
              className="block w-full w-16  rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 py-2 px-4 text-black placeholder-black placeholder-opacity-50 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Quantity"
              defaultValue="1"
              min="0"
              max="100"
            />
            <div className="xt-list-inner flex-col">
              <button
                type="button"
                className="xt-button text-2xs py-0.5 px-2 rounded-tr-md border border-gray-500 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                +
              </button>
              <button
                type="button"
                className="xt-button text-2xs py-0.5 px-2 rounded-br-md border border-t-0 border-gray-500 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
                -
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
