import React from 'react'
export default function Demo() {
  return (
    <div className="demo--form-variant-primary-react">
      <div className="xt-card p-7 sm:p-9 text-base rounded-2xl text-white xt-links-inverse bg-primary-500">
        <form className="text-sm">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <label className="block mb-3 *** font-medium text-white ***"> Input </label>
              <input
                type="text"
                className="block w-full *** rounded-md py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
                aria-label="Input"
                placeholder="Input"
              />
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> Disabled </label>
              <input
                type="text"
                className="block w-full *** rounded-md py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
                aria-label="Input"
                placeholder="Input"
                disabled
              />
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> File </label>
              <input
                type="file"
                className="block w-full *** rounded-md py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
                aria-label="File"
              />
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> Textarea </label>
              <textarea
                className="block w-full h-20 max-h-48 *** rounded-md py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none *** resize-vertical"
                aria-label="Textarea"
                placeholder="Textarea"></textarea>
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> Select </label>
              <select
                className="block w-full xt-select *** xt-select-primary  rounded-md py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
                aria-label="Select">
                <option defaultValue="">Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> Select multiple </label>
              <select
                className="block w-full xt-select *** xt-select-primary rounded-md py-2.5 px-3.5 text-white placeholder-white placeholder-opacity-75 bg-primary-800 bg-opacity-25 transition focus:bg-opacity-50 focus:outline-none ***"
                aria-label="Select multiple"
                multiple>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> Checkbox </label>

              <div className="xt-row xt-row-x-8 xt-row-y-2">
                <div className="w-full">
                  <label className="*** cursor-pointer inline-flex items-baseline ***">
                    <input
                      type="checkbox"
                      aria-label="Lorem ipsum"
                      className="xt-check xt-checkbox *** rounded-md bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600 ***"
                      defaultChecked
                      disabled
                    />
                    <span className="*** ml-4 *** text-white xt-links-inverse">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="*** cursor-pointer inline-flex items-baseline ***">
                    <input
                      type="checkbox"
                      aria-label="Lorem ipsum"
                      className="xt-check xt-checkbox *** rounded-md bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600 ***"
                    />
                    <span className="*** ml-4 *** text-white xt-links-inverse">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> Radio </label>

              <div className="xt-row xt-row-x-8 xt-row-y-2">
                <div className="w-full">
                  <label className="*** cursor-pointer inline-flex items-baseline ***">
                    <input
                      type="radio"
                      aria-label="Lorem ipsum"
                      className="xt-check xt-radio *** rounded-full bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600 ***"
                      name="radio-primary"
                      defaultChecked
                    />
                    <span className="*** ml-4 *** text-white xt-links-inverse">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="*** cursor-pointer inline-flex items-baseline ***">
                    <input
                      type="radio"
                      aria-label="Lorem ipsum"
                      className="xt-check xt-radio *** rounded-full bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600 ***"
                      name="radio-primary"
                    />
                    <span className="*** ml-4 *** text-white xt-links-inverse">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="block *** mb-3 font-medium text-white ***"> Switch </label>

              <div className="xt-row xt-row-x-8 xt-row-y-2">
                <div className="w-full">
                  <label className="*** cursor-pointer inline-flex items-baseline ***">
                    <input
                      type="checkbox"
                      aria-label="Lorem ipsum"
                      className="xt-check xt-switch *** rounded-full bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600 ***"
                    />
                    <span className="*** ml-4 *** text-white xt-links-inverse">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="*** cursor-pointer inline-flex items-baseline ***">
                    <input
                      type="radio"
                      aria-label="Lorem ipsum"
                      className="xt-check xt-switch *** rounded-full bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600 ***"
                      name="switch-primary"
                      defaultChecked
                    />
                    <span className="*** ml-4 *** text-white xt-links-inverse">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>

                <div className="w-full">
                  <label className="*** cursor-pointer inline-flex items-baseline ***">
                    <input
                      type="radio"
                      aria-label="Lorem ipsum"
                      className="xt-check xt-switch *** rounded-full bg-primary-800 bg-opacity-25 border border-transparent transition-all checked:bg-primary-600 ***"
                      name="switch-primary"
                    />
                    <span className="*** ml-4 *** text-white xt-links-inverse">
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
