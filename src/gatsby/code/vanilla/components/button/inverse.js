import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center text-inverse"
  style="padding: 1rem 1.5rem; background: #0078ff;">
  <button type="button" class="btn btn-default">
    default
  </button>

  <button type="button" class="btn btn-primary">
    primary
  </button>

  <button type="button" class="btn btn-text">
    text
  </button>

  <button type="button" class="btn btn-link">
    link
  </button>
</div>
`
