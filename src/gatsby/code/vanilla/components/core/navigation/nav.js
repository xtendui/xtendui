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

  <button type="button" class="btn btn-md rounded-t-md ${btnPrimary()}">
    Lorem ipsum
  </button>

  <button type="button" class="btn btn-md active ${btnPrimary()}" aria-selected="true">
    dolor sit amet
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    consectetur adipiscing elit
  </button>

  <button type="button" class="btn btn-md disabled ${btnPrimary()}" aria-disabled="true">
    Lorem ipsum
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    dolor sit amet
  </button>

  <button type="button" class="btn btn-md rounded-b-md ${btnPrimary()}">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
  </button>

</nav>
`
