import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
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
<div class="list list-space-2 items-center">

  <label class="btn btn-md ${btnDefault()}">
    Lorem ipsum
    <input type="checkbox" class="form-check form-checkbox ml-2 ${checkDefault()}" checked disabled>
  </label>

  <label class="btn btn-md ${btnDefault()}">
    Lorem ipsum
    <input type="checkbox" class="form-check form-checkbox ml-2 ${checkDefault()}">
  </label>

  <label class="btn btn-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-radio ml-2 ${radioDefault()}" name="radio-button" checked>
  </label>

  <label class="btn btn-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-radio ml-2 ${radioDefault()}" name="radio-button">
  </label>

  <label class="btn btn-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-switch ml-2 ${switchDefault()}" name="switch-button" checked>
  </label>

  <label class="btn btn-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-switch ml-2 ${switchDefault()}" name="switch-button">
  </label>

</div>
`
