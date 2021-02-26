import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="nav">
  <div class="xt-list flex-col max-w-sm">

    <button type="button" class="xt-button ${buttonMd()} rounded-t-md ${buttonPrimary()}">
      Lorem ipsum
    </button>

    <button type="button" class="xt-button ${buttonMd()} active ${buttonPrimary()}">
      dolor sit amet
    </button>

    <button type="button" class="xt-button ${buttonMd()} ${buttonPrimary()}">
      consectetur adipiscing elit
    </button>

    <button type="button" class="xt-button ${buttonMd()} disabled ${buttonPrimary()}" aria-disabled="true">
      Lorem ipsum
    </button>

    <button type="button" class="xt-button ${buttonMd()} ${buttonPrimary()}">
      dolor sit amet
    </button>

    <button type="button" class="xt-button ${buttonMd()} rounded-b-md ${buttonPrimary()}">
      Lorem ipsum dolor sit amet consectetur adipiscing elit
    </button>

  </div>
</nav>
`
