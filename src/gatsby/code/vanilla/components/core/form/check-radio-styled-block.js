import path from 'path'
const checkDefault = require('components/snippets/classes/form-check-default').default
const radioDefault = require('components/snippets/classes/form-radio-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>
  <div class="row row-space-x-4 row-space-y-3">

    <div class="w-full">
      <label class="label-check">
        <input type="checkbox" class="checkbox ${checkDefault()}" checked>
        <span class="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a></span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="checkbox" class="checkbox ${checkDefault()}">
        <span class="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a></span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="radio ${radioDefault()}" name="radio-styled-block" checked>
        <span class="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a></span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="radio ${radioDefault()}" name="radio-styled-block">
        <span class="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a></span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="checkbox" class="switch ${radioDefault()}">
        <span class="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a></span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="switch ${switchDefault()}" name="switch-styled-block" checked>
        <span class="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a></span>
      </label>
    </div>

    <div class="w-full">
      <label class="label-check">
        <input type="radio" class="switch ${switchDefault()}" name="switch-styled-block">
        <span class="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a></span>
      </label>
    </div>

  </div>
</form>
`
