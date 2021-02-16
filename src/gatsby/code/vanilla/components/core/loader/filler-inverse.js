import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardPrimary = require('components/snippets/classes/card-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center justify-center">

  <div class="xt-card rounded-md ${cardPrimary()}">
    <div class="text-sm p-6">
      <div class="xt-h5 ">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-white text-opacity-50">
        <span class="absolute bg-current opacity-25 w-full h-full"></span>
        <span class="absolute bg-current h-full animate-xt-filler-x"></span>
      </span>
    </span>
  </div>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    Lorem ipsum
    <span class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-white text-opacity-50">
        <span class="absolute bg-current opacity-25 w-full h-full"></span>
        <span class="absolute bg-current h-full animate-xt-filler-x"></span>
      </span>
    </span>
  </button>

</div>
`
