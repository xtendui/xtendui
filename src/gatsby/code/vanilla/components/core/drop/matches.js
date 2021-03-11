import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-drop="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
    drop
  </button>

  <div class="xt-drop p-4">
    <div class="xt-card w-64 py-3.5 rounded-md shadow-drop ${classes.cardWhite()}">
      <nav class="xt-list flex-col">
        <a href="#" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${classes.buttonDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

</div>
`
