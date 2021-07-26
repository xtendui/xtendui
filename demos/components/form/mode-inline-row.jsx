import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-semibold text-gray-700"> Lorem ipsum </label>
            <input
              type="text"
              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Lorem ipsum"
            />
          </div>

          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-semibold text-gray-700"> Dolor sit amet </label>
            <input
              type="text"
              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Dolor sit amet"
            />
          </div>

          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-semibold text-gray-700"> Lorem ipsum </label>
            <input
              type="text"
              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Lorem ipsum"
            />
          </div>

          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-semibold text-gray-700"> Dolor sit amet </label>
            <input
              type="text"
              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Dolor sit amet"
            />
          </div>

          <div className="w-full">
            <label className="block mb-3 font-semibold text-gray-700"> Checkbox </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 transition-all"
                    defaultChecked
                    disabled
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>

              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 transition-all"
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-3 font-semibold text-gray-700"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 transition-all"
                    name="radio-inline-row"
                    defaultChecked
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>

              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 transition-all"
                    name="radio-inline-row"
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-3 font-semibold text-gray-700"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    className="xt-check xt-switch rounded-full text-primary-500 bg-gray-200 transition-all"
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>

              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-switch rounded-full text-primary-500 bg-gray-200 transition-all"
                    name="switch-inline-row"
                    defaultChecked
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>

              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-switch rounded-full text-primary-500 bg-gray-200 transition-all"
                    name="switch-inline-row"
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}