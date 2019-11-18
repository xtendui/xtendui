import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center"
  data-xt-toggle="{ elements: ':scope > .btn', targets: ':scope > .demo--toggle-custom-options' }">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default">
    Toggle 1
  </button>
  <button type="button" class="btn btn--default">
    Toggle 2
  </button>
  <div class="note note--default note--background demo--toggle-custom-options">
    Target 0
  </div>
  <div class="note note--default note--background demo--toggle-custom-options">
    Target 1
  </div>
  <div class="note note--default note--background demo--toggle-custom-options">
    Target 2
  </div>
</div>
`
