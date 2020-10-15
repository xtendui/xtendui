import path from 'path'
const cardDefaultfull = require('components/snippets/classes/card-default-full').default
const iconChevronRight = require('components/snippets/icons').iconChevronRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-3">

  <div class="w-full md:w-6/12">
    <div class="card ${cardDefaultfull()}">
      <div class="card-block p-0">
        <div class="list list-2 flex-no-wrap items-baseline">
          <div>
            ${iconChevronRight({ classes: 'icon-lg' })}
          </div>
          <div>
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="card ${cardDefaultfull()}">
      <div class="card-block p-0">
        <div class="list list-2 flex-no-wrap items-baseline">
          <div>
            <div class="h4">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div>
            ${iconChevronRight({ classes: 'icon-lg' })}
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`
