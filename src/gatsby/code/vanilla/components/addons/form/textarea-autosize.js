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

  <div class="row row-x-3 row-y-2">

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Textarea autosize
      </label>
      <textarea class="form-item rounded-md ${inputDefault()} overflow-hidden resize-none" data-xt-textarea-autosize></textarea>
    </div>

  </div>

</form>
`
