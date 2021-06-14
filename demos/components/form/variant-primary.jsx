import React from 'react'
export default function demo() {
  return (
    <div className="demo--form-variant-primary-react">
      <form className="text-sm py-4 px-6 bg-primary-500">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="block mb-3 *** font-semibold text-white ***"> Input </label>
            <input
              type="text"
              className="block w-full *** rounded-md py-3 px-4 text-white placeholder-white placeholder-opacity-75 bg-black bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
              aria-label="Input"
              placeholder="Input"
            />
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> Disabled </label>
            <input
              type="text"
              className="block w-full *** rounded-md py-3 px-4 text-white placeholder-white placeholder-opacity-75 bg-black bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
              aria-label="Input"
              placeholder="Input"
              disabled
            />
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> File </label>
            <input
              type="file"
              className="block w-full *** rounded-md py-3 px-4 text-white placeholder-white placeholder-opacity-75 bg-black bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
              aria-label="File"
            />
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> Textarea </label>
            <textarea
              className="block w-full h-20 max-h-48 *** rounded-md py-3 px-4 text-white placeholder-white placeholder-opacity-75 bg-black bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none *** h-24 resize-vertical"
              aria-label="Textarea"
              placeholder="Textarea"></textarea>
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> Select </label>
            <select
              className="block w-full xt-select *** xt-select-primary  rounded-md py-3 px-4 text-white placeholder-white placeholder-opacity-75 bg-black bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
              aria-label="Select">
              <option defaultValue="">Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> Select multiple </label>
            <select
              className="block w-full xt-select *** xt-select-primary rounded-md py-3 px-4 text-white placeholder-white placeholder-opacity-75 bg-black bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
              aria-label="Select multiple"
              multiple>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> Checkbox </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox *** rounded-md text-primary-600 bg-black bg-opacity-25 transition-all ***"
                    defaultChecked
                    disabled
                  />
                  <span className="*** ml-4 *** text-white xt-links-inverse">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox *** rounded-md text-primary-600 bg-black bg-opacity-25 transition-all ***"
                  />
                  <span className="*** ml-4 *** text-white xt-links-inverse">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    className="xt-check xt-radio *** rounded-full text-primary-600 bg-black bg-opacity-25 transition-all ***"
                    name="radio-primary"
                    defaultChecked
                  />
                  <span className="*** ml-4 *** text-white xt-links-inverse">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    className="xt-check xt-radio *** rounded-full text-primary-600 bg-black bg-opacity-25 transition-all ***"
                    name="radio-primary"
                  />
                  <span className="*** ml-4 *** text-white xt-links-inverse">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block *** mb-3 font-semibold text-white ***"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="checkbox"
                    className="xt-check xt-switch *** rounded-full text-primary-600 bg-black bg-opacity-25 transition-all ***"
                  />
                  <span className="*** ml-4 *** text-white xt-links-inverse">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    className="xt-check xt-switch *** rounded-full text-primary-600 bg-black bg-opacity-25 transition-all ***"
                    name="switch-primary"
                    defaultChecked
                  />
                  <span className="*** ml-4 *** text-white xt-links-inverse">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="*** cursor-pointer inline-flex items-baseline ***">
                  <input
                    type="radio"
                    className="xt-check xt-switch *** rounded-full text-primary-600 bg-black bg-opacity-25 transition-all ***"
                    name="switch-primary"
                  />
                  <span className="*** ml-4 *** text-white xt-links-inverse">
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
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
