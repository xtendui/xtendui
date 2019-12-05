import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="group full">
  <div class="list list--default flex-auto">
    <div class="group-inner">
      <button type="button" class="btn btn--primary">
        Lorem
      </button>
      <button type="button" class="btn btn--default">
        ipsum
      </button>
    </div>
    <input type="text" class="form-item form-item--default" />
  </div>
</div>
`
