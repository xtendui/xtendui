import React from 'react'
import path from 'path'
const spinner = require('components/snippets/spinner').default
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const inputDefault = require('components/snippets/classes/input-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default
const iconLocate = require('components/snippets/icons').iconLocate
const iconSearch = require('components/snippets/icons').iconSearch

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="googlelocator">

  <div class="googlelocator-aside">

    <div class="googlelocator-aside-head">

      <div class="form">
        <div class="row row-x-6 row-y-4">

          <div class="w-full">
            <div class="list flex-nowrap">
              <div class="list-inner flex-auto">
                <input type="text" class="form-item rounded-l-md ${inputDefault()}" aria-label="Search" placeholder="Search">
                <button type="button" class="btn-locate btn text-xs py-2 px-3.5 rounded-md ${btnDefault()}">
                  ${iconLocate({ classes: 'text-xl -my-1' })}
                </button>
                <button type="button" class="btn-search btn text-xs py-2 px-3.5 rounded-r-md ${btnDefault()}">
                  ${iconSearch({ classes: 'text-xl -my-1' })}
                </button>
              </div>
            </div>
          </div>

          <div class="w-full">
            <label class="form-label-check">
              <input type="radio" class="form-check form-radio rounded-full ${switchDefault()}" name="googlelocator-options" value="" checked/>
              <span class="form-check-content">All types</span>
            </label>
          </div>

          <div class="w-full">
            <label class="form-label-check">
              <input type="radio" class="form-check form-radio rounded-full ${switchDefault()}" name="googlelocator-options" value="restaurant"/>
              <span class="form-check-content">Restaurant</span>
            </label>
          </div>

          <div class="w-full">
            <label class="form-label-check" for="googlelocator-options-school">
              <input type="radio" class="form-check form-radio rounded-full ${switchDefault()}" id="googlelocator-options-school" name="googlelocator-options" value="school"/>
              <span class="form-check-content">School</span>
            </label>
          </div>

          <div class="w-full">
            <label class="form-label-check" for="googlelocator-options-fav">
              <input type="checkbox" class="form-check form-switch rounded-full ${switchDefault()}" id="googlelocator-options-fav" name="googlelocator-fav" value="fav"/>
              <span class="form-check-content">Favourite</span>
            </label>
          </div>

        </div>
      </div>

    </div>

    <div class="googlelocator-aside-body">

      <div class="googlelocator-result googlelocator-result-initial">
        Insert your position and find a place near you
      </div>

      <div class="googlelocator-result googlelocator-result-error">
        Request timed out, retry
      </div>

      <div class="googlelocator-result googlelocator-result-noplace">
        Not a valid place
      </div>

      <div class="googlelocator-result googlelocator-result-empty">
        No place found
      </div>

      <div class="googlelocator-result googlelocator-result-founds">
        <span class="googlelocator-result-found"></span>
        places found
      </div>

      <div class="googlelocator-items">

        <script type="text/x-template">
          <div class="googlelocator-item" tabindex="-1">
            <div class="list">
              <div class="googlelocator-item-content">
                <div class="googlelocator-item-name" data-xt-populate="name"></div>
                <address class="googlelocator-item-address" data-xt-populate="address"></address>
                <div class="googlelocator-item-additional" data-xt-populate="additional"></div>
              </div>
              <a href="#" target="_blank" class="googlelocator-item-directions list list-2 flex-col items-center" title="directions" data-xt-populate="direction">
                ${iconLocate({ classes: 'text-xl -my-1' })}
                <span data-xt-populate="distance"></span>
              </a>
            </div>
          </div>
        </script>

      </div>

    </div>

  </div>

  <div class="googlelocator-main">
    <div class="googlelocator-main-inner">

      <div class="googlelocator-main-map">
      </div>

      <button type="button" class="btn-repeat btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
        Search in this area
      </button>

    </div>
  </div>

  <div class="loader absolute z-top inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 toggle">
    <span class="spinner absolute inset-0 m-auto w-6 h-6 text-accent-500">
      ${spinner({ classes: 'animate-spinner' })}
    </span>
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
