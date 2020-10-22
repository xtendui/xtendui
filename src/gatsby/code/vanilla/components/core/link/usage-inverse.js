import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center text-white links-inverse py-4 px-6 bg-accent-500">

  <a href="#">
    link
  </a>

  <a href="#" class="text-white text-opacity-75 underline">
    link custom
  </a>

  <button type="button" class="btn link">
    link btn
  </button>

  <div class="link">
    link class
  </div>

</div>
`
