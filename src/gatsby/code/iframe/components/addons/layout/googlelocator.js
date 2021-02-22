import React from 'react'
import path from 'path'
const spinner = require('components/snippets/spinner').default
const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default
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
<div class="xt-googlelocator">

  <div class="xt-googlelocator-aside">

    <div class="xt-googlelocator-aside-head">

      <form class="text-sm">
        <div class="xt-row xt-row-x-6 xt-row-y-4">

          <div class="w-full">
            <div class="xt-list flex-nowrap">
              <div class="xt-list-inner flex-auto">
                <input type="text" class="xt-input rounded-l-md ${inputDefault()}" aria-label="Search" placeholder="Search">
                <button type="button" class="xt-button--locate xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
                  ${iconLocate({ classes: 'text-xl -my-1' })}
                </button>
                <button type="button" class="xt-button--search xt-button text-xs py-2 px-3.5 rounded-r-md ${buttonDefault()}">
                  ${iconSearch({ classes: 'text-xl -my-1' })}
                </button>
              </div>
            </div>
          </div>

          <div class="w-full">
            <label class="xt-label-check">
              <input type="radio" class="xt-check xt-radio rounded-full ${switchDefault()}" name="xt-googlelocator-options" value="" checked/>
              <span class="xt-check-content">All types</span>
            </label>
          </div>

          <div class="w-full">
            <label class="xt-label-check">
              <input type="radio" class="xt-check xt-radio rounded-full ${switchDefault()}" name="xt-googlelocator-options" value="restaurant"/>
              <span class="xt-check-content">Restaurant</span>
            </label>
          </div>

          <div class="w-full">
            <label class="xt-label-check" for="xt-googlelocator-options-school">
              <input type="radio" class="xt-check xt-radio rounded-full ${switchDefault()}" id="xt-googlelocator-options-school" name="xt-googlelocator-options" value="school"/>
              <span class="xt-check-content">School</span>
            </label>
          </div>

          <div class="w-full">
            <label class="xt-label-check" for="xt-googlelocator-options-fav">
              <input type="checkbox" class="xt-check xt-switch rounded-full ${switchDefault()}" id="xt-googlelocator-options-fav" name="xt-googlelocator-fav" value="fav"/>
              <span class="xt-check-content">Favourite</span>
            </label>
          </div>

        </div>
      </form>

    </div>

    <div class="xt-googlelocator-aside-body">

      <div class="xt-googlelocator-result xt-googlelocator-result--initial">
        Insert your position and find a place near you
      </div>

      <div class="xt-googlelocator-result xt-googlelocator-result--error">
        Request timed out, retry
      </div>

      <div class="xt-googlelocator-result xt-googlelocator-result--noplace">
        Not a valid place
      </div>

      <div class="xt-googlelocator-result xt-googlelocator-result--empty">
        No place found
      </div>

      <div class="xt-googlelocator-result xt-googlelocator-result--founds">
        <span class="xt-googlelocator-result--found"></span>
        places found
      </div>

      <div class="xt-googlelocator-items">

        <script type="text/x-template">
          <div class="xt-googlelocator-item" tabindex="-1">
            <div class="xt-list">
              <div class="xt-googlelocator-item-content">
                <div class="xt-googlelocator-item-name" data-xt-populate="name"></div>
                <address class="xt-googlelocator-item-address" data-xt-populate="address"></address>
                <div class="xt-googlelocator-item-additional" data-xt-populate="additional"></div>
              </div>
              <a href="#" target="_blank" class="xt-googlelocator-item-directions xt-list xt-list-2 flex-col items-center" title="directions" data-xt-populate="direction">
                ${iconLocate({ classes: 'text-xl -my-1' })}
                <span data-xt-populate="distance"></span>
              </a>
            </div>
          </div>
        </script>

      </div>

    </div>

  </div>

  <div class="xt-googlelocator-main">
    <div class="xt-googlelocator-main-inner">

      <div class="xt-googlelocator-main-map">
      </div>

      <button type="button" class="xt-button--repeat xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
        Search in this area
      </button>

    </div>
  </div>

  <div class="xt-loader absolute z-top inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle">
    <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
      ${spinner({ classes: 'animate-xt-spinner' })}
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
