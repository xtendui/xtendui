import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
  <div class="list list--default list-space--small align-items--center demo-source-from">
    <button type="button" class="btn btn--default"
            data-xt-toggle="{ targets: '#toggle-unique-0' }">
      Toggle 0
    </button>
    <button type="button" class="btn btn--default"
            data-xt-toggle="{ targets: '#toggle-unique-1' }">
      Toggle 1
    </button>
    <div class="alert toggle-block" id="toggle-unique-0">
      <div class="alert-content">
        Target 0
      </div>
    </div>
    <div class="alert toggle-block" id="toggle-unique-1">
      <div class="alert-content">
        Target 1
      </div>
    </div>
  </div>
`
