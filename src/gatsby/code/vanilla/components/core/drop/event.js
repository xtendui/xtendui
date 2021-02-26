import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const buttonDefaultDrop = require('components/snippets/classes').buttonDefaultDrop
const buttonPrimaryDrop = require('components/snippets/classes').buttonPrimaryDrop
const cardWhite = require('components/snippets/classes').cardWhite
const cardPrimary = require('components/snippets/classes').cardPrimary
const inputDefault = require('components/snippets/classes').inputDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">

  <div class="xt-drop-item">

    <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
      mouse
    </button>

    <div class="xt-drop p-4">
      <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="xt-list flex-col">
          <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Dolor sit
          </button>
          <div data-xt-drop="{ position: 'right-start' }">

            <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
              nested
            </button>

            <div class="xt-drop p-4">
              <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardPrimary()}">
                <nav class="xt-list flex-col">
                  <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonPrimaryDrop()}">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonPrimaryDrop()}">
                    Dolor sit
                  </button>
                  <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonPrimaryDrop()}">
                    Amet
                  </button>
                </nav>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </div>

  </div>

</div>

<form class="text-sm mt-4">
  <div data-xt-drop="{ elements: ':scope > input', on: 'focus', off: false }">

    <input type="text" class="xt-input rounded-md ${inputDefault()}" aria-label="Focus" placeholder="Focus">

    <div class="xt-drop p-4">
      <div class="xt-card w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="xt-list flex-col">
          <a href="#" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Dolor sit
          </button>
          <button type="button" class="xt-button text-2xs py-1.5 px-6 ${buttonDefaultDrop()}">
            Amet
          </button>
        </nav>
      </div>
    </div>

  </div>
</div>
`
