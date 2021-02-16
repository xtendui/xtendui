import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnText = require('components/snippets/classes/btn-text').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()} disabled" aria-disabled="true">
    Gray
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()} disabled" aria-disabled="true">
    Primary
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnText()} disabled" aria-disabled="true">
    Text
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md link disabled" aria-disabled="true">
    link
  </button>

</div>
`
