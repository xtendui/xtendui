import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo--toggle-js" id="demo--toggle-js-0">
  <button type="button" class="btn">
    Toggle 0
  </button>
  <button type="button" class="btn">
    Toggle 1
  </button>
  <button type="button" class="btn">
    Toggle 2
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

<div class="list list-space--small align-items--center demo--toggle-js" id="demo--toggle-js-1">
  <button type="button" class="btn">
    Toggle 0
  </button>
  <button type="button" class="btn">
    Toggle 1
  </button>
  <button type="button" class="btn">
    Toggle 2
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
