import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
  <div class="breadcrumbs breadcrumbs-background">
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

      <h1 class="breadcrumbs-title">
          Lorem ipsum dolor sit amet
      </h1>

    </div>
  </div>
`
