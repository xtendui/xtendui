import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="list list-2 flex-col">

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
    Lorem Ipsum
  </button>

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
    Dolor sit
  </button>

  <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
    Amet
  </button>

</nav>
`