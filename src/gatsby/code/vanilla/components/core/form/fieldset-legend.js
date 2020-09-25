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

  <fieldset>

    <legend>Legend #1</legend>

    <div class="row row-space-x-4 row-space-y-3">

      <div class="w-full">
        <label class="label mb-4 ${labelDefault()}">
          Lorem ipsum
        </label>
        <input type="text" class="input ${inputDefault()}" placeholder="Input">
      </div>

      <div class="w-full">
        <label class="label mb-4 ${labelDefault()}">
          Dolor sit amet
        </label>
        <input type="text" class="input ${inputDefault()}" placeholder="Input" disabled>
      </div>

    </div>

  </fieldset>

  <fieldset>

    <legend>Legend #2</legend>

    <div class="row row-space-x-4 row-space-y-3">

      <div class="w-full">
        <label class="label mb-4 ${labelDefault()}">
          Lorem ipsum
        </label>
        <input type="text" class="input ${inputDefault()}" placeholder="Input">
      </div>

      <div class="w-full">
        <label class="label mb-4 ${labelDefault()}">
          Dolor sit amet
        </label>
        <input type="text" class="input ${inputDefault()}" placeholder="Input" disabled>
      </div>

      <div class="w-full">
        <button type="submit" class="btn btn-medium ${btnPrimary()}">
          submit
        </button>
      </div>

    </div>

  </fieldset>

</form>
`
