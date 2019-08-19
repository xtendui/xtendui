import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: false,
  js: false,
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo_source--from">
  <button type="button" class="btn">
    <span>default</span>
  </button>

  <button type="button" class="btn btn--tiny">
    <span>tiny</span>
  </button>
  
  <button type="button" class="btn btn--small">
    <span>small</span>
  </button>

  <button type="button" class="btn btn--medium">
    <span>medium</span>
  </button>

  <button type="button" class="btn btn--big">
    <span>big</span>
  </button>

  <button type="button" class="btn btn--giant">
    <span>giant</span>
  </button>
  
  <button type="button" class="btn btn--huge">
    <span>huge</span>
  </button>
</div>
`
