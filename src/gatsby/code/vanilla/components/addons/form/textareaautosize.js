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
<form class="text-sm">

  <div class="row row-x-6 row-y-4">

    <div class="w-full">
      <label class="form-label mb-3 ${labelDefault()}">
        Textarea autosize
      </label>
      <textarea class="form-item rounded-md ${inputDefault()} overflow-hidden resize-none" aria-label="Textarea autosize" data-xt-textareaautosize></textarea>
    </div>

  </div>

</form>
`
