import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="group full">
  <div class="list flex--auto">
    <div class="group_inner">
      <button type="button" class="btn btn--primary">
        <span>btn 1</span>
      </button>
    </div>
    <div class="group_inner">
      <button type="button" class="btn btn--secondary">
        <span>btn 2</span>
      </button>
    </div>
    <input type="text" class="form-item">
    <div class="group_inner">
      <button type="button" class="btn btn--primary">
        <span>btn 3</span>
      </button>
    </div>
    <div class="group_inner">
      <button type="button" class="btn btn--secondary">
        <span>btn 4</span>
      </button>
    </div>
  </div>
</div>
`
