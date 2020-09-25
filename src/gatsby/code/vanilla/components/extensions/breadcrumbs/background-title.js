import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="breadcrumbs py-12 bg-gray-200">
  <div class="container">

    <nav class="breadcrumbs-list">
      <a href="#" class="btn btn-md">
        Home
      </a>
      <span class="separator separator-slash mx-2"></span>
      <a href="#" class="btn btn-md">
        Lorem ipsum dolor sit amet
      </a>
      <span class="separator separator-slash mx-2"></span>
      <div class="btn btn-md">
        Lorem ipsum
      </div>
    </nav>

    <h1 class="h2">
      Lorem ipsum dolor sit amet
    </h1>

  </div>
</div>
`
