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

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Lorem ipsum
      </label>
      <input type="text" class="input ${inputDefault()}"/>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Dolor sit amet
      </label>
      <input type="text" class="input ${inputDefault()}"/>
    </div>

    <div class="w-full md:w-6/12">
      <label class="label mb-4 ${labelDefault()}">
        Lorem Ipsum
      </label>
      <input type="text" class="input ${inputDefault()}"/>
    </div>

    <div class="w-full md:w-6/12">
      <label class="label mb-4 ${labelDefault()}">
        Dolor sit amet
      </label>
      <input type="text" class="input ${inputDefault()}"/>
    </div>

    <div class="w-full">

      <label class="label mb-4 ${labelDefault()}">
        Checkbox
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full">
          <label class="label-check">
            <input type="checkbox" class="checkbox ${checkDefault()}" checked disabled>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="label-check">
            <input type="checkbox" class="checkbox ${checkDefault()}">
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="label mb-4 ${labelDefault()}">
        Radio
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-6/12">
          <label class="label-check">
            <input type="radio" class="radio ${radioDefault()}" name="radio-row" checked>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full md:w-6/12">
          <label class="label-check">
            <input type="radio" class="radio ${radioDefault()}" name="radio-row">
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="label mb-4 ${labelDefault()}">
        Switch
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full">
          <label class="label-check">
            <input type="checkbox" class="switch ${radioDefault()}">
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full md:w-6/12">
          <label class="label-check">
            <input type="radio" class="switch ${switchDefault()}" name="switch-row" checked>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full md:w-6/12">
          <label class="label-check">
            <input type="radio" class="switch ${switchDefault()}" name="switch-row">
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
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
