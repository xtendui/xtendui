import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space-small align-items-center text-inverse" style="padding: 1rem 1.5rem; background: #7567f8;">
  <a href="#">
    link
  </a>
  
  <a href="#" class="link-none">
    link
  </a>
</div>
`
