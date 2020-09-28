import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
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
<form>
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full md:w-auto">
      <label class="form-label mb-4 ${labelDefault()}">
        Lorem ipsum
      </label>
      <input type="text" class="form-item ${inputDefault()}"/>
    </div>

    <div class="w-full md:w-auto">
      <label class="form-label mb-4 ${labelDefault()}">
        Dolor sit amet
      </label>
      <input type="text" class="form-item ${inputDefault()}"/>
    </div>

    <div class="w-full md:w-auto">
      <label class="form-label mb-4 ${labelDefault()}">
        Lorem ipsum
      </label>
      <input type="text" class="form-item ${inputDefault()}"/>
    </div>

    <div class="w-full md:w-auto">
      <label class="form-label mb-4 ${labelDefault()}">
        Dolor sit amet
      </label>
      <input type="text" class="form-item ${inputDefault()}"/>
    </div>

    <div class="w-full">

      <label class="form-label mb-4 ${labelDefault()}">
        Checkbox
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkDefault()}" checked disabled>
            <span class="ml-3">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkDefault()}">
            <span class="ml-3">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-4 ${labelDefault()}">
        Radio
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-inline-row" checked>
            <span class="ml-3">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-inline-row">
            <span class="ml-3">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-4 ${labelDefault()}">
        Switch
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-switch ${radioDefault()}">
            <span class="ml-3">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchDefault()}" name="switch-inline-row" checked>
            <span class="ml-3">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchDefault()}" name="switch-inline-row">
            <span class="ml-3">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-md ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
