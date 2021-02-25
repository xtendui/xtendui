import path from 'path'
const buttonText = require('components/snippets/classes/button-text').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
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
`
