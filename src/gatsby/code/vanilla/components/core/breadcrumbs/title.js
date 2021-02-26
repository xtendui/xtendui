import path from 'path'

const buttonText = require('components/snippets/classes').buttonText

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="w-full p-8 md:p-10 lg:p-12 bg-gray-200">

  <nav class="breadcrumbs leading-none truncate">
    <a href="#" class="xt-button text-xs py-2 px-0 text-black ${buttonText()}">
      Home
    </a>
    <span class="xt-separator xt-separator-slash mx-2"></span>
    <a href="#" class="xt-button text-xs py-2 px-0 text-black ${buttonText()}">
      Lorem ipsum dolor sit amet
    </a>
    <span class="xt-separator xt-separator-slash mx-2"></span>
    <div class="xt-button text-xs py-2 px-0 text-black ${buttonText()} pointer-events-none">
      Lorem ipsum
    </div>
  </nav>

  <h1 class="xt-h2  mt-4">
    Lorem ipsum dolor sit amet
  </h1>

</div>
`
