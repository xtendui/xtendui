import path from 'path'
const spinner = require('components/snippets/spinner').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardPrimary = require('components/snippets/classes/card-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center justify-center">

  <div class="card ${cardPrimary()}">
    <div class="card-sm">
      <div class="h5">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <div class="loader">
      <div class="spinner spinner-animated text-white">
        ${spinner({})}
      </div>
    </div>
  </div>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    Lorem ipsum
    <span class="loader">
      <span class="spinner spinner-animated text-white">
          ${spinner({})}
      </span>
    </span>
  </button>

</div>
`
