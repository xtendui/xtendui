import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="xt-list xt-list-px flex-col">

  <div>
    <div class="xt-list xt-list-px">

      <div>
        <div class="xt-list xt-list-px flex-col">

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Lorem Ipsum
          </button>

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Dolor sit
          </button>

          <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
            Amet
          </button>

        </div>
      </div>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Dolor sit
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Amet
      </button>

    </div>
  </div>

  <div>
    <div class="xt-list xt-list-px">

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Lorem Ipsum
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Dolor sit
      </button>

        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Amet
      </button>

    </div>
  </div>

</nav>
`
