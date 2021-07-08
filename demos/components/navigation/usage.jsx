import React from 'react'
export default function demo() {
  return (
    <div>
      <nav className="nav">
        <div className="*** xt-list flex-col max-w-sm ***">
          <button
            type="button"
            className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 *** rounded-t-md ***">
            Lorem ipsum
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 *** on ***">
            dolor sit amet
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            consectetur adipiscing elit
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 disabled"
            aria-disabled="true">
            Lorem ipsum
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
            dolor sit amet
          </button>

          <button
            type="button"
            className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 *** rounded-b-md ***">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </button>
        </div>
      </nav>
    </div>
  )
}
