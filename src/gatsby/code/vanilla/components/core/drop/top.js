import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop="{ position: 'top' }">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      top
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
      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
    </div>

  </div>

  <div data-xt-drop="{ position: 'top-start' }">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      top start
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
      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
    </div>

  </div>

  <div data-xt-drop="{ position: 'top-end' }">

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      top end
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
      <div class="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
    </div>

  </div>

</div>
`
