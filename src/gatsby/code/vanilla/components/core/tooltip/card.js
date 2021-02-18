import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardWhite = require('components/snippets/classes/card-white').default
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      asset
    </button>

    <div class="xt-tooltip p-2">
      <div class="xt-card w-80 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="xt-media-container bg-gray-700 rounded-md xt-ratio-37.5">
          <div class="xt-media-inner">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      asset and text
    </button>

    <div class="xt-tooltip p-2">
      <div class="xt-card w-80 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="xt-media-container bg-gray-700 rounded-t-md xt-ratio-37.5">
          <div class="xt-media-inner">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
          </div>
        </div>
        <div class="text-base p-8">
          <div class="xt-h4 ">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

</div>
`
