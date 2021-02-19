import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonDefaultDrop = require('components/snippets/classes/button-default-drop').default
const cardWhite = require('components/snippets/classes/card-white').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      list
    </button>

    <div class="xt-drop p-4 transform transition opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0">
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

  <div data-xt-drop>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      card
    </button>

    <div class="xt-drop p-4 transform transition opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0">
      <div class="xt-card w-80 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="text-base p-8">
          <div class="xt-h4 ">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

</div>
`
