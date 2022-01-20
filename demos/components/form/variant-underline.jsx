import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Input </label>
            <input
              type="text"
              className="block w-full *** py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none ***"
              aria-label="Input"
              placeholder="Input"
            />
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Disabled </label>
            <input
              type="text"
              className="block w-full *** py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none ***"
              aria-label="Input"
              placeholder="Input"
              disabled
            />
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> File </label>
            <input
              type="file"
              className="block w-full *** py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none ***"
              aria-label="File"
            />
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Textarea </label>
            <textarea
              className="block w-full h-20 max-h-48 *** py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none *** resize-vertical"
              aria-label="Textarea"
              placeholder="Textarea"></textarea>
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Select </label>
            <select
              className="block w-full xt-select *** py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none ***"
              aria-label="Select">
              <option defaultValue="">Select an option</option>
              <option>Test</option>
              <option>Test</option>
              <option>Test</option>
            </select>
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Select multiple </label>
            <select
              className="block w-full xt-select *** py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none ***"
              multiple
              aria-label="Select multiple">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Checkbox </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-checkbox *** rounded-md bg-gray-200 border border-transparent transition-all checked:bg-primary-500 ***"
                    defaultChecked
                    disabled
                  />
                  <span className="*** ml-4 ***">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-checkbox *** rounded-md bg-gray-200 border border-transparent transition-all checked:bg-primary-500 ***"
                  />
                  <span className="*** ml-4 ***">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-radio *** rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500 ***"
                    name="radio-default"
                    defaultChecked
                  />
                  <span className="*** ml-4 ***">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-radio *** rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500 ***"
                    name="radio-default"
                  />
                  <span className="*** ml-4 ***">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block *** mb-1 font-medium text-gray-700 ***"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch *** rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500 ***"
                  />
                  <span className="*** ml-4 ***">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch *** rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500 ***"
                    name="switch-default"
                    defaultChecked
                  />
                  <span className="*** ml-4 ***">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch *** rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500 ***"
                    name="switch-default"
                  />
                  <span className="*** ml-4 ***">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
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
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
