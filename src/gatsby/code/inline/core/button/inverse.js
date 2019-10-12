import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list-space--small align-items--center gatbsy_demo_source--from">
  <div class="list list-space--small align-items--center text--inverse" style="padding: 0.5rem 1rem; background: #7367F0;">
    <button type="button" class="btn">
      default
    </button>

    <button type="button" class="btn btn--primary">
      primary
    </button>

    <button type="button" class="btn btn--secondary">
      secondary
    </button>

    <button type="button" class="btn btn--text">
      text
    </button>

    <button type="button" class="btn btn--link">
      link
    </button>
  </div>
</div>
`
