import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<button type="button" class="btn btn--primary" disabled>
  primary
</button>

<button type="button" class="btn btn--secondary" disabled>
  secondary
</button>

<button type="button" class="btn btn--text" disabled>
  text
</button>

<button type="button" class="btn btn--link" disabled>
  link
</button>
`
