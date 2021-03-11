import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="text-sm">
  <div class="xt-row xt-row-x-6 xt-row-y-4">

    <div class="w-full md:w-auto">
      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Lorem ipsum
      </label>
      <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum"/>
    </div>

    <div class="w-full md:w-auto">
      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Dolor sit amet
      </label>
      <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet"/>
    </div>

    <div class="w-full md:w-auto">
      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Lorem ipsum
      </label>
      <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Lorem ipsum"/>
    </div>

    <div class="w-full md:w-auto">
      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Dolor sit amet
      </label>
      <input type="text" class="xt-input rounded-md ${classes.inputDefault()}" aria-label="Dolor sit amet"/>
    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Checkbox
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}" checked disabled>
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-checkbox rounded-md ${classes.checkDefault()}">
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Radio
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${classes.radioDefault()}" name="radio-inline-row" checked>
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-radio rounded-full ${classes.radioDefault()}" name="radio-inline-row">
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">

      <label class="xt-label mb-3 ${classes.labelDefault()}">
        Switch
      </label>

      <div class="xt-row xt-row-x-8 xt-row-y-2">

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="checkbox" class="xt-check xt-switch rounded-full ${classes.switchDefault()}">
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${classes.switchDefault()}" name="switch-inline-row" checked>
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

        <div class="w-full md:w-auto">
          <label class="xt-label-check">
            <input type="radio" class="xt-check xt-switch rounded-full ${classes.switchDefault()}" name="switch-inline-row">
            <span class="xt-check-content">Lorem ipsum</span>
          </label>
        </div>

      </div>

    </div>

    <div class="w-full">
      <button type="submit" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        submit
      </button>
    </div>

  </div>
</form>
`
