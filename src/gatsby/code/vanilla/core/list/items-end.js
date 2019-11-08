import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list--default" style="height: 150px; align-items: flex-end">
  <li>
    <button type="button">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button">
      Amet
    </button>
  </li>
  <li>
    <button type="button">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button">
      Amet
    </button>
  </li>
  <li>
    <button type="button">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button">
      Amet
    </button>
  </li>
</ul>
`
