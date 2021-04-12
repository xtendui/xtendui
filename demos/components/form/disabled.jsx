import React from 'react'
export default function component() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> Input </label>
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Input"
              placeholder="Input"
              disabled
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> File </label>
            <input
              type="file"
              className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="File"
              disabled
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> Textarea </label>
            <textarea
              className="block w-full h-20 max-h-48 rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300 h-24 resize-vertical"
              aria-label="Textarea"
              placeholder="Textarea"
              disabled></textarea>
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> Select </label>
            <select
              className="block w-full xt-select rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Select"
              disabled>
              <option defaultValue="">Select an option</option>
              <option>Test</option>
              <option>Test</option>
              <option>Test</option>
            </select>
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> Select multiple </label>
            <select
              className="block w-full xt-select rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Select multiple"
              multiple
              disabled>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
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
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="radio-usage"
                    defaultChecked
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="radio-usage"
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="switch-usage"
                    defaultChecked
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="switch-usage"
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
