import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-toggle="{ elements: '.btn', targets: '.toggle', collapseHeight: 'targets' }">

  <div class="list list-2 items-center mb-4">

    <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
      Toggle 0
    </button>

    <button type="button" class="btn btn-md rounded-md ${btnDefault()}">
      Toggle 1
    </button>

  </div>

  <div class="row row-3">

    <div class="w-full md:w-6/12">
      <div class="card rounded-md ${cardDefault()}">
        <div class="media-container rounded-md ratio-37.5">
          <div class="media-inner toggle overflow-hidden transition-all duration-500">
            <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="card rounded-md ${cardDefault()}">
        <div class="media-container rounded-md ratio-37.5">
          <div class="media-inner toggle overflow-hidden transition-all duration-500">
            <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
