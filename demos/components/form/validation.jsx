import React, { useRef, useCallback } from 'react'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--form-validation-react" ref={ref}>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Custom constrain </label>
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300 input--constrains"
              aria-label="Custom constrain"
              placeholder="Custom constrain"
              required
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Email </label>
            <input
              type="email"
              className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Email"
              placeholder="Email"
              required
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Number </label>
            <input
              type="number"
              className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Number"
              placeholder="Number"
              required
              min="1"
              max="10"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Letters </label>
            <input
              type="text"
              className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Letters"
              placeholder="Letters"
              required
              pattern="[A-Za-z]+"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> File </label>
            <input
              type="file"
              className="block w-full rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="File"
              required
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Textarea </label>
            <textarea
              className="block w-full h-20 max-h-48 rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300 h-24 resize-vertical"
              aria-label="Textarea"
              placeholder="Textarea"
              required></textarea>
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Select </label>
            <select
              className="block w-full xt-select rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Select"
              required>
              <option defaultValue="">Select an option</option>
              <option>Test</option>
              <option>Test</option>
              <option>Test</option>
            </select>
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Select multiple </label>
            <select
              className="block w-full xt-select rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Select multiple"
              multiple
              required>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Checkbox </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    required
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
                    required
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
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    name="radio-validation"
                    required
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
                    name="radio-validation"
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
            <label className="flex mb-3 font-semibold text-gray-900 xt-label-required"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                    required
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
                    name="switch-validation"
                    required
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
                    name="switch-validation"
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

/* mount */

const mount = ({ ref }) => {
  const unmountValidation = mountValidation({ ref })

  // unmount

  return () => {
    unmountValidation()
  }
}

/* mountValidation */

const mountValidation = ({ ref }) => {
  // vars

  const input = ref.querySelector('.input--constrains')

  // validate

  const validate = () => {
    const constraints = ['^(CH-)?\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950']
    const constraint = new RegExp(constraints[0], '')
    if (constraint.test(input.value)) {
      input.setCustomValidity('')
    } else {
      input.setCustomValidity(constraints[1])
    }
  }

  input.addEventListener('input', validate)
  input.addEventListener('change', validate)

  // unmount

  return () => {}
}
