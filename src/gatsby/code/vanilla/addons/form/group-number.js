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

<div class="group group-number group-number-line group-default">
    <div class="group-inner">
      <button type="button" class="btn btn-default group-number-remove">
        -
      </button>
    </div>
  <input type="number" class="form-item" value="3" min="1" max="100" step="2">
  <div class="group-inner">
      <button type="button" class="btn btn-default group-number-add">
        +
      </button>
    </div>
</div>

<h4>Stack</h4>

<div class="group group-number group-number-stack group-default">
  <input type="number" class="form-item" value="3" min="1" max="100" step="2">
  <div class="group-inner">
      <button type="button" class="btn btn-default btn-short btn-narrow group-number-add">
        +
      </button>
      <button type="button" class="btn btn-default btn-short btn-narrow group-number-remove">
        -
      </button>
    </div>
</div>
`
