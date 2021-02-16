import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}">
    small
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    medium
  </button>

  <button type="button" class="xt-button text-base py-2.5 px-4 rounded-md ${buttonPrimary()}">
    large
  </button>

</div>
`
