import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center"
     data-xt-toggle="{ class: 'active demo--toggle-custom-class' }">
  <button type="button" class="btn btn--default">
    Toggle
  </button>
  <div class="note note--default note--background toggle-block">
    Target
  </div>
</div>
`
