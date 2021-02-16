import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="xt-list xt-list-2 flex-col">

  <div>
    <div class="xt-list xt-list-1">

      <div>
        <div class="xt-list xt-list-2 flex-col">

          <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
            Lorem Ipsum
          </button>

          <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
            Dolor sit
          </button>

          <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
            Amet
          </button>

        </div>
      </div>

      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        Dolor sit
      </button>

      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        Amet
      </button>

    </div>
  </div>

  <div>
    <div class="xt-list xt-list-1">

      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        Lorem Ipsum
      </button>

      <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        Dolor sit
      </button>

        <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        Amet
      </button>

    </div>
  </div>

</nav>
`
