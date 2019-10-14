import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
  <div class="list list--default list-space--small align-items--center"
       data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave' }">
    <a href="#toggle-with-link-0" class="btn btn--default">
      Toggle 0
    </a>
    <a href="#toggle-with-link-1" class="btn btn--default">
      Toggle 1
    </a>
    <button type="button" class="btn btn--default">
      <a href="#toggle-with-link-2" class="link--none">Toggle 2</a>
    </button>
    <button type="button" class="btn btn--default">
      <a href="#toggle-with-link-3" class="link--none">Toggle 3</a>
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
