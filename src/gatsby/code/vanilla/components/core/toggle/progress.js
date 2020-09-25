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
<div class="list list-space-2 items-center demo--toggle-progress">

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 0
    <span class="loader loader-y">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 1
    <span class="loader loader-y">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 2
    <span class="loader loader-y">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Toggle 3
    <span class="loader loader-y">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </button>

  <div class="card toggle ${cardToggle()}">
    Target 0
    <span class="loader loader-x loader-size-bottom">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 1
    <span class="loader loader-x loader-size-bottom">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 2
    <span class="loader loader-x loader-size-bottom">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </div>

  <div class="card toggle ${cardToggle()}">
    Target 3
    <span class="loader loader-x loader-size-bottom">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </div>

</div>
`
