import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: true,
  js: false,
}

demo.htmlSource = `
<div class="list list-space--small align-items--center"
     data-xt-toggle='{"class": "active class-example-0"}'>
  <button type="button" class="btn">
    <span>Toggle</span>
  </button>
  <div class="alert toggle--block" id="alert-example">
    <div class="alert_content">
      Target
    </div>
  </div>
</div>
`
