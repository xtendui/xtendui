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
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="googlelocator demo--googlelocator">

  <div class="googlelocator_aside">

    <div class="googlelocator_aside_head">
      <div class="form form-default">

        <div class="form-group">
          <div class="group full">
            <input type="text" class="form-item" placeholder="Search"
                   data-xt-googlelocator-search-input>
            <span class="group-inner">
              <button type="button" class="btn btn-default" data-xt-googlelocator-locate-btn="Locate">
                <span class="icon-xt-locate icon-big"></span>
              </button>
            </span>
            <span class="group-inner">
              <button type="button" class="btn btn-primary" data-xt-googlelocator-search-btn>
                <span class="icon-xt-search icon-big"></span>
              </button>
            </span>
          </div>
        </div>

        <div class="form-group">
          <input type="radio" id="googlelocator-options-all" name="googlelocator-options" value="" checked
                 data-xt-googlelocator-option/>
          <label class="form-label" for="googlelocator-options-all">
            All types
          </label>
        </div>

        <div class="form-group">
          <input type="radio" id="googlelocator-options-restaurant" name="googlelocator-options" value="restaurant"
                 data-xt-googlelocator-option/>
          <label class="form-label" for="googlelocator-options-restaurant">
            Restaurant
          </label>
        </div>

        <div class="form-group">
          <input type="radio" id="googlelocator-options-school" name="googlelocator-options" value="school"
                 data-xt-googlelocator-option/>
          <label class="form-label" for="googlelocator-options-school">
            School
          </label>
        </div>

        <div class="form-group">
          <input type="checkbox" id="googlelocator-options-fav" name="googlelocator-fav" value="fav"
                 data-xt-googlelocator-option/>
          <label class="form-label" for="googlelocator-options-fav">
            Favourite
          </label>
        </div>

      </div>
    </div>

    <div class="googlelocator_aside_body" data-xt-googlelocator-results>

      <div class="googlelocator_result" data-xt-googlelocator-result-initial>
        Insert your position and find a place near you
      </div>
      <div class="googlelocator_result" data-xt-googlelocator-result-error>
        Request timed out, retry
      </div>
      <div class="googlelocator_result" data-xt-googlelocator-result-noplace>
        Not a valid place
      </div>
      <div class="googlelocator_result" data-xt-googlelocator-result-empty>
        No place found
      </div>
      <div class="googlelocator_result" data-xt-googlelocator-result-founds>
        <span data-xt-googlelocator-result-found></span>
        places found
      </div>

      <div class="googlelocator_items">
        <div class="list-block" data-xt-googlelocator-items>

          <script type="text/x-template">
            <div class="googlelocator_item">
              <div class="list">
                <div class="googlelocator_item_content">
                  <div class="googlelocator_item_name" data-xt-googlelocator-data="name"></div>
                  <address class="googlelocator_item_address" data-xt-googlelocator-data="address"></address>
                  <div class="googlelocator_item_additional" data-xt-googlelocator-data="additional"></div>
                </div>
                <a href="#" target="_blank" class="googlelocator_item_directions" title="directions" data-xt-googlelocator-data="direction">
                  <span class="googlelocator_item_directions_icon">
                    <span class="icon-xt-search icon-big"></span>
                  </span>
                  <span data-xt-googlelocator-data="distance"></span>
                </a>
              </div>
            </div>
          </script>

        </div>
      </div>

    </div>

  </div>

  <div class="googlelocator_main">
    <div class="googlelocator_main_inner">

      <div class="googlelocator_main_map" data-xt-googlelocator-map></div>

      <button type="button" class="btn btn-primary googlelocator_repeat" data-xt-googlelocator-repeat>
        Search in this area
      </button>

    </div>
  </div>

  <div class="loader loader-spinner loader-background toggle-block" data-xt-googlelocator-loader>
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
