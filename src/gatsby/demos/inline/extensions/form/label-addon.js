import path from 'path'

const dirs = path.dirname(__filename).split('/');
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
    <a class="form-label-addon">
      <span>Label Addon</span>
    </a>
  </div>

</form>
`
