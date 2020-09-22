import path from 'path'
const spinner = require('components/snippets/spinner').default
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center justify-center">

  <div class="card ${cardDefault()}">
    <div class="card-block card-block-small text-sm">
      <div class="h5">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <div class="loader bg-white bg-opacity-75">
      <div class="spinner spinner-animated text-accent-500">
        ${spinner({})}
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Lorem ipsum
    <span class="loader bg-white bg-opacity-75">
      <span class="spinner spinner-animated text-accent-500">
          ${spinner({})}
      </span>
    </span>
  </button>

</div>
`
