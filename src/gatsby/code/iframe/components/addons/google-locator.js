import React from 'react'
import path from 'path'
const spinner = require('components/snippets/spinner').default
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const inputDefault = require('components/snippets/classes/input-default').default
const switchDefault = require('components/snippets/classes/form-switch-default').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="google-locator">

  <div class="google-locator_aside">

    <div class="google-locator_aside_head">

      <input type="text" class="form-item ${inputDefault()}" placeholder="Search" data-xt-google-locator-search-input>

      <button type="button" class="btn btn-md ${btnDefault()}" data-xt-google-locator-locate-btn="Locate">
        <span class="icon-locate icon-big"></span>
      </button>

      <button type="button" class="btn btn-md ${btnDefault()}" data-xt-google-locator-search-btn>
        <span class="icon-search icon-big"></span>
      </button>

      <div class="row row-space-x-4 row-space-y-3">

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${switchDefault()}" name="google-locator-options" value="" checked data-xt-google-locator-option/>
            <span class="ml-3">All types</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check">
            <input type="radio" class="form-check form-radio ${switchDefault()}" name="google-locator-options" value="restaurant" data-xt-google-locator-option/>
            <span class="ml-3">Restaurant</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check" for="google-locator-options-school">
            <input type="radio" class="form-check form-radio ${switchDefault()}" id="google-locator-options-school" name="google-locator-options" value="school" data-xt-google-locator-option/>
            <span class="ml-3">School</span>
          </label>
        </div>

        <div class="w-full">
          <label class="form-label-check" for="google-locator-options-fav">
            <input type="checkbox" class="form-check form-switch ${switchDefault()}" id="google-locator-options-fav" name="google-locator-fav" value="fav" data-xt-google-locator-option/>
            <span class="ml-3">Favourite</span>
          </label>
        </div>

      </div>

    </div>

    <div class="google-locator_aside_body" data-xt-google-locator-results>

      <div class="google-locator_result" data-xt-google-locator-result-initial>
        Insert your position and find a place near you
      </div>
      <div class="google-locator_result" data-xt-google-locator-result-error>
        Request timed out, retry
      </div>
      <div class="google-locator_result" data-xt-google-locator-result-noplace>
        Not a valid place
      </div>
      <div class="google-locator_result" data-xt-google-locator-result-empty>
        No place found
      </div>
      <div class="google-locator_result" data-xt-google-locator-result-founds>
        <span data-xt-google-locator-result-found></span>
        places found
      </div>

      <div class="google-locator_items" data-xt-google-locator-items>

        <script type="text/x-template">
          <div class="google-locator_item" tabindex="-1">
            <div class="list">
              <div class="google-locator_item_content">
                <div class="google-locator_item_name" data-xt-google-locator-data="name"></div>
                <address class="google-locator_item_address" data-xt-google-locator-data="address"></address>
                <div class="google-locator_item_additional" data-xt-google-locator-data="additional"></div>
              </div>
              <a href="#" target="_blank" class="google-locator_item_directions" title="directions" data-xt-google-locator-data="direction">
                <span class="google-locator_item_directions_icon">
                  <span class="icon-xt-search icon-big"></span>
                </span>
                <span data-xt-google-locator-data="distance"></span>
              </a>
            </div>
          </div>
        </script>

      </div>

    </div>

  </div>

  <div class="google-locator_main">
    <div class="google-locator_main_inner">

      <div class="google-locator_main_map" data-xt-google-locator-map>
      </div>

      <button type="button" class="btn btn-md ${btnPrimary()} google-locator_repeat" data-xt-google-locator-repeat>
        Search in this area
      </button>

    </div>
  </div>

  <div class="loader bg-white bg-opacity-75 toggle" data-xt-google-locator-loader>
    <span class="spinner spinner-animated text-white">
      ${spinner({})}
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
