import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--multilevel relative">

  <nav class="toggle toggle-absolute transform ease-out duration-700 -translate-x-10 opacity-0 active:ease-out active:delay-300 active:translate-x-0 active:opacity-100">

    <div class="h5 flex items-center justify-between">
      <div>
        Menu
      </div>
      <button type="button" class="multilevel-reset btn text-3xs py-1.5 px-2.5 ${btnPrimary()}  hidden">
        Back
      </button>
    </div>

    <nav class="multilevel-list list flex-col">
      <button type="button" class="btn text-xs py-2 px-3.5 ${btnDefault()}" data-xt-group="cat-0">
        Category 0
      </button>
      <button type="button" class="btn text-xs py-2 px-3.5 ${btnDefault()}" data-xt-group="cat-1">
        Category 1
      </button>
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 0
      </a>
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="toggle toggle-absolute" data-xt-group="cat-0">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 0
      </div>
      <button type="button" class="multilevel-reset btn text-3xs py-1.5 px-2.5 ${btnPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list list flex-col">
      <button type="button" class="btn text-xs py-2 px-3.5 ${btnDefault()}" data-xt-group="cat-0a">
        Category 0a
      </button>
      <button type="button" class="btn text-xs py-2 px-3.5 ${btnDefault()}" data-xt-group="cat-0b">
        Category 0b
      </button>
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 0
      </a>
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="toggle toggle-absolute" data-xt-group="cat-0a">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 0a
      </div>
      <button type="button" class="multilevel-reset btn text-3xs py-1.5 px-2.5 ${btnPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list list flex-col">
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 0
      </a>
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="toggle toggle-absolute" data-xt-group="cat-0b">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 0b
      </div>
      <button type="button" class="multilevel-reset btn text-3xs py-1.5 px-2.5 ${btnPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list list flex-col">
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 0
      </a>
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="toggle toggle-absolute" data-xt-group="cat-1">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 1
      </div>
      <button type="button" class="multilevel-reset btn text-3xs py-1.5 px-2.5 ${btnPrimary()} ">
        Back
      </button>
    </div>

    <nav class="multilevel-list list flex-col">
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 0
      </a>
      <a href="#" class="btn text-xs py-2 px-3.5 ${btnDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

</div>
`
