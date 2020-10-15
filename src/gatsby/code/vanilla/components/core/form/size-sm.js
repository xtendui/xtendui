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
<form class="text-sm">
  <div class="row row-x-4 row-y-3">

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Input
      </label>
      <input type="text" class="form-item ${inputDefault()}" placeholder="Input">
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        File
      </label>
      <input type="file" class="form-item ${inputDefault()}"/>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Textarea
      </label>
      <textarea class="form-item ${inputDefault()} h-24 resize-vertical duration-150" placeholder="Textarea"></textarea>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Select
      </label>
      <select class="form-item form-select ${inputDefault()}">
        <option selected value="">Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Select multiple
      </label>
      <select class="form-item form-select ${inputDefault()}" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelDefault()}">
        Checkbox
      </label>

      <div class="row row-x-4 row-y-3">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkDefault()}" checked disabled>
            <span class="ml-2"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkDefault()}">
            <span class="ml-2"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelDefault()}">
        Radio
      </label>

      <div class="row row-x-4 row-y-3">

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-sm" checked>
            <span class="ml-2"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-sm">
            <span class="ml-2"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelDefault()}">
        Switch
      </label>

      <div class="row row-x-4 row-y-3">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-switch ${switchDefault()}">
            <span class="ml-2"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchDefault()}" name="switch-sm" checked>
            <span class="ml-2"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchDefault()}" name="switch-sm">
            <span class="ml-2"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
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
