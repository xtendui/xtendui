import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default

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
        Input
      </label>
      <input type="text" class="input ${inputDefault()}" placeholder="Input">
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Disabled
      </label>
      <input type="text" class="input ${inputDefault()}" placeholder="Input" disabled>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        File
      </label>
      <input type="file" class="input ${inputDefault()}"/>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Textarea
      </label>
      <textarea class="input ${inputDefault()}" placeholder="Textarea"></textarea>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Select
      </label>
      <select class="input ${inputDefault()}">
        <option selected value="">Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Select multiple
      </label>
      <select class="input ${inputDefault()}" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <input type="checkbox" id="check-default" name="check-default">
      <label class="label ${labelDefault()}" for="check-default">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>

    <div class="w-full">
      <input type="radio" id="radio-default-0" name="radio-default">
      <label class="label ${labelDefault()}" for="radio-default-0">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-md ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
