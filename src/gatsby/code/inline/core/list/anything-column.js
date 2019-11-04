import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
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
