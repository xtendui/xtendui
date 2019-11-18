import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center demo-source-from">
  <div class="badge badge--default">
    Lorem ipsum
  </div>
  
  <div class="badge badge--primary">
    Lorem ipsum
  </div>
  
  <div class="badge badge--success">
    Lorem ipsum
  </div>
  
  <div class="badge badge--error">
    Lorem ipsum
  </div>
</div>
`
