import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form">
  <div class="form-group--inline">
    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item">
    </div>
  </div>
  
  <div class="form-group--inline">
    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item">
    </div>
  </div>
</div>
`
