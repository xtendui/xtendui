import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ instant: true, targets: ':scope > .relative > .xt-toggle' }">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <div class="relative w-full">

    <div class="xt-card xt-toggle xt-toggle-absolute rounded-md ${cardToggle()} transform transition opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0">
      Target 0
    </div>

    <div class="xt-card xt-toggle xt-toggle-absolute rounded-md ${cardToggle()} transform transition opacity-0 -translate-x-4 active:opacity-100 active:translate-x-0">
      Target 1
    </div>

  </div>

  <div class="mt-2">This text is below targets.</div>

</div>
`
