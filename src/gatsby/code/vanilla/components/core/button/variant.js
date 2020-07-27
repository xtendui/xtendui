import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <button type="button" class="btn">
    btn
  </button>
  <button type="button" class="btn text-sm text-black border-gray-300 bg-gray-300 hover:border-gray-400 active:text-opacity-75 active:bg-gray-400">
    btn-default
  </button>
  <button type="button" class="btn text-white border-accent-500 bg-accent-500 hover:border-accent-600 active:text-opacity-75 active:bg-accent-600">
    btn-primary
  </button>

  <button type="button" class="btn btn-link">
    btn-link
  </button>

</div>
`
