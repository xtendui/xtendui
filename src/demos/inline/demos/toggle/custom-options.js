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
<div data-xt-toggle='{"elements": ".list > .btn", "targets": ".list > .custom--toggle"}'>
  <div class="list list-space--small align-items--center">
    <button type="button" class="btn">
      <span>Toggle 0</span>
    </button>
    <button type="button" class="btn">
      <span>Toggle 1</span>
    </button>
    <button type="button" class="btn">
      <span>Toggle 2</span>
    </button>
    <div class="alert custom--toggle">
      <div class="alert_content">
        Target 0
      </div>
    </div>
    <div class="alert custom--toggle">
      <div class="alert_content">
        Target 1
      </div>
    </div>
    <div class="alert custom--toggle">
      <div class="alert_content">
        Target 2
      </div>
    </div>
  </div>
</div>
`
