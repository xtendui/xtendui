import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardBlack = require('components/snippets/classes/card-black').default
const inputDefault = require('components/snippets/classes/input-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-tooltip="{ on: 'click', off: false }">

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      click
    </button>

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: ':scope > input', on: 'focus', off: 'blur' }">

    <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Focus" placeholder="Focus">

    <div class="tooltip">
      <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

</div>
`
