import path from 'path'
const spinner = require('components/snippets/spinner').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="card rounded-md ${cardDefault()}" data-xt-mouse-follow>
  <div class="card-md">
    <div class="h4">Default</div>
    <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  </div>
  <span class="loader group mouse-follow overflow-visible pointer-events-none">
    <span class="spinner spinner-animated text-accent-500 -mt-1 ml-4 transition opacity-0 group-active:opacity-100">
      ${spinner({})}
    </span>
  </span>
</div>
`
