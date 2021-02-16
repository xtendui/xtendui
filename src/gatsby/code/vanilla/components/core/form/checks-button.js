import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
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
<div class="xt-list xt-list-3 items-center">

  <label class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Lorem ipsum
    <input type="checkbox" class="xt-check xt-checkbox top-auto ml-2 rounded-md ${checkDefault()}" checked disabled>
  </label>

  <label class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Lorem ipsum
    <input type="checkbox" class="xt-check xt-checkbox top-auto ml-2 rounded-md ${checkDefault()}">
  </label>

  <label class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-radio top-auto ml-2 rounded-full ${radioDefault()}" name="radio-button" checked>
  </label>

  <label class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-radio top-auto ml-2 rounded-full ${radioDefault()}" name="radio-button">
  </label>

  <label class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-switch top-auto ml-2 rounded-full ${switchDefault()}" name="switch-button" checked>
  </label>

  <label class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-switch top-auto ml-2 rounded-full ${switchDefault()}" name="switch-button">
  </label>

</div>
`
