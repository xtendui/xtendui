import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonDefaultDrop = require('components/snippets/classes/button-default-drop').default
const cardWhite = require('components/snippets/classes/card-white').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-drop>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}" data-xt-group="my-group">
    drop
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}" data-xt-group="another-group">
    drop
  </button>

  <div class="xt-drop" data-xt-group="another-group">
    <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
      <nav class="xt-list flex-col">
        <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

  <div class="xt-drop" data-xt-group="my-group">
    <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
      <nav class="xt-list flex-col">
        <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

  <div class="xt-drop" data-xt-position="top" data-xt-group="my-group">
    <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
      <nav class="xt-list flex-col">
        <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </a>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Dolor sit
        </button>
        <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
          Amet
        </button>
      </nav>
    </div>
  </div>

</div>
`
