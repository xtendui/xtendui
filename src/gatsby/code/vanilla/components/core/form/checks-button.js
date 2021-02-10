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
<div class="list list-3 items-center">

  <label class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Lorem ipsum
    <input type="checkbox" class="form-check form-checkbox top-auto ml-2 rounded-md ${checkDefault()}" checked disabled>
  </label>

  <label class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Lorem ipsum
    <input type="checkbox" class="form-check form-checkbox top-auto ml-2 rounded-md ${checkDefault()}">
  </label>

  <label class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-radio top-auto ml-2 rounded-full ${radioDefault()}" name="radio-button" checked>
  </label>

  <label class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-radio top-auto ml-2 rounded-full ${radioDefault()}" name="radio-button">
  </label>

  <label class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-switch top-auto ml-2 rounded-full ${switchDefault()}" name="switch-button" checked>
  </label>

  <label class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Lorem ipsum
    <input type="radio" class="form-check form-switch top-auto ml-2 rounded-full ${switchDefault()}" name="switch-button">
  </label>

</div>
`
