import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center demo--toggle-timing-delay-fnc">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="0">
    Group 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="1">
    Group 1
  </button>
  <div class="alert toggle-block">
    <div class="alert-content">
      Target 0
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="0">
    <div class="alert-content">
      Group 0a
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="1">
    <div class="alert-content">
      Group 1a
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="0">
    <div class="alert-content">
      Group 0b
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="1">
    <div class="alert-content">
      Group 1b
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="0">
    <div class="alert-content">
      Group 0c
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="1">
    <div class="alert-content">
      Group 1c
    </div>
  </div>
</div>

<br>

<div class="list list--default list-space--small align-items--center demo--toggle-timing-delay-fnc--hover">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="0">
    Group 0
  </button>
  <button type="button" class="btn btn--default" data-xt-group="1">
    Group 1
  </button>
  <div class="alert toggle-block">
    <div class="alert-content">
      Target 0
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="0">
    <div class="alert-content">
      Group 0a
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="1">
    <div class="alert-content">
      Group 1a
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="0">
    <div class="alert-content">
      Group 0b
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="1">
    <div class="alert-content">
      Group 1b
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="0">
    <div class="alert-content">
      Group 0c
    </div>
  </div>
  <div class="alert toggle-block" data-xt-group="1">
    <div class="alert-content">
      Group 1c
    </div>
  </div>
</div>
`
