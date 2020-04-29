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
        <nav class="breadcrumbs-list">
          <a href="#" class="btn">
            Home
          </a>
          <span class="separator"></span>
          <a href="#" class="btn">
            Lorem ipsum dolor sit amet
          </a>
          <span class="separator"></span>
          <div class="btn">
            Lorem ipsum
          </div>
        </nav>
      </div>

    </div>
  </div>
`
