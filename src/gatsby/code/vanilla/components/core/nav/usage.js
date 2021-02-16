import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="nav">
  <div class="xt-list flex-col max-w-sm">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-t-md ${buttonPrimary()}">
      Lorem ipsum
    </button>

    <button type="button" class="xt-button text-xs py-2 px-3.5 active ${buttonPrimary()}">
      dolor sit amet
    </button>

    <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonPrimary()}">
      consectetur adipiscing elit
    </button>

    <button type="button" class="xt-button text-xs py-2 px-3.5 disabled ${buttonPrimary()}" aria-disabled="true">
      Lorem ipsum
    </button>

    <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonPrimary()}">
      dolor sit amet
    </button>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-b-md ${buttonPrimary()}">
      Lorem ipsum dolor sit amet consectetur adipiscing elit
    </button>

  </div>
</nav>
`
