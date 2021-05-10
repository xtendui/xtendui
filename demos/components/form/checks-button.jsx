import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <label className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <input
            type="checkbox"
            className="xt-check xt-checkbox top-auto ml-2 rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
            defaultChecked
            disabled
          />
        </label>

        <label className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <input
            type="checkbox"
            className="xt-check xt-checkbox top-auto ml-2 rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
          />
        </label>

        <label className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <input
            type="radio"
            className="xt-check xt-radio top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all sr-only"
            name="radio-button"
            defaultChecked
          />
        </label>

        <label className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <input
            type="radio"
            className="xt-check xt-radio top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all sr-only"
            name="radio-button"
          />
        </label>

        <label className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <input
            type="radio"
            className="xt-check xt-switch top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
            name="switch-button"
            defaultChecked
          />
        </label>

        <label className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <input
            type="radio"
            className="xt-check xt-switch top-auto ml-2 rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
            name="switch-button"
          />
        </label>
      </div>
    </div>
  )
}
