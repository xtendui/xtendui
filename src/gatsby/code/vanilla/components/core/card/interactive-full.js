import path from 'path'
const cardDefaultFullInteractive = require('components/snippets/classes/card-default-full-interactive').default
const cardPrimaryFullInteractive = require('components/snippets/classes/card-primary-full-interactive').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3">

  <div class="w-full md:w-6/12">
    <a role="button" class="card card-default-full-interactive ${cardDefaultFullInteractive()}">
      <div class="card-design"></div>
      <div class="card-block card-block-medium p-0">
        <div class="h4">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="card card-primary-full-interactive ${cardPrimaryFullInteractive()}">
      <div class="card-design"></div>
      <div class="card-block card-block-medium p-0">
        <div class="h4">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

</div>
`
