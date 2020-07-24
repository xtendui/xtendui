import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <button type="button" class="btn text-sm text-black px-4 py-2 border-gray-200 bg-gray-200 hover:border-gray-300 active:text-opacity-75 active:bg-gray-300">
    default
  </button>

  <button type="button" class="btn text-sm text-white px-4 py-2 border-accent-500 bg-accent-500 hover:border-accent-600 active:text-opacity-75 active:bg-accent-600">
    primary
  </button>

  <button type="button" class="btn text-sm px-4 py-2 active:text-opacity-75">
    text
  </button>

  <button type="button" class="btn text-sm px-4 py-2">
    link
  </button>

</div>
`
