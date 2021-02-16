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
<div class="bg-primary-500 py-5 px-6">
  <div class="xt-list xt-list-3 items-center text-white xt-links-inverse">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
      Gray
    </button>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      Primary
    </button>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonText()}">
      Text
    </button>

    <button type="button" class="xt-button xt-link">
      Link
    </button>

  </div>
</div>
`
