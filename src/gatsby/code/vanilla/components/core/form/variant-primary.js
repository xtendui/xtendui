import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const labelPrimary = require('components/snippets/classes/label-primary').default
const inputPrimary = require('components/snippets/classes/input-primary').default
const checkPrimary = require('components/snippets/classes/form-check-primary').default
const radioPrimary = require('components/snippets/classes/form-radio-primary').default
const switchPrimary = require('components/snippets/classes/form-switch-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form style="padding: 1rem 1.5rem; background: #0078ff;">
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full">
      <label class="label mb-4 ${labelPrimary()}">
        Input
      </label>
      <input type="text" class="input ${inputPrimary()}" placeholder="Input">
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelPrimary()}">
        Disabled
      </label>
      <input type="text" class="input ${inputPrimary()}" placeholder="Input" disabled>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelPrimary()}">
        File
      </label>
      <input type="file" class="input ${inputPrimary()}"/>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelPrimary()}">
        Textarea
      </label>
      <textarea class="input ${inputPrimary()}" placeholder="Textarea"></textarea>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelPrimary()}">
        Select
      </label>
      <select class="input select select-primary ${inputPrimary()}">
        <option selected value="">Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelPrimary()}">
        Select multiple
      </label>
      <select class="input select select-primary ${inputPrimary()}" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="label mb-4 ${labelPrimary()}">
        Checkbox
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full">
          <label class="label-check">
            <input type="checkbox" class="checkbox ${checkPrimary()}" checked disabled>
            <span class="ml-3 text-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="label-check">
            <input type="checkbox" class="checkbox ${checkPrimary()}">
            <span class="ml-3 text-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="label mb-4 ${labelPrimary()}">
        Radio
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full">
          <label class="label-check">
            <input type="radio" class="radio ${radioPrimary()}" name="radio-primary" checked>
            <span class="ml-3 text-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="label-check">
            <input type="radio" class="radio ${radioPrimary()}" name="radio-primary">
            <span class="ml-3 text-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="label mb-4 ${labelPrimary()}">
        Switch
      </label>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full">
          <label class="label-check">
            <input type="checkbox" class="switch ${radioPrimary()}">
            <span class="ml-3 text-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="label-check">
            <input type="radio" class="switch ${switchPrimary()}" name="switch-primary" checked>
            <span class="ml-3 text-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="label-check">
            <input type="radio" class="switch ${switchPrimary()}" name="switch-primary">
            <span class="ml-3 text-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-md ${btnDefault()}">
        submit
      </button>
    </div>

  </div>
</form>
`
