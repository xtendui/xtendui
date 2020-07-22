import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <button type="button" class="btn font-bold tracking-wide leading-tight uppercase rounded-lg border border-gray-200 bg-gray-200 text-black hover:border-gray-300 active:bg-gray-300 active:text-opacity-75">
    default
  </button>

  <button type="button" class="btn font-bold tracking-wide leading-tight uppercase rounded-lg border border-accent bg-accent text-white hover:border-accent-dark active:bg-accent-dark active:text-opacity-75">
    primary
  </button>

  <button type="button" class="btn font-bold tracking-wide leading-tight uppercase rounded-lg border active:text-opacity-75">
    text
  </button>

  <button type="button" class="btn btn-link">
    link
  </button>

</div>
`
