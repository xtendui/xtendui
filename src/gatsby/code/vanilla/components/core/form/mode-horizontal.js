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

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-2/12 md:self-center">
          <label class="label flex ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-2/12 md:self-center">
          <label class="label flex ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-4/12 md:self-center">
          <label class="label flex ${labelDefault()}">
            Lorem ipsum
          </label>
        </div>

        <div class="w-full md:w-8/12">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="row row-space-x-4 row-space-y-3">
        <div class="w-full md:w-4/12 md:self-center">
          <label class="label flex ${labelDefault()}">
            Dolor sit amet
          </label>
        </div>

        <div class="w-full md:w-8/12">
          <input type="text" class="input ${inputDefault()}"/>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-2/12 md:self-baseline">
          <label class="label flex ${labelDefault()}">
            Checkbox
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-space-x-4 row-space-y-3">

            <div class="w-full">
              <label class="label-check">
                <input type="checkbox" class="checkbox ${checkDefault()}" checked disabled>
                <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
              </label>
            </div>

            <div class="w-full">
              <label class="label-check">
                <input type="checkbox" class="checkbox ${checkDefault()}">
                <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-2/12 md:self-baseline">
          <label class="label flex ${labelDefault()}">
            Radio
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-space-x-4 row-space-y-3">

            <div class="w-full">
              <label class="label-check">
                <input type="radio" class="radio ${radioDefault()}" name="radio-horizontal" checked>
                <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
              </label>
            </div>

            <div class="w-full">
              <label class="label-check">
                <input type="radio" class="radio ${radioDefault()}" name="radio-horizontal">
                <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full md:w-2/12 md:self-baseline">
          <label class="label flex ${labelDefault()}">
            Switch
          </label>
        </div>

        <div class="w-full md:w-10/12">
          <div class="row row-space-x-4 row-space-y-3">

            <div class="w-full">
              <label class="label-check">
                <input type="checkbox" class="switch ${radioDefault()}">
                <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
              </label>
            </div>

            <div class="w-full">
              <label class="label-check">
                <input type="radio" class="switch ${switchDefault()}" name="switch-horizontal">
                <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
              </label>
            </div>

            <div class="w-full">
              <label class="label-check">
                <input type="radio" class="switch ${switchDefault()}" name="switch-horizontal">
                <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
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
