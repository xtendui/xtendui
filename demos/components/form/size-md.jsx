import React from 'react'
export default function component() {
  return (
    <div>
      <form className="text-base">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Input </label>
            <input
              type="text"
              className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
              aria-label="Input"
              placeholder="Input"
            />
          </div>

          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> File </label>
            <input
              type="file"
              className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
              aria-label="File"
            />
          </div>

          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Textarea </label>
            <textarea
              className="xt-input xt-textarea rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition h-24 resize-vertical"
              aria-label="Textarea"
              placeholder="Textarea"></textarea>
          </div>

          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Select </label>
            <select
              className="xt-input xt-select rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
              aria-label="Select">
              <option defaultValue="">Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Select multiple </label>
            <select
              className="xt-input xt-select rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
              multiple
              aria-label="Select multiple">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Checkbox </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="xt-label-check">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    defaultChecked
                    disabled
                  />
                  <span className="xt-check-content">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="xt-label-check">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                  />
                  <span className="xt-check-content">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="xt-label-check">
                  <input
                    type="radio"
                    className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="radio-md"
                    defaultChecked
                  />
                  <span className="xt-check-content">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="xt-label-check">
                  <input
                    type="radio"
                    className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="radio-md"
                  />
                  <span className="xt-check-content">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="xt-label-check">
                  <input
                    type="checkbox"
                    className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                  />
                  <span className="xt-check-content">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="xt-label-check">
                  <input
                    type="radio"
                    className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="switch-md"
                    defaultChecked
                  />
                  <span className="xt-check-content">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="xt-label-check">
                  <input
                    type="radio"
                    className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="switch-md"
                  />
                  <span className="xt-check-content">
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
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
