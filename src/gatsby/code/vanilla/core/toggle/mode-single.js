import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
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
  <div class="note note--default note--background toggle-block" id="toggle-unique-0">
    Target 0
  </div>
  <div class="note note--default note--background toggle-block" id="toggle-unique-1">
    Target 1
  </div>
</div>
`
