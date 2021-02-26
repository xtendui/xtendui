import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonDefault = require('components/snippets/classes').buttonDefault
const cardDefault = require('components/snippets/classes').cardDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-toggle="{ elements: '.xt-button', targets: '.xt-toggle', collapseHeight: 'targets' }">

  <div class="xt-list xt-list-3 items-center mb-4">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
      Toggle 0
    </button>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
      Toggle 1
    </button>

  </div>

  <div class="xt-row xt-row-6">

    <div class="w-full md:w-6/12">
      <div class="xt-card rounded-md ${cardDefault()}">
        <div class="xt-media-container bg-gray-200 rounded-md xt-ratio-37.5">
          <div class="xt-media-inner xt-toggle overflow-hidden transition-all duration-500" data-xt-duration="500">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12">
      <div class="xt-card rounded-md ${cardDefault()}">
        <div class="xt-media-container bg-gray-200 rounded-md xt-ratio-37.5">
          <div class="xt-media-inner xt-toggle overflow-hidden transition-all duration-500" data-xt-duration="500">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
