import React from 'react'
import path from 'path'
const spinner = require('components/snippets/spinner').default

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
<div class="google-locator demo--google-locator">

  <div class="google-locator_aside">

    <div class="google-locator_aside_head">
      <div class="form-default">

        <div class="form-group">
          <div class="group full">
            <input type="text" class="form-item" placeholder="Search"
                   data-xt-google-locator-search-input>
            <span class="group-inner">
              <button type="button" class="btn btn-default" data-xt-google-locator-locate-btn="Locate">
                <span class="icon-xt-locate icon-big"></span>
              </button>
            </span>
            <span class="group-inner">
              <button type="button" class="btn btn-primary" data-xt-google-locator-search-btn>
                <span class="icon-xt-search icon-big"></span>
              </button>
            </span>
          </div>
        </div>

        <div class="form-group">
          <input type="radio" id="google-locator-options-all" name="google-locator-options" value="" checked
                 data-xt-google-locator-option/>
          <label class="form-label" for="google-locator-options-all">
            All types
          </label>
        </div>

        <div class="form-group">
          <input type="radio" id="google-locator-options-restaurant" name="google-locator-options" value="restaurant"
                 data-xt-google-locator-option/>
          <label class="form-label" for="google-locator-options-restaurant">
            Restaurant
          </label>
        </div>

        <div class="form-group">
          <input type="radio" id="google-locator-options-school" name="google-locator-options" value="school"
                 data-xt-google-locator-option/>
          <label class="form-label" for="google-locator-options-school">
            School
          </label>
        </div>

        <div class="form-group">
          <input type="checkbox" id="google-locator-options-fav" name="google-locator-fav" value="fav"
                 data-xt-google-locator-option/>
          <label class="form-label" for="google-locator-options-fav">
            Favourite
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

      <div class="google-locator_main_map" data-xt-google-locator-map></div>

      <button type="button" class="btn btn-primary google-locator_repeat" data-xt-google-locator-repeat>
        Search in this area
      </button>

    </div>
  </div>

  <div class="loader loader-background toggle" data-xt-google-locator-loader>
    <div class="spinner">
      ${spinner({})}
    </div>
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
