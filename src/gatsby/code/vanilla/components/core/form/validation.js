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
  <div class="row row-x-3 row-y-2">

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Custom constrain
      </label>
      <input type="text" class="form-item ${inputDefault()} demo--custom-constrain" aria-label="Custom constrain" placeholder="Custom constrain" required>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Email
      </label>
      <input type="email" class="form-item ${inputDefault()}" aria-label="Email" placeholder="Email" required>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Number
      </label>
      <input type="number" class="form-item ${inputDefault()}" aria-label="Number" placeholder="Number" required min="1" max="10">
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Letters
      </label>
      <input type="text" class="form-item ${inputDefault()}" aria-label="Letters" placeholder="Letters" required pattern="[A-Za-z]+">
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        File
      </label>
      <input type="file" class="form-item ${inputDefault()}" aria-label="File" required/>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Textarea
      </label>
      <textarea class="form-item ${inputDefault()} h-24 resize-vertical" aria-label="Textarea" placeholder="Textarea" required></textarea>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Select
      </label>
      <select class="form-item form-select ${inputDefault()}" aria-label="Select" required>
        <option selected value="">Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Select multiple
      </label>
      <select class="form-item form-select ${inputDefault()}" aria-label="Select multiple" multiple required>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Checkbox
      </label>

      <div class="row row-x-4 row-y-1">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkDefault()}" required disabled>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-checkbox ${checkDefault()}" required>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Radio
      </label>

      <div class="row row-x-4 row-y-1">

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-validation" required>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${radioDefault()}" name="radio-validation">
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="form-label mb-3 ${labelDefault()} form-label-required">
        Switch
      </label>

      <div class="row row-x-4 row-y-1">

        <div class="w-full">
          <label class="form-label-check">
            <input type="checkbox" class="form-check form-switch ${switchDefault()}" required>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchDefault()}" name="switch-validation" required>
            <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-switch ${switchDefault()}" name="switch-validation">
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
