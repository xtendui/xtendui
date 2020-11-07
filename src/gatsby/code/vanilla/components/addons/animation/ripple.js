import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const cardDefaultInteractive = require('components/snippets/classes/card-default-interactive').default
const cardPrimaryInteractive = require('components/snippets/classes/card-primary-interactive').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--ripple-default">

  <div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
    Button
  </div>

  <div class="list list-2 items-center">

    <button type="button" class="btn btn-md rounded-md">
      btn
    </button>

    <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
      default
    </button>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      primary
    </button>

    <button type="button" class="btn btn-md rounded-md link">
      link
    </button>

    <button type="button" class="btn btn-md rounded-md text-reset">
      text
    </button>

  </div>

  <div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
    Card
  </div>

  <div class="row row-3">

    <div class="w-full md:w-6/12">
      <a role="button" class="card rounded-md ${cardDefaultInteractive()}">
        <div class="card-md">
          <div class="h4">Default</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <a role="button" class="card rounded-md ${cardPrimaryInteractive()}">
        <div class="card-md">
          <div class="h4">Primary</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </a>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card rounded-md ${cardDefault()}">
        <div class="card-md">
          <div class="h4">Default</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
            default
          </button>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card rounded-md ${cardPrimary()}">
        <div class="card-md">
          <div class="h4">Primary</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
            primary
          </button>
        </div>
      </div>
    </div>

  </div>

</div>
`
