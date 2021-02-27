import path from 'path'

const cardMd = require('components/snippets/classes').cardMd
const spinner = require('components/snippets/spinner').default
const cardDefault = require('components/snippets/classes').cardDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-card rounded-md ${cardDefault()}" data-xt-mousefollow>
  <div class="${cardMd()}">
    <div class="xt-h4">Default</div>
    <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  </div>
  <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden group xt-mousefollow">
    <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 -mt-1 ml-4 transition opacity-0 group-active:opacity-100">
      ${spinner({ classes: 'animate-xt-spinner' })}
    </span>
  </span>
</div>
`
