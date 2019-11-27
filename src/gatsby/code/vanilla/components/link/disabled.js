import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<button type="button" class="btn btn--primary" disabled>
  primary
</button>

<button type="button" class="btn btn--text" disabled>
  text
</button>

<button type="button" class="btn btn--link" disabled>
  link
</button>
`
