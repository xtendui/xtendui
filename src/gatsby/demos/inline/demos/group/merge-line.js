import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<button type="button" class="group">
  <div class="group_inner">
    <div class="btn btn--primary">
      <span>btn 1</span>
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--secondary">
      <span>btn 2</span>
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--primary">
      <span>btn 3</span>
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--secondary">
      <span>btn 4</span>
    </div>
  </div>
</button>
`
