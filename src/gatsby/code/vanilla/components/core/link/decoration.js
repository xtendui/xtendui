import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <a href="#" class="link link-none">
    link none
  </a>

  <div class="btn link-underline">
    link underline btn
  </div>

</div>
`
