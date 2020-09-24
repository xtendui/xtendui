import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="breadcrumbs">
  <div class="container">

    <nav class="breadcrumbs-list">
      <a href="#" class="btn btn-medium">
        Home
      </a>
      <span class="separator separator-slash mx-2"></span>
      <a href="#" class="btn btn-medium">
        Lorem ipsum dolor sit amet
      </a>
      <span class="separator separator-slash mx-2"></span>
      <div class="btn btn-medium">
        Lorem ipsum
      </div>
    </nav>

  </div>
</div>
`
