import path from 'path'
const cardToggle = require('components/snippets/classes/card-toggle').default
const inputDefault = require('components/snippets/classes/input-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center" data-xt-toggle="{ elements: ':scope > input', on: 'focus' }">

  <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Toggle 0" placeholder="Toggle 0">

  <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Toggle 1" placeholder="Toggle 1">

  <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Toggle 2" placeholder="Toggle 2">

  <input type="text" class="form-item rounded-md ${inputDefault()}" aria-label="Toggle 3" placeholder="Toggle 3">

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 1
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 2
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 3
  </div>

</div>
`
