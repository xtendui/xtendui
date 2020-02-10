import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-default">
  <div class="form-group">
    <div class="group full">
      <div class="group-inner">
        <button type="button" class="btn btn-primary">
          Lorem
        </button>
      </div>
      <div class="group-inner">
        <button type="button" class="btn btn-default">
          ipsum
        </button>
      </div>
      <div class="group-inner flex-auto">
        <input type="text" class="form-item" />
      </div>
    </div>
  </div>
</div>
`
