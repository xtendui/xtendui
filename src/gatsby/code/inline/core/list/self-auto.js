import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<ul class="list list--default" style="align-items: center">
  <li>
    <button type="button" class="btn btn--default" style="height: 100px">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button" class="btn btn--default" style="align-self: auto">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button" class="btn btn--default" style="align-self: auto">
      Amet
    </button>
  </li>
</ul>
`
