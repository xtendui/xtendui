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
      <span>btn 1a</span>
    </span>
    <span class="btn btn--primary">
      <span>btn 1b</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--secondary">
      <span>btn 2a</span>
    </span>
    <span class="btn btn--secondary">
      <span>btn 2b</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--primary">
      <span>btn 3a</span>
    </span>
    <span class="btn btn--primary">
      <span>btn 3b</span>
    </span>
  </span>
  <span class="group_inner">
    <span class="btn btn--secondary">
      <span>btn 4a</span>
    </span>
    <span class="btn btn--secondary">
      <span>btn 4b</span>
    </span>
  </span>
</button>
`
