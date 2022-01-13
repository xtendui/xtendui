import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-medium text-gray-700"> Lorem ipsum </label>
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Lorem ipsum"
            />
          </div>

          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-medium text-gray-700"> Dolor sit amet </label>
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Dolor sit amet"
            />
          </div>

          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-medium text-gray-700"> Lorem ipsum </label>
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Lorem ipsum"
            />
          </div>

          <div className="w-full *** md:w-auto ***">
            <label className="block mb-3 font-medium text-gray-700"> Dolor sit amet </label>
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Dolor sit amet"
            />
          </div>

          <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Checkbox </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
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
                    aria-label="Lorem ipsum"
                    className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-radio rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
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
                    aria-label="Lorem ipsum"
                    className="xt-check xt-radio rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    name="radio-inline-row"
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                  />
                  <span className="ml-4">Lorem ipsum</span>
                </label>
              </div>

              <div className="w-full *** md:w-auto ***">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
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
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
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
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
