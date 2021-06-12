import React from 'react'
export default function demo() {
  return (
    <div>
      <nav className="nav">
        <div className="xt-list flex-col max-w-sm">
          <button
            type="button"
            className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 rounded-t-md">
            Lorem ipsum
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 *** on ***">
            dolor sit amet
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            consectetur adipiscing elit
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 disabled"
            aria-disabled="true">
            Lorem ipsum
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            dolor sit amet
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 rounded-b-md">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </button>
        </div>
      </nav>
    </div>
  )
}
