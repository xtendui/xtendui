import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list--default" style="height: 150px; align-items: stretch">
  <li>
    <button type="button" style="align-self: stretch">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Amet
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Amet
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button" style="align-self: stretch">
      Amet
    </button>
  </li>
</ul>
`
