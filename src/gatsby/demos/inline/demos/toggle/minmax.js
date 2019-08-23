import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center"
     data-xt-toggle='{"min": 2, "max": 2}'>
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 1</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 2</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 3</span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 1
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 2
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 3
    </div>
  </div>
</div>
`
