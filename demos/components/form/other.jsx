import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <fieldset className="*** my-8 xt-my-auto ***">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <legend className="*** text-2xl font-bold leading-snug ***">Legend #1</legend>
            </div>

            <div className="w-full md:w-6/12">
              <label className="block mb-3 font-medium text-gray-700"> Lorem Ipsum </label>
              <input
                type="text"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Lorem ipsum"
              />
              <div className="*** mt-3 text-gray-900 text-opacity-50 text-xs leading-snug ***">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </div>
            </div>

            <div className="w-full md:w-6/12">
              <label className="block mb-3 font-medium text-gray-700"> Dolor sit amet </label>
              <input
                type="text"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Dolor sit amet"
              />
            </div>

            <div className="w-full">
              <div className="xt-row xt-row-x-6 xt-row-y-4">
                <div className="w-full md:w-auto">
                  <label className="block mb-3 font-medium text-gray-700"> Lorem ipsum </label>
                  <input
                    type="text"
                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    aria-label="Lorem ipsum"
                  />
                </div>

                <div className="w-full md:w-auto">
                  <label className="block mb-3 font-medium text-gray-700"> Dolor sit amet </label>
                  <input
                    type="text"
                    className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                    aria-label="Dolor sit amet"
                  />
                </div>
              </div>

              <div className="*** mt-3 text-gray-900 text-opacity-50 text-xs leading-snug ***">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="*** my-8 xt-my-auto ***">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <legend className="*** text-2xl font-bold leading-snug ***">Legend #2</legend>
            </div>

            <div className="w-full">
              <label className="block mb-3 font-medium text-gray-700"> Checkbox </label>

              <div className="xt-row xt-row-x-8 xt-row-y-2">
                <div className="w-full">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
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
                      className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                    />
                    <span className="ml-4">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                  <div className="*** mt-3 text-gray-900 text-opacity-50 text-xs leading-snug ***">
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
                  <label className="block font-medium text-gray-700"> Checkbox </label>
                </div>

                <div className="w-full md:w-10/12">
                  <div className="xt-row xt-row-x-8 xt-row-y-2">
                    <div className="w-full">
                      <label className="cursor-pointer inline-flex items-baseline">
                        <input
                          type="checkbox"
                          className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
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
                          className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                          defaultChecked
                        />
                        <span className="ml-4">
                          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
                          Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac
                          diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                        </span>
                      </label>
                      <div className="*** mt-3 text-gray-900 text-opacity-50 text-xs leading-snug ***">
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
              <legend className="*** text-2xl font-bold leading-snug ***">Legend #3</legend>
            </div>

            <div className="w-full">
              <label className="block mb-3 font-medium text-gray-700"> Checkbox </label>

              <div className="xt-row xt-row-x-8 xt-row-y-2">
                <div className="w-full md:w-auto">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                      defaultChecked
                    />
                    <span className="ml-4">Lorem ipsum</span>
                  </label>
                </div>

                <div className="w-full md:w-auto">
                  <label className="cursor-pointer inline-flex items-baseline">
                    <input
                      type="checkbox"
                      className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                    />
                    <span className="ml-4">Lorem ipsum</span>
                  </label>
                </div>
              </div>

              <div className="*** mt-3 text-gray-900 text-opacity-50 text-xs leading-snug ***">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
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
        </fieldset>
      </form>
    </div>
  )
}
