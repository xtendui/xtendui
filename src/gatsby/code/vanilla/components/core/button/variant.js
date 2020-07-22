import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <button type="button" class="btn text-black border-gray-200 bg-gray-200 hover:border-gray-300 active:text-opacity-75 active:bg-gray-300">
    default
  </button>

  <button type="button" class="btn text-white border-accent-500 bg-accent-500 hover:border-accent-600 active:text-opacity-75 active:bg-accent-600">
    primary
  </button>

  <button type="button" class="btn active:text-opacity-75">
    text
  </button>

  <button type="button" class="btn btn-link">
    link
  </button>

</div>
`
