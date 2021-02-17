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
<div class="demo--multilevel relative">

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-700 -translate-x-10 opacity-0 active:ease-out active:delay-300 active:translate-x-0 active:opacity-100">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Menu
      </div>
      <button type="button" class="multilevel-reset xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()}  hidden">
        Back
      </button>
    </div>

    <nav class="multilevel-list xt-list flex-col">
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

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-700 -translate-x-10 opacity-0 active:ease-out active:delay-300 active:translate-x-0 active:opacity-100" data-xt-group="cat-0">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0
      </div>
      <button type="button" class="multilevel-reset xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list xt-list flex-col">
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
      <button type="button" class="multilevel-reset xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list xt-list flex-col">
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-700 -translate-x-10 opacity-0 active:ease-out active:delay-300 active:translate-x-0 active:opacity-100" data-xt-group="cat-0b">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0b
      </div>
      <button type="button" class="multilevel-reset xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list xt-list flex-col">
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button text-xs py-2 px-3.5 ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-700 -translate-x-10 opacity-0 active:ease-out active:delay-300 active:translate-x-0 active:opacity-100" data-xt-group="cat-1">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 1
      </div>
      <button type="button" class="multilevel-reset xt-button text-3xs py-1.5 px-2.5 ${buttonPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list xt-list flex-col">
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
