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
    <div class="form-group-inline">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
  </div>

  <div class="form-group-inline">
    <div class="form-group">
      <div class="form-group-inline">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="form-group">
      <div class="form-group-inline">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>
</form>
`
