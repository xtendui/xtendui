import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const note = require('components/snippets/classes/note').default

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
        Lorem ipsum
      </label>
      <input type="text" class="input ${inputDefault()}" placeholder="Input">
      <div class="${note()}">
        Lorem ipsum dolor sit amet.
      </div>
    </div>

    <div class="w-full">
      <label class="label mb-4 ${labelDefault()}">
        Dolor sit amet
      </label>
      <input type="text" class="input ${inputDefault()}" placeholder="Input" disabled>
      <div class="${note()}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam purus, ultricies finibus tristique at, ullamcorper nec dui. Quisque et varius sem. Phasellus luctus tincidunt molestie. Duis eget pretium sem, at eleifend odio. Morbi in augue et dolor dictum sollicitudin ut nec ligula.
      </div>
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-medium ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
