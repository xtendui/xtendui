import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const note = require('components/snippets/classes/note').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">

  <fieldset class="my-8 xt-my-auto">
    <div class="xt-row xt-row-x-6 xt-row-y-4">

      <div class="w-full">
        <legend class="text-2xl font-bold leading-snug">
          Legend #1
        </legend>
      </div>

      <div class="w-full md:w-6/12">
        <label class="xt-label mb-3 ${labelDefault()}">
          Lorem Ipsum
        </label>
        <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
        <div class="mt-3 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>
      </div>

      <div class="w-full md:w-6/12">
        <label class="xt-label mb-3 ${labelDefault()}">
          Dolor sit amet
        </label>
        <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
      </div>

      <div class="w-full">

        <div class="xt-row xt-row-x-6 xt-row-y-4">

          <div class="w-full md:w-auto">
            <label class="xt-label mb-3 ${labelDefault()}">
              Lorem ipsum
            </label>
            <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Lorem ipsum"/>
          </div>

          <div class="w-full md:w-auto">
            <label class="xt-label mb-3 ${labelDefault()}">
              Dolor sit amet
            </label>
            <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Dolor sit amet"/>
          </div>

        </div>

        <div class="mt-3 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>

      </div>

    </div>
  </fieldset>

  <fieldset class="my-8 xt-my-auto">
    <div class="xt-row xt-row-x-6 xt-row-y-4">

      <div class="w-full">
        <legend class="text-2xl font-bold leading-snug">
          Legend #2
        </legend>
      </div>

      <div class="w-full">

        <label class="xt-label mb-3 ${labelDefault()}">
          Checkbox
        </label>

        <div class="xt-row xt-row-x-8 xt-row-y-2">

          <div class="w-full">
            <label class="xt-label-check">
              <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked>
              <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
            </label>
          </div>

          <div class="w-full">
            <label class="xt-label-check">
              <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}">
              <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
            </label>
            <div class="mt-3 ${note()}">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
            </div>
          </div>

        </div>

      </div>

      <div class="w-full">
        <div class="xt-row xt-row-x-6 xt-row-y-4">

          <div class="w-full md:w-2/12 md:self-baseline">
            <label class="xt-label ${labelDefault()}">
              Checkbox
            </label>
          </div>

          <div class="w-full md:w-10/12">
            <div class="xt-row xt-row-x-8 xt-row-y-2">

              <div class="w-full">
                <label class="xt-label-check">
                  <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked>
                  <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
                </label>
              </div>

              <div class="w-full">
                <label class="xt-label-check">
                  <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked>
                  <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
                </label>
                <div class="mt-3 ${note()}">
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div class="w-full">
        <legend class="text-2xl font-bold leading-snug">
          Legend #3
        </legend>
      </div>

      <div class="w-full">

        <label class="xt-label mb-3 ${labelDefault()}">
          Checkbox
        </label>

        <div class="xt-row xt-row-x-8 xt-row-y-2">

          <div class="w-full md:w-auto">
            <label class="xt-label-check">
              <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked>
              <span class="xt-check-content">Lorem ipsum</span>
            </label>
          </div>

          <div class="w-full md:w-auto">
            <label class="xt-label-check">
              <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}">
              <span class="xt-check-content">Lorem ipsum</span>
            </label>
          </div>

        </div>

        <div class="mt-3 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>

      </div>

      <div class="w-full">
        <button type="submit" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
          submit
        </button>
      </div>

    </div>
  </fieldset>

</form>
`
