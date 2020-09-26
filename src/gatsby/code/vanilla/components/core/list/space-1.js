import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<nav class="list-block list-space-1">

  <div>
    <div class="list list-space-1">

      <div>
        <div class="list-block list-space-1">

          <button type="button" class="btn btn-md ${btnDefault()}">
            Lorem Ipsum
          </button>

          <button type="button" class="btn btn-md ${btnDefault()}">
            Dolor sit
          </button>

          <button type="button" class="btn btn-md ${btnDefault()}">
            Amet
          </button>

        </div>
      </div>

      <button type="button" class="btn btn-md ${btnDefault()}">
        Dolor sit
      </button>

      <button type="button" class="btn btn-md ${btnDefault()}">
        Amet
      </button>

    </div>
  </div>

  <div>
    <div class="list list-space-1">

      <button type="button" class="btn btn-md ${btnDefault()}">
        Lorem Ipsum
      </button>

      <button type="button" class="btn btn-md ${btnDefault()}">
        Dolor sit
      </button>

        <button type="button" class="btn btn-md ${btnDefault()}">
        Amet
      </button>

    </div>
  </div>

</nav>
`
