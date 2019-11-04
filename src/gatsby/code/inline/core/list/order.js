import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list--default">
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
  <li class="order-0 order-3--sm">
    <button type="button">
      Amet
    </button>
  </li>
</ul>
`
