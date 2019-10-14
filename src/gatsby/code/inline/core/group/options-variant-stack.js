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
    <button type="button" class="btn btn--default">
      btn 1a
    </button>
    <button type="button" class="btn btn--default">
      btn 1b
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--default">
      btn 2a
    </button>
    <button type="button" class="btn btn--default">
      btn 2b
    </button>
  </div>
  <input type="text" class="form-item">
  <div class="group_inner">
    <button type="button" class="btn btn--default">
      btn 3a
    </button>
    <button type="button" class="btn btn--default">
      btn 3b
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--default">
      btn 4a
    </button>
    <button type="button" class="btn btn--default">
      btn 4b
    </button>
  </div>
</div>

<div class="group full group--light">
  <div class="group_inner flex--auto">
    <button type="button" class="btn btn--default">
      btn 1a
    </button>
    <button type="button" class="btn btn--default">
      btn 1b
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--default">
      btn 2a
    </button>
    <button type="button" class="btn btn--default">
      btn 2b
    </button>
  </div>
  <div class="group_inner flex--auto">
    <button type="button" class="btn btn--default">
      btn 3a
    </button>
    <button type="button" class="btn btn--default">
      btn 3b
    </button>
  </div>
  <div class="group_inner">
    <button type="button" class="btn btn--default">
      btn 4a
    </button>
    <button type="button" class="btn btn--default">
      btn 4b
    </button>
  </div>
</div>
`
