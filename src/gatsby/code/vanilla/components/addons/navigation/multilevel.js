import path from 'path'

const buttonSm = require('components/snippets/classes').buttonSm
const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="multilevel relative demo--multilevel" data-xt-toggle="{
    elements: '.multilevel-reset, .multilevel-list > button',
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
      <button type="button" class="hidden multilevel-reset" data-xt-group="initial">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col multilevel-list">
      <button type="button" class="xt-button ${buttonMd()} ${buttonDefault()}" data-xt-group="cat-0">
        Category 0
      </button>
      <button type="button" class="xt-button ${buttonMd()} ${buttonDefault()}" data-xt-group="cat-1">
        Category 1
      </button>
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100" data-xt-group="cat-0">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0
      </div>
      <button type="button" class="xt-button ${buttonSm()} ${buttonPrimary()} multilevel-reset" data-xt-group="initial">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col multilevel-list">
      <button type="button" class="xt-button ${buttonMd()} ${buttonDefault()}" data-xt-group="cat-0a">
        Category 0a
      </button>
      <button type="button" class="xt-button ${buttonMd()} ${buttonDefault()}" data-xt-group="cat-0b">
        Category 0b
      </button>
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute" data-xt-group="cat-0a">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0a
      </div>
      <button type="button" class="xt-button ${buttonSm()} ${buttonPrimary()} multilevel-reset" data-xt-group="cat-0">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col multilevel-list">
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100" data-xt-group="cat-0b">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 0b
      </div>
      <button type="button" class="xt-button ${buttonSm()} ${buttonPrimary()} multilevel-reset" data-xt-group="cat-0">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col multilevel-list">
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

  <nav class="xt-toggle xt-toggle-absolute transform ease-out duration-500 -translate-x-10 opacity-0 active:ease-out active:delay-200 active:translate-x-0 active:opacity-100" data-xt-group="cat-1">

    <div class="xt-h5  flex items-center justify-between">
      <div>
        Category 1
      </div>
      <button type="button" class="xt-button ${buttonSm()} ${buttonPrimary()} multilevel-reset" data-xt-group="initial">
        Back
      </button>
    </div>

    <nav class="xt-list flex-col multilevel-list">
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 0
      </a>
      <a href="#" class="xt-button ${buttonMd()} ${buttonDefault()}">
        Link 1
      </a>
    </nav>

  </nav>

</div>
`
