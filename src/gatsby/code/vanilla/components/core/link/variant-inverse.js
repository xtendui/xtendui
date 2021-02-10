import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="bg-accent-500 py-5 px-6">
  <div class="list list-3 items-center text-white links-inverse">

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
</div>
`
