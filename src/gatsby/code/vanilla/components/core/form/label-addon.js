import path from 'path'
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full">
      <label class="form-label mb-4 ${labelDefault()}">
        Lorem ipsum
        <div class="ml-4">
          <div class="list list-space-2 items-center">
            <a href="#" class="btn">
              btn
            </a>
            <a href="#" class="btn link">
              link
            </a>
          </div>
        </div>
      </label>
      <input type="text" class="form-item ${inputDefault()}"/>
    </div>

    <div class="w-full">
      <label class="form-label mb-4 ${labelDefault()}">
        Dolor sit amet
        <div class="ml-auto">
          <div class="list list-space-2 items-center">
            <a href="#" class="btn">
              btn
            </a>
            <a href="#" class="btn link">
              link
            </a>
          </div>
        </div>
      </label>
      <input type="text" class="form-item ${inputDefault()}"/>
    </div>

  </div>
</form>
`
