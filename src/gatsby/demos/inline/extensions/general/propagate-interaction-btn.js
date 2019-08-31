import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<button type="button" class="group">
  <span class="group_inner">
    <span class="btn btn--primary">
      <span>btn 1</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--secondary">
      <span>btn 2</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--primary">
      <span>btn 3</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--secondary">
      <span>btn 4</span>
    </span>
  </span>
</button>
`
