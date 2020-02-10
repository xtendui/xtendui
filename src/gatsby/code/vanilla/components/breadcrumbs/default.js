import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
  <div class="breadcrumbs">
    <div class="container">

      <div class="breadcrumbs-inner">
        <ol class="breadcrumbs-list">
          <li>
            <a href="#" class="btn">
              Home
            </a>
          </li>
          <li>
            <span class="separator"></span>
          </li>
          <li>
            <a href="#" class="btn">
              Lorem ipsum dolor sit amet
            </a>
          </li>
          <li>
            <span class="separator"></span>
          </li>
          <li>
            <div class="btn">
              Lorem ipsum
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
`
