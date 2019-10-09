import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="group full group--light">
  <div class="group_inner">
    <button type="button" class="btn btn--secondary">
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
    <button type="button" class="btn btn--secondary">
      btn 3
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--secondary">
      btn 4
    </button>
  </div>
</div>

<div class="group full group--light">
  <div class="group_inner flex--auto">
    <button type="button" class="btn btn--secondary">
      btn 1
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--secondary">
      btn 2
    </button>
  </div>
  <div class="group_inner flex--auto">
    <button type="button" class="btn btn--secondary">
      btn 3
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--secondary">
      btn 4
    </button>
  </div>
</div>
`
