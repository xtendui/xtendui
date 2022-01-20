import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Horizontal design
      </div>

      <form className="text-sm">
        <div className="*** xt-list flex-nowrap ***" data-xt-groupnumber>
          <div className="*** inline-flex ***">
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-r-none border border-r-0 border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
            <input
              type="number"
              className="block w-16 text-center *** border border-gray-300 *** py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Quantity"
              defaultValue="22"
              min="-22"
              max="22"
              step="11"
            />
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-l-none border border-l-0 border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
          </div>
        </div>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Side design and no limit and no validate
      </div>

      <p>
        Pressing <code>Enter</code> still does browser validation.
      </p>

      <form className="text-sm">
        <div className="*** xt-list flex-nowrap ***" data-xt-groupnumber="{ limit: false, validate: false }">
          <input
            type="number"
            className="block w-16 text-center *** rounded-md rounded-r-none border border-r-0 border-gray-300 *** py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
            aria-label="Quantity"
            defaultValue="22"
            min="-22"
            max="22"
            step="11"
          />
          <div className="*** inline-flex flex-col ***">
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-l-none rounded-b-none border border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-br-md rounded-l-none rounded-t-none border border-t-0 border-gray-300 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
          </div>
        </div>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Vertical design and no initial defaultValue (voidable)
      </div>

      <div className="xt-list xt-list-3 items-center">
        <form className="text-sm mt-6">
          <div className="*** inline-flex flex-col ***" data-xt-groupnumber>
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-b-none border border-gray-300 border-b-0 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
            <input
              type="number"
              className="block w-16 *** border border-gray-300 *** text-center py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Quantity"
              min="-22"
              max="-11"
              step="11"
            />
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-t-none border border-gray-300 border-t-0 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
          </div>
        </form>

        <form className="text-sm mt-6">
          <div className="*** inline-flex flex-col ***" data-xt-groupnumber>
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-b-none border border-gray-300 border-b-0 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
            <input
              type="number"
              className="block w-16 *** border border-gray-300 *** text-center py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Quantity"
              min="11"
              max="22"
              step="11"
            />
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-t-none border border-gray-300 border-t-0 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
          </div>
        </form>

        <form className="text-sm mt-6">
          <div className="*** inline-flex flex-col ***" data-xt-groupnumber>
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-b-none border border-gray-300 border-b-0 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="1">
              +
            </button>
            <input
              type="number"
              className="block w-16 *** border border-gray-300 *** text-center py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Quantity"
              min="-22"
              max="22"
              step="11"
            />
            <button
              type="button"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-md rounded-t-none border border-gray-300 border-t-0 *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-step="-1">
              -
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
