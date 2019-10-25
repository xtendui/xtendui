import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center gatsby_demo_source--from">
  <div class="alert alert--default">
    <div class="alert-design"></div>
    <div class="alert-content"></div>
    <div class="alert-content">
      <div class="alert-title">Lorem ipsum</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
    </div>
  </div>
</div>
`
