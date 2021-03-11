import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <label class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Lorem ipsum
    <input type="checkbox" class="xt-check xt-checkbox top-auto ml-2 rounded-md ${classes.checkDefault()}" checked disabled>
  </label>

  <label class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Lorem ipsum
    <input type="checkbox" class="xt-check xt-checkbox top-auto ml-2 rounded-md ${classes.checkDefault()}">
  </label>

  <label class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-radio top-auto ml-2 rounded-full ${classes.radioDefault()}" name="radio-button" checked>
  </label>

  <label class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-radio top-auto ml-2 rounded-full ${classes.radioDefault()}" name="radio-button">
  </label>

  <label class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-switch top-auto ml-2 rounded-full ${classes.switchDefault()}" name="switch-button" checked>
  </label>

  <label class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Lorem ipsum
    <input type="radio" class="xt-check xt-switch top-auto ml-2 rounded-full ${classes.switchDefault()}" name="switch-button">
  </label>

</div>
`
