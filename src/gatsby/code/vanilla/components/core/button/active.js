import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonText = require('components/snippets/classes/button-text').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()} active">
    Gray
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()} active">
    Primary
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md text-black ${buttonText()} active">
    Text
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md xt-link active">
    Link
  </button>

</div>
`
