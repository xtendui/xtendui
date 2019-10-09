import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="group full">
  <div class="list flex--auto">
    <div class="group_inner">
      <button type="button" class="btn btn--primary">
        btn 1
      </button>
    </div>
    <div class="group_inner">
      <button type="button" class="btn btn--secondary">
        btn 2
      </button>
    </div>
    <input type="text" class="form-item">
    <div class="group_inner">
      <button type="button" class="btn btn--primary">
        btn 3
      </button>
    </div>
    <div class="group_inner">
      <button type="button" class="btn btn--secondary">
        btn 4
      </button>
    </div>
  </div>
</div>
`
