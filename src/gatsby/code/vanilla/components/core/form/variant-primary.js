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
<form class="demo--form-variant-primary py-4 px-6 bg-accent-500">
  <div class="row row-x-4 row-y-3">

    <div class="w-full">
      <label class="form-label mb-4 ${labelPrimary()}">
        Input
      </label>
      <input type="text" class="form-item ${inputPrimary()}" placeholder="Input">
    </div>

    <div class="w-full">
      <label class="form-label mb-4 ${labelPrimary()}">
        Disabled
      </label>
      <input type="text" class="form-item ${inputPrimary()}" placeholder="Input" disabled>
    </div>

    <div class="w-full">
      <label class="form-label mb-4 ${labelPrimary()}">
        File
      </label>
      <input type="file" class="form-item ${inputPrimary()}"/>
    </div>

    <div class="w-full">
      <label class="form-label mb-4 ${labelPrimary()}">
        Textarea
      </label>
      <textarea class="form-item ${inputPrimary()} h-24 resize-vertical duration-150" placeholder="Textarea"></textarea>
    </div>

    <div class="w-full">
      <label class="form-label mb-4 ${labelPrimary()}">
        Select
      </label>
      <select class="form-item form-select form-select-primary ${inputPrimary()}">
        <option selected value="">Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <label class="form-label mb-4 ${labelPrimary()}">
        Select multiple
      </label>
      <select class="form-item form-select form-select-primary ${inputPrimary()}" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="form-label mb-4 ${labelPrimary()}">
        Checkbox
      </label>

      <div class="row row-x-4 row-y-3">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkPrimary()}" checked disabled>
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkPrimary()}">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-4 ${labelPrimary()}">
        Radio
      </label>

      <div class="row row-x-4 row-y-3">

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioPrimary()}" name="radio-primary" checked>
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioPrimary()}" name="radio-primary">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-4 ${labelPrimary()}">
        Switch
      </label>

      <div class="row row-x-4 row-y-3">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-switch ${radioPrimary()}">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchPrimary()}" name="switch-primary" checked>
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchPrimary()}" name="switch-primary">
            <span class="ml-3 text-white links-inverse"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
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
