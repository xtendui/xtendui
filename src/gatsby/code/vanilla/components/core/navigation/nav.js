import path from 'path'
const btnPrimaryGroup = require('components/snippets/classes/btn-primary-group').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="list flex-col whitespace-normal max-w-full" style="width: 20rem">

  <button type="button" class="btn btn-md rounded-t-md ${btnPrimaryGroup()}">
    Lorem ipsum
  </button>

  <button type="button" class="btn btn-md active ${btnPrimaryGroup()}" aria-selected="true">
    dolor sit amet
  </button>

  <button type="button" class="btn btn-md ${btnPrimaryGroup()}">
    consectetur adipiscing elit
  </button>

  <button type="button" class="btn btn-md disabled ${btnPrimaryGroup()}" aria-disabled="true">
    Lorem ipsum
  </button>

  <button type="button" class="btn btn-md ${btnPrimaryGroup()}">
    dolor sit amet
  </button>

  <button type="button" class="btn btn-md rounded-b-md ${btnPrimaryGroup()}">
    Lorem ipsum dolor sit amet consectetur adipiscing elit
  </button>

</nav>
`
