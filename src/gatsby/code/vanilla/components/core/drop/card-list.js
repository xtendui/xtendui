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
      list
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-96 rounded-md shadow-drop ${classes.cardWhite()}">
        <div class="${classes.cardMd()}">
          <div class="xt-list xt-list-6 md:flex-nowrap items-baseline">
            <div>
              ${classes.iconPackage({ classes: 'text-3xl' })}
            </div>
            <div>
              <div class="xt-h4">Lorem ipsum</div>
              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis.</p>
            </div>
            <div class="self-end justify-self-end">
              ${classes.iconChevronRight({ classes: 'text-3xl' })}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
