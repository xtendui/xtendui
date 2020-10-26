import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--multilevel">

  <nav role="navigation" class="toggle" data-multilevel-tab>

    <div class="h5 flex items-center justify-between">
      <div>
        Products
      </div>
      <button type="button" class="btn link hidden" data-multilevel-reset>
        Back
      </button>
    </div>

    <nav class="list flex-col multilevel-list">
      <button type="button" class="btn link" data-xt-group="cat-0" data-multilevel-element>
        Category 0
      </button>
      <button type="button" class="btn link" data-xt-group="cat-1" data-multilevel-element>
        Category 1
      </button>
      <a href="#" class="btn link">
        Link 0
      </a>
      <a href="#" class="btn link">
        Link 1
      </a>
    </nav>

    <div class="h5 flex items-center justify-between">
      <div>
        About
      </div>
    </div>
    <nav class="list flex-col multilevel-list">
      <a href="#" class="btn link">
        Link 0
      </a>
      <a href="#" class="btn link">
        Link 1
      </a>
    </nav>

  </nav>

  <nav role="navigation" class="toggle" data-multilevel-tab data-xt-group="cat-0">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 0
      </div>
      <button type="button" class="btn link" data-multilevel-reset>
        Back
      </button>
    </div>

    <nav class="list flex-col multilevel-list">
      <button type="button" class="btn link" data-xt-group="cat-0a" data-multilevel-element>
        Category 0a
      </button>
      <button type="button" class="btn link" data-xt-group="cat-0b" data-multilevel-element>
        Category 0b
      </button>
      <a href="#" class="btn link">
        Link 0
      </a>
      <a href="#" class="btn link">
        Link 1
      </a>
    </nav>

  </nav>

  <nav role="navigation" class="toggle" data-multilevel-tab data-xt-group="cat-0a">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 0a
      </div>
      <button type="button" class="btn link" data-multilevel-reset>
        Back
      </button>
    </div>

    <nav class="list flex-col multilevel-list">
      <a href="#" class="btn link">
        Link 0
      </a>
      <a href="#" class="btn link">
        Link 1
      </a>
    </nav>

  </nav>

  <nav role="navigation" class="toggle" data-multilevel-tab data-xt-group="cat-0b">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 0b
      </div>
      <button type="button" class="btn link" data-multilevel-reset>
        Back
      </button>
    </div>

    <nav class="list flex-col multilevel-list">
      <a href="#" class="btn link">
        Link 0
      </a>
      <a href="#" class="btn link">
        Link 1
      </a>
    </nav>

  </nav>

  <nav role="navigation" class="toggle" data-multilevel-tab data-xt-group="cat-1">

    <div class="h5 flex items-center justify-between">
      <div>
        Category 1
      </div>
      <button type="button" class="btn link" data-multilevel-reset>
        Back
      </button>
    </div>

    <nav class="list flex-col multilevel-list">
      <a href="#" class="btn link">
        Link 0
      </a>
      <a href="#" class="btn link">
        Link 1
      </a>
    </nav>

  </nav>

</div>
`
