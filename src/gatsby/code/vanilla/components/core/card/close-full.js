import path from 'path'

const cardDefaultFull = require('components/snippets/classes').cardDefaultFull
const cardPrimaryFull = require('components/snippets/classes').cardPrimaryFull
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-row xt-row-6">

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardDefaultFull()}">
      <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-0 text-2xl" aria-label="Close">
        ${iconX()}
      </button>
      <div class="text-base p-0">
        <div class="xt-h4 ">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardPrimaryFull()}">
      <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-0 text-2xl" aria-label="Close">
        ${iconX()}
      </button>
      <div class="text-base p-0">
        <div class="xt-h4 ">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

</div>
`
