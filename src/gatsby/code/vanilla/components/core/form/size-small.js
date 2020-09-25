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
<div class="form-small">
  <div class="row row-space-2">

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Input
      </label>
      <input type="text" class="input ${inputDefault()}" placeholder="Input">
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
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
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
      <input type="checkbox" id="check-block-small" checked>
      <label class="label ${labelDefault()}" for="check-block-small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </label>
    </div>

    <div class="w-full">
      <input type="radio" id="radio-block-small-0" name="radio-block-small" checked>
      <label class="label ${labelDefault()}" for="radio-block-small-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </label>
    </div>

    <div class="w-full">
      <input type="radio" id="radio-block-small-1" name="radio-block-small">
      <label class="label ${labelDefault()}" for="radio-block-small-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </label>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Input
      </label>
      <input type="text" class="input ${inputDefault()}" placeholder="Input">
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-medium ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</div>
`
