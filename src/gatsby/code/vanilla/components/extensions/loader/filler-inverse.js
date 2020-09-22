import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardPrimary = require('components/snippets/classes/card-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center justify-center">

  <div class="card ${cardPrimary()}">
    <div class="card-block card-block-small text-sm">
      <div class="h5">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <span class="loader loader-x loader-x-animated">
      <span class="filler text-white">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </div>

  <button type="button" class="btn btn-medium ${btnPrimary()}">
    Lorem ipsum
    <span class="loader loader-x loader-x-animated">
      <span class="filler text-white">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </button>

</div>
`
