import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardToggle = require('components/snippets/classes/card-toggle').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-3 items-center demo--toggle-progress">

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()} in-toggle">
    Toggle 0
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500">
        <span class="absolute bg-current h-full"></span>
        <span class="absolute bg-current opacity-0 w-full h-full"></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 1
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500">
        <span class="absolute bg-current h-full"></span>
        <span class="absolute bg-current opacity-0 w-full h-full"></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 2
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500">
        <span class="absolute bg-current h-full"></span>
        <span class="absolute bg-current opacity-0 w-full h-full"></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
    Toggle 3
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500">
        <span class="absolute bg-current h-full"></span>
        <span class="absolute bg-current opacity-0 w-full h-full"></span>
      </span>
    </span>
  </button>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 0
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500 h-1 top-auto">
        <span class="absolute bg-current h-full bottom-0"></span>
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0"></span>
      </span>
    </span>
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 1
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500 h-1 top-auto">
        <span class="absolute bg-current h-full bottom-0"></span>
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0"></span>
      </span>
    </span>
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 2
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500 h-1 top-auto">
        <span class="absolute bg-current h-full bottom-0"></span>
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0"></span>
      </span>
    </span>
  </div>

  <div class="card toggle rounded-md ${cardToggle()}">
    Target 3
    <span class="loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="filler absolute inset-0 m-auto text-accent-500 h-1 top-auto">
        <span class="absolute bg-current h-full bottom-0"></span>
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0"></span>
      </span>
    </span>
  </div>

</div>
`
