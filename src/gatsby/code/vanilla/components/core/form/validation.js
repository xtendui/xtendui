import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const labelDefault = require('components/snippets/classes').labelDefault
const inputDefault = require('components/snippets/classes').inputDefault
const checkDefault = require('components/snippets/classes').checkDefault
const radioDefault = require('components/snippets/classes').radioDefault
const switchDefault = require('components/snippets/classes').switchDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">
  <div class="xt-row xt-row-x-6 xt-row-y-4">

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Custom constrain
      </label>
      <input type="text" class="xt-input rounded-md ${inputDefault()} demo--form-constrain" aria-label="Custom constrain" placeholder="Custom constrain" required>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Email
      </label>
      <input type="email" class="xt-input rounded-md ${inputDefault()}" aria-label="Email" placeholder="Email" required>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Number
      </label>
      <input type="number" class="xt-input rounded-md ${inputDefault()}" aria-label="Number" placeholder="Number" required min="1" max="10">
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Letters
      </label>
      <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Letters" placeholder="Letters" required pattern="[A-Za-z]+">
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        File
      </label>
      <input type="file" class="xt-input rounded-md ${inputDefault()}" aria-label="File" required/>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Textarea
      </label>
      <textarea class="xt-input xt-textarea rounded-md ${inputDefault()} h-24 resize-vertical" aria-label="Textarea" placeholder="Textarea" required></textarea>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Select
      </label>
      <select class="xt-input xt-select rounded-md ${inputDefault()}" aria-label="Select" required>
        <option selected value="">Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Select multiple
      </label>
      <select class="xt-input xt-select rounded-md ${inputDefault()}" aria-label="Select multiple" multiple required>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Checkbox
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" required disabled>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" required>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Radio
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-validation" required>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-validation">
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()} xt-label-required">
        Switch
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-switch rounded-full ${switchDefault()}" required>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-validation" required>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-validation">
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">
      <button type="submit" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
