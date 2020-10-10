import path from 'path'
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const btnPrimaryGroup = require('components/snippets/classes/btn-primary-group').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="group w-full" role="toolbar">

  <div class="group-inner mr-auto">
    <button type="button" class="btn btn-md rounded-md mr-2 ${btnDefaultGroup()}">
      Back
    </button>
    <button type="button" class="btn btn-md rounded-md mr-2 ${btnDefaultGroup()}">
      Clear
    </button>
  </div>

  <button type="button" class="btn btn-md rounded-md ${btnPrimaryGroup()}">
    Submit
  </button>

</div>
`
