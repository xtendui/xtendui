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
<div class="xt-list xt-list-3 items-center demo--toggle-progress">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()} in-toggle">
    Toggle 0
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500">
        <span class="absolute bg-current opacity-25 w-full h-full"></span>
        <span class="absolute bg-current w-full"></span>
      </span>
    </span>
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 1
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500">
        <span class="absolute bg-current opacity-25 w-full h-full"></span>
        <span class="absolute bg-current w-full"></span>
      </span>
    </span>
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 2
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500">
        <span class="absolute bg-current opacity-25 w-full h-full"></span>
        <span class="absolute bg-current w-full"></span>
      </span>
    </span>
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Toggle 3
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500">
        <span class="absolute bg-current opacity-25 w-full h-full"></span>
        <span class="absolute bg-current w-full"></span>
      </span>
    </span>
  </button>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 0
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
        <span class="absolute bg-current h-full bottom-0 left-0"></span>
      </span>
    </span>
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 1
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
        <span class="absolute bg-current h-full bottom-0 left-0"></span>
      </span>
    </span>
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 2
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
        <span class="absolute bg-current h-full bottom-0 left-0"></span>
      </span>
    </span>
  </div>

  <div class="xt-card xt-toggle rounded-md ${cardToggle()}">
    Target 3
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
        <span class="absolute bg-current h-full bottom-0 left-0"></span>
      </span>
    </span>
  </div>

</div>
`
