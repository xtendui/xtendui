import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="group full">
  <div class="list list--default flex-auto">
    <div class="group-inner">
      <button type="button" class="btn btn--primary">
        btn 1a
      </button>
      <button type="button" class="btn btn--primary">
        btn 1b
      </button>
    </div>
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        btn 2a
      </button>
      <button type="button" class="btn btn--default">
        btn 2b
      </button>
    </div>
    <input type="text" class="form-item form-item--default">
    <div class="group-inner">
      <button type="button" class="btn btn--primary">
        btn 3a
      </button>
      <button type="button" class="btn btn--primary">
        btn 3b
      </button>
    </div>
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        btn 4a
      </button>
      <button type="button" class="btn btn--default">
        btn 4b
      </button>
    </div>
  </div>
</div>
`
