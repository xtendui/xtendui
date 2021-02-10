import path from 'path'
const btnText = require('components/snippets/classes/btn-text').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="w-full p-8 md:p-10 lg:p-12 bg-gray-200">

  <nav class="breadcrumbs leading-none ellipsis">
    <a href="#" class="btn text-xs py-2 px-0 ${btnText()}">
      Home
    </a>
    <span class="separator separator-slash mx-2"></span>
    <a href="#" class="btn text-xs py-2 px-0 ${btnText()}">
      Lorem ipsum dolor sit amet
    </a>
    <span class="separator separator-slash mx-2"></span>
    <div class="btn text-xs py-2 px-0 ${btnText()} pointer-events-none">
      Lorem ipsum
    </div>
  </nav>

  <h1 class="h2 mt-4">
    Lorem ipsum dolor sit amet
  </h1>

</div>
`
