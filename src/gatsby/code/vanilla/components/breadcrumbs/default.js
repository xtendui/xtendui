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
        <ul class="list">
          <li>
            <a href="/" class="btn">
              Home
            </a>
          </li>
          <li>
            <span class="separator separator-slash"></span>
          </li>
          <li>
            <a href="/" class="btn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare
            </a>
          </li>
          <span class="separator separator-slash"></span>
          <li>
            <a role="button" class="btn" disabled>
              Destination
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
`
