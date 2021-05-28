import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="block whitespace-nowrap font-semibold text-gray-900"> Lorem ipsum </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                  aria-label="Lorem ipsum"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="block whitespace-nowrap font-semibold text-gray-900"> Dolor sit amet </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                  aria-label="Dolor sit amet"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="block whitespace-nowrap font-semibold text-gray-900"> Lorem ipsum </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                  aria-label="Lorem ipsum"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-center">
                <label className="block whitespace-nowrap font-semibold text-gray-900"> Dolor sit amet </label>
              </div>

              <div className="w-full md:w-auto md:self-center">
                <input
                  type="text"
                  className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                  aria-label="Dolor sit amet"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-baseline">
                <label className="block whitespace-nowrap font-semibold text-gray-900"> Checkbox </label>
              </div>

              <div className="w-full md:w-10/12">
                <div className="xt-row xt-row-x-8 xt-row-y-2">
                  <div className="w-full md:w-auto">
                    <label className="cursor-pointer inline-flex items-baseline">
                      <input
                        type="checkbox"
                        className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-300 transition-all"
                        defaultChecked
                        disabled
                      />
                      <span className="ml-4">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="cursor-pointer inline-flex items-baseline">
                      <input
                        type="checkbox"
                        className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-300 transition-all"
                      />
                      <span className="ml-4">Lorem ipsum</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-baseline">
                <label className="block whitespace-nowrap font-semibold text-gray-900"> Radio </label>
              </div>

              <div className="w-full md:w-10/12">
                <div className="xt-row xt-row-x-8 xt-row-y-2">
                  <div className="w-full md:w-auto">
                    <label className="cursor-pointer inline-flex items-baseline">
                      <input
                        type="radio"
                        className="xt-check xt-radio rounded-full text-primary-500 bg-gray-300 transition-all"
                        name="radio-horizontal"
                        defaultChecked
                      />
                      <span className="ml-4">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="cursor-pointer inline-flex items-baseline">
                      <input
                        type="radio"
                        className="xt-check xt-radio rounded-full text-primary-500 bg-gray-300 transition-all"
                        name="radio-horizontal"
                      />
                      <span className="ml-4">Lorem ipsum</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-auto md:self-baseline">
                <label className="block whitespace-nowrap font-semibold text-gray-900"> Switch </label>
              </div>

              <div className="w-full md:w-10/12">
                <div className="xt-row xt-row-x-8 xt-row-y-2">
                  <div className="w-full md:w-auto">
                    <label className="cursor-pointer inline-flex items-baseline">
                      <input
                        type="checkbox"
                        className="xt-check xt-switch rounded-full text-primary-500 bg-gray-300 transition-all"
                      />
                      <span className="ml-4">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="cursor-pointer inline-flex items-baseline">
                      <input
                        type="radio"
                        className="xt-check xt-switch rounded-full text-primary-500 bg-gray-300 transition-all"
                        name="switch-horizontal"
                      />
                      <span className="ml-4">Lorem ipsum</span>
                    </label>
                  </div>

                  <div className="w-full md:w-auto">
                    <label className="cursor-pointer inline-flex items-baseline">
                      <input
                        type="radio"
                        className="xt-check xt-switch rounded-full text-primary-500 bg-gray-300 transition-all"
                        name="switch-horizontal"
                      />
                      <span className="ml-4">Lorem ipsum</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
