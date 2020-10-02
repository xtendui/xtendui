import path from 'path'
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
      <label class="form-label mb-4 ${labelDefault()}">
        Textarea autosize
      </label>
      <textarea class="form-item ${inputDefault()} overflow-hidden resize-none duration-none" data-xt-textarea-autosize></textarea>
    </div>

  </div>

</form>
`
