import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="leading-none ellipsis">
  <a href="#" class="btn btn-md px-0">
    Home
  </a>
  <span class="separator separator-slash mx-2"></span>
  <a href="#" class="btn btn-md px-0">
    Lorem ipsum dolor sit amet
  </a>
  <span class="separator separator-slash mx-2"></span>
  <div class="btn btn-md px-0 pointer-events-none">
    Lorem ipsum
  </div>
</nav>
`
