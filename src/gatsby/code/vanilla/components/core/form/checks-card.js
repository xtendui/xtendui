import path from 'path'
const cardDefaultInteractive = require('components/snippets/classes/card-default-interactive').default
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
<div class="xt-row xt-row-6">

  <div class="w-full md:w-6/12">
    <label class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}" checked disabled>
      </div>
    </label>
  </div>

  <div class="w-full md:w-6/12">
    <label class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <input type="checkbox" class="xt-check xt-checkbox rounded-md ${checkDefault()}">
      </div>
    </label>
  </div>

  <div class="w-full md:w-6/12">
    <label class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-card" checked>
      </div>
    </label>
  </div>

  <div class="w-full md:w-6/12">
    <label class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <input type="radio" class="xt-check xt-radio rounded-full ${radioDefault()}" name="radio-card">
      </div>
    </label>
  </div>

  <div class="w-full md:w-6/12">
    <label class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-card" checked>
      </div>
    </label>
  </div>

  <div class="w-full md:w-6/12">
    <label class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <input type="radio" class="xt-check xt-switch rounded-full ${switchDefault()}" name="switch-card">
      </div>
    </label>
  </div>

</div>
`
