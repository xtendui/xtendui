import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list-space--small align-items--center gatbsy_demo_source--from">
  <a href="#">
    link
  </a>
  
  <a href="#" class="link--none">
    link
  </a>
</div>
`
