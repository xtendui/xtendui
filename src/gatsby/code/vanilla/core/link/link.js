import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center">
  <a href="#">
    link
  </a>
  
  <a href="#" class="link-none">
    link
  </a>
</div>
`
