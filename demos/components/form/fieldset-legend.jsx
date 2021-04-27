import React from 'react'
export default function component() {
  return (
    <div>
      <form className="text-sm">
        <fieldset className="my-8 xt-my-auto">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <legend className="text-2xl font-bold leading-snug">Legend #1</legend>
            </div>

            <div className="w-full md:w-6/12">
              <label className="flex mb-3 font-semibold text-gray-900"> Lorem Ipsum </label>
              <input
                type="text"
                className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
                aria-label="Lorem ipsum"
              />
              <div className="mt-3 text-black text-opacity-50 text-xs leading-snug">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </div>
            </div>

            <div className="w-full md:w-6/12">
              <label className="flex mb-3 font-semibold text-gray-900"> Dolor sit amet </label>
              <input
                type="text"
                className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
                aria-label="Dolor sit amet"
              />
            </div>

            <div className="w-full">
              <div className="xt-row xt-row-x-6 xt-row-y-4">
                <div className="w-full md:w-auto">
                  <label className="flex mb-3 font-semibold text-gray-900"> Lorem ipsum </label>
                  <input
                    type="text"
                    className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
                    aria-label="Lorem ipsum"
                  />
                </div>

                <div className="w-full md:w-auto">
                  <label className="flex mb-3 font-semibold text-gray-900"> Dolor sit amet </label>
                  <input
                    type="text"
                    className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
                    aria-label="Dolor sit amet"
                  />
                </div>
              </div>

              <div className="mt-3 text-black text-opacity-50 text-xs leading-snug">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="my-8 xt-my-auto">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <legend className="text-2xl font-bold leading-snug">Legend #2</legend>
            </div>

            <div className="w-full">
              <label className="flex mb-3 font-semibold text-gray-900"> Checkbox </label>

              <div className="xt-row xt-row-x-8 xt-row-y-2">
                <div className="w-full">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      defaultChecked
                    />
                    <span className="ml-4">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    />
                    <span className="ml-4">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                  <div className="mt-3 text-black text-opacity-50 text-xs leading-snug">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="xt-row xt-row-x-6 xt-row-y-4">
                <div className="w-full md:w-2/12 md:self-baseline">
                  <label className="flex font-semibold text-gray-900"> Checkbox </label>
                </div>

                <div className="w-full md:w-10/12">
                  <div className="xt-row xt-row-x-8 xt-row-y-2">
                    <div className="w-full">
                      <label className="cursor-pointer inline-flex items-baseline">
                        <input
                          type="checkbox"
                          className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                          defaultChecked
                        />
                        <span className="ml-4">
                          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
                          Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac
                          diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                        </span>
                      </label>
                    </div>

                    <div className="w-full">
                      <label className="cursor-pointer inline-flex items-baseline">
                        <input
                          type="checkbox"
                          className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                          defaultChecked
                        />
                        <span className="ml-4">
                          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
                          Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac
                          diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                        </span>
                      </label>
                      <div className="mt-3 text-black text-opacity-50 text-xs leading-snug">
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <legend className="text-2xl font-bold leading-snug">Legend #3</legend>
            </div>

            <div className="w-full">
              <label className="flex mb-3 font-semibold text-gray-900"> Checkbox </label>

              <div className="xt-row xt-row-x-8 xt-row-y-2">
                <div className="w-full md:w-auto">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                      defaultChecked
                    />
                    <span className="ml-4">Lorem ipsum</span>
                  </label>
                </div>

                <div className="w-full md:w-auto">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    />
                    <span className="ml-4">Lorem ipsum</span>
                  </label>
                </div>
              </div>

              <div className="mt-3 text-black text-opacity-50 text-xs leading-snug">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
