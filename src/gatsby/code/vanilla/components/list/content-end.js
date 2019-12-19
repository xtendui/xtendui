import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list-default align-content-flex-end" style="height: 150px;">
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
