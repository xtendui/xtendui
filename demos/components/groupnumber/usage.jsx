import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Horizontal design
      </div>

      <form className="text-sm">
        <div className="*** xt-list ***" data-xt-groupnumber>
          <div className="*** inline-flex ***">
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-l-md border border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
            <input
              type="number"
              className="block w-full w-16 text-center *** border border-l-0 border-gray-300 *** py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Quantity"
              defaultValue="0"
              min="22"
              max="44"
              step="11"
            />
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-r-md border border-l-0 border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
          </div>
        </div>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Vertical design and no limit and no validate
      </div>

      <p>
        Pressing <code>Enter</code> does browser validation also if no limit and no validate on component.
      </p>

      <form className="text-sm">
        <div className="*** xt-list ***" data-xt-groupnumber="{ limit: false, validate: false }">
          <input
            type="number"
            className="block w-full w-16 text-center *** rounded-tl-md rounded-bl-md border border-r-0 border-gray-300 *** py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Quantity"
            defaultValue="0"
            min="22"
            max="44"
            step="11"
          />
          <div className="*** inline-flex flex-col ***">
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-tr-md border border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-br-md border border-t-0 border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
          </div>
        </div>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Responsive design and voidable
      </div>

      <form className="text-sm mt-6">
        <div className="*** xt-list ***" data-xt-groupnumber="{ voidable: true }">
          <div className="*** inline-flex flex-col md:flex-row ***">
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** md:order-3 rounded-t-md md:rounded-tl-none md:rounded-br-md border border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
            <input
              type="number"
              className="block w-full w-16 *** md:order-2 border-l border-r border-gray-300 md:border-l-0 md:border-r-0 md:border-t md:border-b *** text-center py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Quantity"
              min="22"
              max="44"
              step="11"
            />
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** md:order-1 rounded-b-md md:rounded-br-none md:rounded-tl-md border border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
