import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const labelDefault = require('components/snippets/classes/label-default').default
const inputDefault = require('components/snippets/classes/input-default').default
const checkDefault = require('components/snippets/classes/form-check-default').default
const note = require('components/snippets/classes/note').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <fieldset>

    <legend>Legend #1</legend>

    <div class="row row-space-x-4 row-space-y-3">

      <div class="w-full md:w-6/12">
        <label class="label mb-3 ${labelDefault()}">
          Lorem Ipsum
        </label>
        <input type="text" class="input ${inputDefault()}"/>
      </div>

      <div class="w-full md:w-6/12">
        <label class="label mb-3 ${labelDefault()}">
          Dolor sit amet
        </label>
        <input type="text" class="input ${inputDefault()}"/>
        <div class="mt-2 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>
      </div>

      <div class="w-full">
        <label class="label ${labelDefault()}">
          Checkbox
        </label>
      </div>

      <div class="w-full">
        <label class="label-check">
          <input type="checkbox" class="checkbox ${checkDefault()}" checked>
          <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
        </label>
      </div>

      <div class="w-full">
        <label class="label-check">
          <input type="checkbox" class="checkbox ${checkDefault()}">
          <span class="ml-3"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</span>
        </label>
        <div class="mt-2 ${note()}">
          <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
        </div>
      </div>

    </div>

  </fieldset>

  <fieldset>

    <legend>Legend #2</legend>

    <div class="row row-space-x-4 row-space-y-3">

      <div class="w-full md:w-auto">
        <label class="label mb-3 ${labelDefault()}">
          Lorem ipsum
        </label>
        <input type="text" class="input ${inputDefault()}"/>
      </div>

      <div class="w-full md:w-auto">
        <label class="label mb-3 ${labelDefault()}">
          Dolor sit amet
        </label>
        <input type="text" class="input ${inputDefault()}"/>
        <div class="w-full">
          <div class="mt-2 ${note()}">
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
          </div>
        </div>
      </div>

      <div class="w-full">
        <label class="label ${labelDefault()}">
          Checkbox
        </label>
      </div>

      <div class="w-full md:w-auto">
        <label class="label-check">
          <input type="checkbox" class="checkbox ${checkDefault()}" checked>
          <span class="ml-3">Lorem ipsum</span>
        </label>
      </div>

      <div class="w-full md:w-auto">
        <label class="label-check">
          <input type="checkbox" class="checkbox ${checkDefault()}">
          <span class="ml-3">Lorem ipsum</span>
        </label>
        <div class="w-full">
          <div class="mt-2 ${note()}">
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
          </div>
        </div>
      </div>

      <div class="w-full">
        <button type="submit" class="btn btn-md ${btnPrimary()}">
          submit
        </button>
      </div>

    </div>

  </fieldset>

</form>
`
