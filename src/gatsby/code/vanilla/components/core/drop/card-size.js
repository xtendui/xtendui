import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardSm = require('components/snippets/classes').cardSm
const cardMd = require('components/snippets/classes').cardMd
const cardLg = require('components/snippets/classes').cardLg
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardWhite = require('components/snippets/classes').cardWhite
const iconX = require('components/snippets/icons').iconX

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      small
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-64 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-lg" aria-label="Close">
          ${iconX()}
        </button>
        <div class="${cardSm()}">
          <div class="xt-h5">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      medium
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-80 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="${cardMd()}">
          <div class="xt-h4">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      large
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-96 rounded-md shadow-drop ${cardWhite()}">
        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
          ${iconX()}
        </button>
        <div class="${cardLg()}">
          <div class="xt-h3">Lorem ipsum</div>
          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        </div>
      </div>
    </div>

  </div>

</div>
`
