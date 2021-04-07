import React from 'react'
export default function component() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 font-sans font-bold leading-tight tracking-tight normal-case text-lg rounded-md text-black bg-gray-200 text-center">
        Mouseenter
      </div>

      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'mouseenter', off: false }">
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
          Toggle 2
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
          Toggle 3
        </button>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 0</div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 1</div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 2</div>

        <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 3</div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 font-sans font-bold leading-tight tracking-tight normal-case text-lg rounded-md text-black bg-gray-200 text-center">
        Focus
      </div>

      <form className="text-sm">
        <div
          className="xt-list xt-list-3 items-center"
          data-xt-toggle="{ elements: ':scope > input', on: 'focus', off: false }">
          <input
            type="text"
            className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
            aria-label="Toggle 0"
            placeholder="Toggle 0"
          />

          <input
            type="text"
            className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
            aria-label="Toggle 1"
            placeholder="Toggle 1"
          />

          <input
            type="text"
            className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
            aria-label="Toggle 2"
            placeholder="Toggle 2"
          />

          <input
            type="text"
            className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
            aria-label="Toggle 3"
            placeholder="Toggle 3"
          />

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 0
          </div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 1
          </div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 2
          </div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 3
          </div>
        </div>
      </form>
    </div>
  )
}
