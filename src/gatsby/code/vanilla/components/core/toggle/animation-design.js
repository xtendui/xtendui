import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-toggle>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Toggle 1
  </button>

  <div class="xt-card xt-toggle group" data-xt-duration="500">
    <div class="xt-toggle-inner">
      <div class="xt-design rounded-md bg-gray-200 transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0"></div>
      <div class="relative text-sm p-6 text-black xt-links-default transition ease-out duration-300 opacity-0 group-active:opacity-100">
        Target 0
      </div>
    </div>
  </div>

  <div class="xt-card xt-toggle group" data-xt-duration="500">
    <div class="xt-toggle-inner">
      <div class="xt-design rounded-md bg-gray-200 transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0"></div>
      <div class="relative text-sm p-6 text-black xt-links-default transition ease-out duration-300 opacity-0 group-active:opacity-100">
        Target 1
      </div>
    </div>
  </div>

</div>
`
