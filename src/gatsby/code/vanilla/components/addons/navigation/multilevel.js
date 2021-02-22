import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-multilevel relative demo--multilevel" data-xt-toggle="{
      elements: '.xt-multilevel-reset, .xt-multilevel-list > button',
      targets: ':scope > .xt-toggle',
      min: 1,
      duration: 500,
      queue: false
    }">

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100" data-xt-group="initial">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Menu
      </div>
      <button type="button" class="hidden xt-multilevel-reset" data-xt-group="initial">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col xt-multilevel-list">
      <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}" data-xt-group="cat-0">
        Category 0
      </button>
      <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}" data-xt-group="cat-1">
        Category 1
      </button>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100" data-xt-group="cat-0">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0
      </div>
      <button type="button" class="xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} xt-multilevel-reset" data-xt-group="initial">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col xt-multilevel-list">
      <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}" data-xt-group="cat-0a">
        Category 0a
      </button>
      <button type="button" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}" data-xt-group="cat-0b">
        Category 0b
      </button>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute" data-xt-group="cat-0a">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0a
      </div>
      <button type="button" class="xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} xt-multilevel-reset" data-xt-group="cat-0">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col xt-multilevel-list">
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100" data-xt-group="cat-0b">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0b
      </div>
      <button type="button" class="xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} xt-multilevel-reset" data-xt-group="cat-0">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col xt-multilevel-list">
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100" data-xt-group="cat-1">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 1
      </div>
      <button type="button" class="xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} xt-multilevel-reset" data-xt-group="initial">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col xt-multilevel-list">
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

</div>
`
