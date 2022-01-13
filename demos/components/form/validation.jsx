import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/form'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--form-validation-react" ref={ref}>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div
            className="xt-row xt-row-x-6 xt-row-y-4 *** flex-auto ***"
            data-node-required-one="Fill one of the fields">
            <div className="w-full md:w-6/12">
              <label className="block mb-1 font-medium text-gray-700 label-required-one"> Required one </label>
              <input
                type="text"
                className="block w-full py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none"
                aria-label="Required one"
                placeholder="Required one"
              />
            </div>

            <div className="w-full md:w-6/12">
              <label className="block mb-1 font-medium text-gray-700 label-required-one"> Required one </label>
              <input
                type="text"
                className="block w-full py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none"
                aria-label="Required one"
                placeholder="Required one"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Custom constrain </label>
            <input
              type="text"
              className="block w-full py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none input--constrains"
              aria-label="Custom constrain"
              placeholder="Custom constrain"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Email </label>
            <input
              type="email"
              className="block w-full py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none valid-submit:!border-green-200 invalid-submit:!border-red-200"
              aria-label="Email"
              placeholder="Email"
              required
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Number </label>
            <input
              type="number"
              className="block w-full py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none"
              aria-label="Number"
              placeholder="Number"
              required
              min="1"
              max="10"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Letters </label>
            <input
              type="text"
              className="block w-full py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none"
              aria-label="Letters"
              placeholder="Letters"
              required
              pattern="[A-Za-z]+"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> File </label>
            <input
              type="file"
              className="block w-full py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none"
              aria-label="File"
              required
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Textarea </label>
            <textarea
              className="block w-full h-20 max-h-48 py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none resize-vertical"
              aria-label="Textarea"
              placeholder="Textarea"
              required></textarea>
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Select </label>
            <select
              className="block w-full xt-select py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none"
              aria-label="Select"
              required>
              <option defaultValue="">Select an option</option>
              <option>Test</option>
              <option>Test</option>
              <option>Test</option>
            </select>
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Select multiple </label>
            <select
              className="block w-full xt-select py-2.5 text-gray-900 placeholder-black placeholder-opacity-75 border-b-2 border-gray-100 bg-transparent transition focus:border-gray-200 focus:outline-none *** invalid-submit ***"
              aria-label="Select multiple"
              multiple
              required>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="mt-3 text-red-500 text-xs leading-snug *** custom-backend-error ***">
              Backend custom error it scrolls to this on page load
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Checkbox </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    required
                    disabled
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    required
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Radio </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-radio rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    name="radio-validation"
                    required
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-radio rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    name="radio-validation"
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 label-required"> Switch </label>

            <div className="xt-row xt-row-x-8 xt-row-y-2">
              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="checkbox"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    required
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    name="switch-validation"
                    required
                  />
                  <span className="ml-4">
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </span>
                </label>
              </div>

              <div className="w-full">
                <label className="cursor-pointer inline-flex items-baseline">
                  <input
                    type="radio"
                    aria-label="Lorem ipsum"
                    className="xt-check xt-switch rounded-full bg-gray-200 border border-transparent transition-all defaultChecked:bg-primary-500"
                    name="switch-validation"
                  />
                  <span className="ml-4">
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

/* mountScrollToError */

const mountScrollToError = ({ ref }) => {
  // vars

  let el = ref.querySelector('.custom-backend-error')

  // init

  if (el) {
    el = el.parentNode
    const rect = el.getBoundingClientRect()
    window.scrollTo(window.scrollX, rect.top - Xt.innerHeight * Xt.formScrollWindowFactor)
  }

  // unmount

  return () => {}
}

/* mountValidationRequiredOne */

const mountValidationRequiredOne = ({ ref }) => {
  // vars

  const container = ref.querySelector('[data-node-required-one]')
  const inputs = container.querySelectorAll('input')

  // validate

  const validate = e => {
    // skip revalidate
    if (!e?.detail?.skip) {
      let passed = false
      for (const input of inputs) {
        if (input.value && input.value !== '') {
          passed = true
          break
        }
      }
      for (const input of inputs) {
        if (passed) {
          input.setCustomValidity('')
        } else {
          input.setCustomValidity(container.getAttribute('data-node-required-one'))
        }
        // revalidate
        input.dispatchEvent(new CustomEvent('change', { detail: { skip: true } }))
      }
    }
  }

  for (const input of inputs) {
    input.addEventListener('input', validate)
    input.addEventListener('change', validate)
    validate()
  }

  // unmount

  return () => {}
}

/* mountValidationCustom */

const mountValidationCustom = ({ ref }) => {
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
  validate()

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountScrollToError = mountScrollToError({ ref })
  const unmountValidationRequiredOne = mountValidationRequiredOne({ ref })
  const unmountValidationCustom = mountValidationCustom({ ref })

  // unmount

  return () => {
    unmountScrollToError()
    unmountValidationRequiredOne()
    unmountValidationCustom()
  }
}
