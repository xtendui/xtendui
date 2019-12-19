import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form">
  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-12 col-3-sm">
        <label class="form-label">
          Lorem
        </label>
      </div>
      <div class="col-12 col-9-sm">
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-12 col-3-sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
      </div>
      <div class="col-12 col-9-sm">
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-12 col-3-sm">
        <label class="form-label">
          Lorem
        </label>
      </div>
      <div class="col-12 col-9-sm">
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-12 col-3-sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
      </div>
      <div class="col-12 col-9-sm">
        <input type="text" class="form-item">
      </div>
    </div>
  </div>
</div>
`
