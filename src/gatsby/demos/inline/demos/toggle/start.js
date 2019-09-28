import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<button type="button" class="btn btn--primary" id="demo--toggle--restart">
  Restart
</button>

<br>

<div class="list list-space--small align-items--center"
     data-xt-toggle="{ class: 'active class-example-1', min: 3, max: 3 }">
  <button type="button" class="btn" data-xt-group="0">
    Group 0
  </button>
  <button type="button" class="btn">
    Toggle 0
  </button>
  <button type="button" class="btn" data-xt-group="0">
    Group 0
  </button>
  <button type="button" class="btn active class-example-1">
    Toggle 1
  </button>
  <button type="button" class="btn" data-xt-group="1">
    Group 1
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0
    </div>
  </div>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 1
    </div>
  </div>
  <div class="alert toggle--block active class-example-1" data-xt-group="1">
    <div class="alert_content">
      Group 1
    </div>
  </div>
</div>
`
