import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center gatsby_demo_source--from">
  <button type="button" class="btn btn--default">
    default
  </button>

  <button type="button" class="btn btn--default btn--tiny">
    tiny
  </button>
  
  <button type="button" class="btn btn--default btn--small">
    small
  </button>

  <button type="button" class="btn btn--default btn--medium">
    medium
  </button>

  <button type="button" class="btn btn--default btn--big">
    big
  </button>

  <button type="button" class="btn btn--default btn--giant">
    giant
  </button>
</div>
`
