import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="list flex-col max-w-sm">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-t-md ${btnPrimary()}">
    Lorem ipsum
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 active ${btnPrimary()}">
    dolor sit amet
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 ${btnPrimary()}">
    consectetur adipiscing elit
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 disabled ${btnPrimary()}" aria-disabled="true">
    Lorem ipsum
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 ${btnPrimary()}">
    dolor sit amet
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-b-md ${btnPrimary()}">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
  </button>

</nav>
`
