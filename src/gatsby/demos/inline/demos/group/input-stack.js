import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="group">
  <div class="group_inner">
    <button type="button" class="btn btn--primary">
      btn 1a
    </button>
    <button type="button" class="btn btn--primary">
      btn 1b
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--secondary">
      btn 2a
    </button>
    <button type="button" class="btn btn--secondary">
      btn 2b
    </button>
  </div>
  <input type="text" class="form-item">
  <div class="group_inner">
    <button type="button" class="btn btn--primary">
      btn 3a
    </button>
    <button type="button" class="btn btn--primary">
      btn 3b
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--secondary">
      btn 4a
    </button>
    <button type="button" class="btn btn--secondary">
      btn 4b
    </button>
  </div>
</div>
`
