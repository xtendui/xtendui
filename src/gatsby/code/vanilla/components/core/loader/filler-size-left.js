import path from 'path'
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
    <div class="card-block card-block-sm text-sm">
      <div class="h5">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <span class="loader loader-y loader-y-animated loader-size-left">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </div>

  <button type="button" class="btn btn-md ${btnDefault()}">
    Lorem ipsum
    <span class="loader loader-y loader-y-animated loader-size-left">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </button>

</div>
`
