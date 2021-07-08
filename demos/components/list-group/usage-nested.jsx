import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="*** xt-list ***">
          <div className="*** xt-list-inner ***">
            <input
              type="number"
              className="block w-full w-16  rounded-tl-md rounded-bl-md border border-r-0 border-gray-400 py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Quantity"
              defaultValue="1"
              min="0"
              max="100"
            />
            <div className="*** xt-list-inner flex-col ***">
              <button
                type="button"
                className="xt-button text-2xs py-1 px-2 rounded-tr-md border border-gray-400 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                +
              </button>
              <button
                type="button"
                className="xt-button text-2xs py-1 px-2 rounded-br-md border border-t-0 border-gray-400 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                -
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
