import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center text-inverse"
  style="padding: 1rem 1.5rem; background: #0078ff;">

  <a href="#">
    link
  </a>

  <button type="button" class="btn link">
    link btn
  </button>

  <div class="link">
    link class
  </div>

</div>
`
