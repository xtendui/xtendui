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

  <div data-xt-drop>

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      White
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-80 rounded-md shadow-drop ${classes.cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
          ${classes.iconX()}
        </button>
        <div class="${classes.cardMd()}">
          <div class="xt-h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis.</p>
        </div>
      </div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
      Primary
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-80 rounded-md shadow-drop ${classes.cardPrimary()}">
        <button type="button" class="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl" aria-label="Close">
          ${classes.iconX()}
        </button>
        <div class="${classes.cardMd()}">
          <div class="xt-h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis.</p>
        </div>
      </div>
    </div>

  </div>

</div>
`
