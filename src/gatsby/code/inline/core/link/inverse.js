import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center gatsby_demo_source--from">
  <div class="list list--default list-space--small align-items--center text--inverse" style="padding: 1rem 1.5rem; background: #7567f8;">
    <a href="#">
      link
    </a>
    
    <a href="#" class="link--none">
      link
    </a>
  </div>
</div>
`
