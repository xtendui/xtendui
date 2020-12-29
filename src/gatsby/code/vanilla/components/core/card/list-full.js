import path from 'path'
const cardDefaultfull = require('components/snippets/classes/card-default-full').default
const iconPackage = require('components/snippets/icons').iconPackage

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="card rounded-md ${cardDefaultfull()}">
  <div class="card-md p-0">
    <div class="list list-3 flex-nowrap items-baseline">
      <div>
        ${iconPackage({ classes: 'icon-lg text-2xl' })}
      </div>
      <div>
        <div class="h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>
</div>
`