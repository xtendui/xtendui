import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="form-default">

  <div class="form-group">
    <label class="form-label">
      Label
      <div class="form-label-addon">
        <div class="list">
          <a href="#" class="btn btn-text">
            btn-text
          </a>
          <a href="#" class="btn btn-link">
            btn-link
          </a>
        </div>
      </div>
    </label>
    <input type="text" class="form-item"/>
  </div>

  <div class="form-group">
    <label class="form-label">
      Label
      <div class="form-label-addon form-label-addon-absolute">
        <div class="list">
          <a href="#" class="btn btn-text">
            btn-text
          </a>
          <a href="#" class="btn btn-link">
            btn-link
          </a>
        </div>
      </div>
    </label>
    <input type="text" class="form-item"/>
  </div>

</form>
`
