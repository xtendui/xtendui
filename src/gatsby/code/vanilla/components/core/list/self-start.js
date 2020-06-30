import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<ul class="list list-default">
  <li>
    <button type="button" style="height: 100px">
      Lorem Ipsum
    </button>
  </li>
  <li>
    <button type="button" class="align-self-flex-start">
      Dolor sit
    </button>
  </li>
  <li>
    <button type="button" class="align-self-flex-start">
      Amet
    </button>
  </li>
</ul>
`
