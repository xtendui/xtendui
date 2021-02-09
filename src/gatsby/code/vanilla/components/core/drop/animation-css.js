import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const cardWhite = require('components/snippets/classes/card-white').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div class="demo--drop-animation-css" data-xt-drop>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      list
    </button>

    <div class="drop group">
      <div class="card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="list flex-col">
          <a href="#" class="btn text-2xs py-1.5 px-6 ${btnDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="btn text-2xs py-1.5 px-6 ${btnDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="btn text-2xs py-1.5 px-6 ${btnDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
    </div>

  </div>

  <div class="demo--drop-animation-css" data-xt-drop>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      card
    </button>

    <div class="drop">
      <div class="card w-80 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="btn btn-close p-5 text-xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="text-base p-8">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

</div>
`
