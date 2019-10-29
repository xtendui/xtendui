import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
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
