import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="group full group--default">
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      btn 1
    </button>
  </div>
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      btn 2
    </button>
  </div>
  <input type="text" class="form-item form-item--default">
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      btn 3
    </button>
  </div>
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      btn 4
    </button>
  </div>
</div>

<div class="group full group--default">
  <div class="group-inner flex--auto">
    <button type="button" class="btn btn--default">
      btn 1
    </button>
  </div>
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      btn 2
    </button>
  </div>
  <div class="group-inner flex--auto">
    <button type="button" class="btn btn--default">
      btn 3
    </button>
  </div>
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      btn 4
    </button>
  </div>
</div>
`
