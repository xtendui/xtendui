import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list-block list--default">
  <li>
    Lorem ipsum dolor sit amet.
  </li>
  <li>
    consectetur adipiscing elit.
  </li>
  <li>
    Cras placerat pellentesque pulvinar.
  </li>
</ul>
`
