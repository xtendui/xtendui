import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="bg-primary-500 py-5 px-6">
  <div class="list list-3 items-center text-white links-inverse">

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
      gray
    </button>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      primary
    </button>

    <button type="button" class="btn py-2.5 px-4">
      text
    </button>

    <button type="button" class="btn link">
      link
    </button>

  </div>
</div>
`
