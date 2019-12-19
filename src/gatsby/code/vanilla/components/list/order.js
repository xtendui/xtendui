import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list-default">
  <li class="order-2">
    <button type="button">
      Lorem Ipsum
    </button>
  </li>
  <li class="order-1">
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li class="order-0 order-3-sm">
    <button type="button">
      Amet
    </button>
  </li>
</ul>
`
