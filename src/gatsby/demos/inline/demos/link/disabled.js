import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<button type="button" class="btn btn--primary" disabled>
  <span>primary</span>
</button>

<button type="button" class="btn btn--secondary" disabled>
  <span>secondary</span>
</button>

<button type="button" class="btn btn--text" disabled>
  <span>text</span>
</button>

<button type="button" class="btn btn--link" disabled>
  <span>link</span>
</button>
`
