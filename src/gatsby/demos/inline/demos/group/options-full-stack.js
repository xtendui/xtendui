import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="group full">
  <span class="group_inner">
    <button type="button" class="btn btn--primary">
      <span>btn 1a</span>
    </button>
    <button type="button" class="btn btn--primary">
      <span>btn 1b</span>
    </button>
  </span>
  <span class="group_inner">
    <button type="button" class="btn btn--secondary">
      <span>btn 2a</span>
    </button>
    <button type="button" class="btn btn--secondary">
      <span>btn 2b</span>
    </button>
  </span>
  <input type="text" class="form-item">
  <span class="group_inner">
    <button type="button" class="btn btn--primary">
      <span>btn 3a</span>
    </button>
    <button type="button" class="btn btn--primary">
      <span>btn 3b</span>
    </button>
  </span>
  <span class="group_inner">
    <button type="button" class="btn btn--secondary">
      <span>btn 4a</span>
    </button>
    <button type="button" class="btn btn--secondary">
      <span>btn 4b</span>
    </button>
  </span>
</div>

<div class="group full">
  <span class="group_inner flex--auto">
    <button type="button" class="btn btn--primary">
      <span>btn 1a</span>
    </button>
    <button type="button" class="btn btn--primary">
      <span>btn 1b</span>
    </button>
  </span>
  <span class="group_inner">
    <button type="button" class="btn btn--secondary">
      <span>btn 2a</span>
    </button>
    <button type="button" class="btn btn--secondary">
      <span>btn 2b</span>
    </button>
  </span>
  <span class="group_inner flex--auto">
    <button type="button" class="btn btn--primary">
      <span>btn 3a</span>
    </button>
    <button type="button" class="btn btn--primary">
      <span>btn 3b</span>
    </button>
  </span>
  <span class="group_inner">
    <button type="button" class="btn btn--secondary">
      <span>btn 4a</span>
    </button>
    <button type="button" class="btn btn--secondary">
      <span>btn 4b</span>
    </button>
  </span>
</div>
`
