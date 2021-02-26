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
      <label class="xt-label mb-3 ${labelDefault()}">
        Input
      </label>
      <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Input" placeholder="Input" disabled>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()}">
        File
      </label>
      <input type="file" class="xt-input rounded-md ${inputDefault()}" aria-label="File" disabled/>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()}">
        Textarea
      </label>
      <textarea class="xt-input xt-textarea rounded-md ${inputDefault()} h-24 resize-vertical" aria-label="Textarea" placeholder="Textarea" disabled></textarea>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()}">
        Select
      </label>
      <select class="xt-input xt-select rounded-md ${inputDefault()}" aria-label="Select" disabled>
        <option selected value="">Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

    <div class="w-full">
      <label class="xt-label mb-3 ${labelDefault()}">
        Select multiple
      </label>
      <select class="xt-input xt-select rounded-md ${inputDefault()}" aria-label="Select multiple" multiple disabled>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()}">
        Checkbox
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked disabled>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" disabled>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()}">
        Radio
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-usage" checked disabled>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-usage" disabled>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${labelDefault()}">
        Switch
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-switch rounded-full ${switchDefault()}" disabled>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-usage" checked disabled>
            <span class="xt-check-content"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
          </label>
        </div>

        <div class="w-full">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-usage" disabled>
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
