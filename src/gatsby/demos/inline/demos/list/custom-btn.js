import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<ul class="list demo--list--custom-btn">
  <li>
    <a href="#">
      Lorem Ipsum
    </a>
  </li>
  <li>
    <button type="button">
      Dolor sit
    </button>
  </li>
  <li class="custom">
    <button type="button" class="btn">
      Amet
    </button>
  </li>
</ul>
`
