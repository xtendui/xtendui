import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center justify-center">

  <div class="xt-card rounded-md ${classes.cardDefault()}">
    <div class="${classes.cardSm()}">
      <div class="xt-h5">Small</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
    <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
        <span class="absolute bg-current h-full bottom-0 left-0 animate-xt-filler-x"></span>
      </span>
    </span>
  </div>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
    Lorem ipsum
    <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
      <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
        <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
        <span class="absolute bg-current h-full bottom-0 left-0 animate-xt-filler-x"></span>
      </span>
    </span>
  </button>

</div>
`
