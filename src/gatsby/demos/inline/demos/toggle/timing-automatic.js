import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center list--toggle-automatic" data-xt-toggle>
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 1</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 2</span>
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
</div>

<br>

<div class="list list-space--small align-items--center list--toggle-automatic"
     data-xt-toggle='{"on": "mouseenter", "off": "mouseleave"}'>
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 1</span>
  </button>
  <button type="button" class="btn">
    <span>Toggle 2</span>
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
</div>
`
