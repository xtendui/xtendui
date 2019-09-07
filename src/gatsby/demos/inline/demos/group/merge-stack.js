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
      <span>btn 1a</span>
    </div>
    <div class="btn btn--primary">
      <span>btn 1b</span>
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--secondary">
      <span>btn 2a</span>
    </div>
    <div class="btn btn--secondary">
      <span>btn 2b</span>
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--primary">
      <span>btn 3a</span>
    </div>
    <div class="btn btn--primary">
      <span>btn 3b</span>
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--secondary">
      <span>btn 4a</span>
    </div>
    <div class="btn btn--secondary">
      <span>btn 4b</span>
    </div>
  </div>
</button>
`
