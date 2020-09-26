import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const labelPrimary = require('components/snippets/classes/label-primary').default
const inputPrimary = require('components/snippets/classes/input-primary').default

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
      <label class="label mb-3 ${labelPrimary()}">
        Input
      </label>
      <input type="text" class="input ${inputPrimary()}" placeholder="Input">
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelPrimary()}">
        Disabled
      </label>
      <input type="text" class="input ${inputPrimary()}" placeholder="Input" disabled>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelPrimary()}">
        File
      </label>
      <input type="file" class="input ${inputPrimary()}"/>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelPrimary()}">
        Textarea
      </label>
      <textarea class="input ${inputPrimary()}" placeholder="Textarea"></textarea>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelPrimary()}">
        Select
      </label>
      <select class="input ${inputPrimary()}">
        <option selected value="">Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <label class="label mb-3 ${labelPrimary()}">
        Select multiple
      </label>
      <select class="input ${inputPrimary()}" multiple>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div class="w-full">
      <input type="checkbox" id="check-inverse" name="check-inverse">
      <label class="label ${labelPrimary()}" for="check-inverse">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>

    <div class="w-full">
      <input type="radio" id="radio-inverse-0" name="radio-inverse">
      <label class="label ${labelPrimary()}" for="radio-inverse-0">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-md ${btnDefault()}">
        submit
      </button>
    </div>

  </div>
</form>
`
