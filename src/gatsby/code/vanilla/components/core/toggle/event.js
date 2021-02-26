import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardToggle = require('components/snippets/classes').cardToggle
const inputDefault = require('components/snippets/classes').inputDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Mouseenter
</div>

<div class="xt-list xt-list-3 items-center" data-xt-toggle="{ on: 'mouseenter', off: false }">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 0
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 1
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 2
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Toggle 3
  </button>

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

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Focus
</div>

<form class="text-sm">

  <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ elements: ':scope > input', on: 'focus', off: false }">

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
