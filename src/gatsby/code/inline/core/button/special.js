import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list-space--small align-items--center gatsby_demo_source--from">
  <button type="button" class="btn btn--nodesign">
    nodesign
  </button>

  <button type="button" class="btn btn--noeffect">
    noeffect
  </button>

  <button type="button" class="btn btn--medium btn--squared">
    squared
  </button>

  <button type="button" class="btn btn--medium btn--noborder">
    noborder
  </button>

  <button type="button" class="btn btn--medium btn--tall">
    tall
  </button>

  <button type="button" class="btn btn--medium btn--short">
    short
  </button>

  <button type="button" class="btn btn--medium btn--wide">
    wide
  </button>

  <button type="button" class="btn btn--medium btn--narrow">
    narrow
  </button>

  <button type="button" class="btn btn--medium btn--none">
    none
  </button>

  <button type="button" class="btn btn--medium btn--none-x">
    none-x
  </button>

  <button type="button" class="btn btn--medium btn--none-y">
    none-y
  </button>

  <button type="button" class="btn btn--medium btn--icon">
    icon
  </button>

  <button type="button" class="btn btn--medium btn--transform">
    transform
  </button>
</div>
`
