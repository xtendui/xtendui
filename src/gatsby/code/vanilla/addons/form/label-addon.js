import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form>

  <div class="form-group">
    <label class="form-label">
      Label
    </label>
    <input type="text" class="form-item">
    <div class="form-label-addon">
      <a href="#" class="btn btn--primary btn--text">
        btn--text
      </a>
      <a href="#" class="btn btn--link">
        btn--link
      </a>
    </div>
  </div>

</form>
`
