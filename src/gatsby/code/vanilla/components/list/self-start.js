import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list--default">
  <li>
    <button type="button" class="btn btn--default" style="height: 100px">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button" class="btn btn--default" style="align-self: flex-start">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button" class="btn btn--default" style="align-self: flex-start">
      Amet
    </button>
  </li>
</ul>
`
