import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">
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

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()}">
        Checkbox
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked disabled>
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

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()}">
        Radio
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-inline-row" checked>
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-inline-row">
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()}">
        Switch
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-switch rounded-full ${switchDefault()}">
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-inline-row" checked>
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-inline-row">
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">
      <button type="submit" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
