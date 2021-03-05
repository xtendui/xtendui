import path from 'path'

const cardDefaultFull = require('components/snippets/classes').cardDefaultFull
const iconPackage = require('components/snippets/icons').iconPackage
const iconChevronRight = require('components/snippets/icons').iconChevronRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-card rounded-md ${cardDefaultFull()}">
  <div class="text-base">
    <div class="xt-list xt-list-6 md:flex-nowrap items-baseline">
      <div>
        ${iconPackage({ classes: 'text-3xl' })}
      </div>
      <div>
        <div class="xt-h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
      <div class="self-end justify-self-end">
        ${iconChevronRight({ classes: 'text-3xl' })}
      </div>
    </div>
  </div>
</div>
`
