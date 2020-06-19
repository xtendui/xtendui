import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default">
  <div>
    Lorem ipsum dolor sit amet.
  </div>
  <div>
    consectetur adipiscing elit.
  </div>
  <div>
    Cras placerat pellentesque pulvinar.
  </div>
</div>
`
