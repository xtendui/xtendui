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
<form class="text-sm">

  <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ elements: ':scope > input', on: 'focus', off: false, closeOutside: 'body' }">

    <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Toggle 0" placeholder="Toggle 0">

    <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Toggle 1" placeholder="Toggle 1">

    <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Toggle 2" placeholder="Toggle 2">

    <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Toggle 3" placeholder="Toggle 3">

    <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
      Target 0
    </div>

    <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
      Target 1
    </div>

    <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
      Target 2
    </div>

    <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
      Target 3
    </div>

  </div>
</div>
`
