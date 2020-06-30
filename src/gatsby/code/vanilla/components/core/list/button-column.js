import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<ul class="list-block list-default">
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
  <li class="xt-custom">
    <button type="button" class="btn btn-primary btn-tiny">
      Amet
    </button>
  </li>
</ul>
`
