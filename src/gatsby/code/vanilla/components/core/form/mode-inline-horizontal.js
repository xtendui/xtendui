import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default

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
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto md:self-center">
          <label class="label flex whitespace-no-wrap ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto md:self-center">
          <label class="label flex whitespace-no-wrap ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto md:self-center">
          <label class="label flex whitespace-no-wrap ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-auto">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto md:self-center">
          <label class="label whitespace-no-wrap ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-auto md:self-center">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="label flex whitespace-no-wrap ${labelDefault()}">
            Checkbox
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-space-x-4 row-space-y-3">

            <div class="w-full md:w-auto">
              <label class="label-check">
                <input type="checkbox" class="checkbox ${checkDefault()}" checked disabled>
                <span class="ml-3">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="label-check">
                <input type="checkbox" class="checkbox ${checkDefault()}">
                <span class="ml-3">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="label flex whitespace-no-wrap ${labelDefault()}">
            Radio
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-space-x-4 row-space-y-3">

            <div class="w-full md:w-auto">
              <label class="label-check">
                <input type="radio" class="radio ${radioDefault()}" name="radio-horizontal" checked>
                <span class="ml-3">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="label-check">
                <input type="radio" class="radio ${radioDefault()}" name="radio-horizontal">
                <span class="ml-3">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-auto md:self-baseline">
          <label class="label flex whitespace-no-wrap ${labelDefault()}">
            Switch
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-space-x-4 row-space-y-3">

            <div class="w-full md:w-auto">
              <label class="label-check">
                <input type="checkbox" class="switch ${radioDefault()}">
                <span class="ml-3">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="label-check">
                <input type="radio" class="switch ${switchDefault()}" name="switch-horizontal">
                <span class="ml-3">Lorem ipsum</span>
              </label>
            </div>

            <div class="w-full md:w-auto">
              <label class="label-check">
                <input type="radio" class="switch ${switchDefault()}" name="switch-horizontal">
                <span class="ml-3">Lorem ipsum</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <button type="submit" class="btn btn-md ${btnPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
