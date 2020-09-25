import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
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

    <div class="w-full md:w-auto">
      <div class="row row-space-2">
        <div class="w-full md:w-auto md:self-center">
          <label class="label mb-4 md:mb-0 whitespace-no-wrap ${labelDefault()}">
            Lorem
          </label>
        </div>
        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>
      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-space-2">
        <div class="w-full md:w-auto md:self-center">
          <label class="label mb-4 md:mb-0 whitespace-no-wrap ${labelDefault()}">
            Lorem Ipsum
          </label>
        </div>
        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>
      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-space-2">
        <div class="w-full md:w-auto md:self-center">
          <label class="label mb-4 md:mb-0 whitespace-no-wrap ${labelDefault()}">
            Lorem
          </label>
        </div>
        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>
      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-space-2">
        <div class="w-full md:w-auto md:self-center">
          <label class="label mb-4 md:mb-0 whitespace-no-wrap ${labelDefault()}">
            Lorem Ipsum
          </label>
        </div>
        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>
      </div>
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-medium ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
