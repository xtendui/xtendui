import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardWhite = require('components/snippets/classes/card-white').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-drop>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      default
    </button>

    <div class="drop">
      <div class="card w-80 rounded-md shadow-drop ${cardWhite()}">
        <div class="btn btn-close p-5 text-xl" aria-label="Close">
          ${iconX()}
        </div>
        <div class="card-md">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      primary
    </button>

    <div class="drop">
      <div class="card w-80 rounded-md shadow-drop ${cardPrimary()}">
        <div class="btn btn-close p-5 text-xl" aria-label="Close">
          ${iconX()}
        </div>
        <div class="card-md">
          <div class="h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

</div>
`
