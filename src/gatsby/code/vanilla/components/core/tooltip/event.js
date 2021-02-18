import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardBlack = require('components/snippets/classes/card-black').default
const inputDefault = require('components/snippets/classes/input-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip="{ on: 'click', off: 'click' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      click
    </button>

    <div class="xt-tooltip p-2">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: ':scope > input', on: 'focus', off: 'blur' }">

    <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Focus" placeholder="Focus">

    <div class="xt-tooltip p-2">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
