import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="xt-list xt-list-3 flex-col">

  <div>
    <div class="xt-list xt-list-3">

      <div>
        <div class="xt-list xt-list-3 flex-col">

          <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
            Lorem Ipsum
          </button>

          <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
            Dolor sit
          </button>

          <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
            Amet
          </button>

        </div>
      </div>

      <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
        Dolor sit
      </button>

      <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
        Amet
      </button>

    </div>
  </div>

  <div>
    <div class="xt-list xt-list-3">

      <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
        Lorem Ipsum
      </button>

      <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
        Dolor sit
      </button>

        <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
        Amet
      </button>

    </div>
  </div>

</nav>
`
