import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center demo-source-from">
  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn--primary">
      Toggle
    </button>
    <div class="drop drop--default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
        </div>
      </div>
    </div>
  </div>
</div>
`
