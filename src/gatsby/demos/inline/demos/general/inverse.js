import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo_source--from">
  <div class="list list-space--small align-items--center text--inverse" style="padding: 0.5rem 1rem; background: #7367F0;">
    <a href="#">
      link
    </a>
    
    <a href="#" class="link--none">
      link
    </a>
  </div>
</div>
`
