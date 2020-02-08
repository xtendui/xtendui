import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<h4>Line</h4>

<form class="form-default">
  <div class="group group-number group-number-line">
    <div class="group-inner">
      <button type="button" class="btn btn-default group-number-remove">
        -
      </button>
    </div>
    <div class="group-inner">
      <input type="number" class="form-item" value="3" min="1" max="100" step="2">
    </div>
    <div class="group-inner">
      <button type="button" class="btn btn-default group-number-add">
        +
      </button>
    </div>
  </div>
</form>

<h4>Stack</h4>

<form class="form-default">
  <div class="group group-number group-number-stack">
    <div class="group-inner">
      <input type="number" class="form-item" value="3" min="1" max="100" step="2">
    </div>
    <div class="group-inner">
      <button type="button" class="btn btn-default btn-short btn-narrow group-number-add">
        +
      </button>
      <button type="button" class="btn btn-default btn-short btn-narrow group-number-remove">
        -
      </button>
    </div>
  </div>
</form>
`
