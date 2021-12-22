import React from 'react'
import 'xtendui'
import 'xtendui/src/form'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <input
            type="checkbox"
            className="xt-check xt-checkbox top-auto ml-2 rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
            name="checkbox-button-0"
            defaultChecked
            disabled
          />
        </label>

        <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <input
            type="checkbox"
            className="xt-check xt-checkbox top-auto ml-2 rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
            name="checkbox-button-1"
          />
        </label>

        <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 *** focus-within:outline-browser ***">
          Lorem ipsum
          <input type="radio" className="sr-only" name="radio-button" defaultChecked />
        </label>

        <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 *** focus-within:outline-browser ***">
          Lorem ipsum
          <input type="radio" className="sr-only" name="radio-button" />
        </label>

        <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <input
            type="radio"
            className="xt-check xt-switch top-auto ml-2 rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
            name="switch-button"
            defaultChecked
          />
        </label>

        <label className="*** xt-button *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <input
            type="radio"
            className="xt-check xt-switch top-auto ml-2 rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
            name="switch-button"
          />
        </label>
      </div>
    </div>
  )
}
