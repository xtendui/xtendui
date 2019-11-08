import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="group full group--default">
  <div class="group-inner">
    <button type="button" class="btn btn--primary">
      Lorem ipsum
    </button>
  </div>
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      Dolor sit
    </button>
  </div>
  <div class="group-inner">
    <button type="button" class="btn btn--default">
      amet
    </button>
  </div>
  <input type="text" class="form-item form-item--default" />
</div>
`
