import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center text-inverse"
  style="padding: 1rem 1.5rem; background: #0078ff;">

  <button type="button" class="btn">
    btn
  </button>

  <button type="button" class="btn btn-default">
    default
  </button>

  <button type="button" class="btn btn-primarygit a">
    primary
  </button>

  <button type="button" class="btn link">
    link
  </button>

</div>
`
