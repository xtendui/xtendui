import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo_source--from">
  <button type="button" class="btn">
    default
  </button>

  <button type="button" class="btn btn--tiny">
    tiny
  </button>
  
  <button type="button" class="btn btn--small">
    small
  </button>

  <button type="button" class="btn btn--medium">
    medium
  </button>

  <button type="button" class="btn btn--big">
    big
  </button>

  <button type="button" class="btn btn--giant">
    giant
  </button>
  
  <button type="button" class="btn btn--huge">
    huge
  </button>
</div>
`
