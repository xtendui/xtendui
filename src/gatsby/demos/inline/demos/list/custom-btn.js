import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: true,
  js: false,
}

demo.htmlSource = `
<ul class="list demo--list--custom-btn">
  <li>
    <a href="#">
      <span>Lorem Ipsum</span>
    </a>
  </li>
  <li>
    <button type="button">
      <span>Dolor sit</span>
    </button>
  </li>
  <li class="custom">
    <button type="button" class="btn">
      <span>Amet</span>
    </button>
  </li>
</ul>
`
