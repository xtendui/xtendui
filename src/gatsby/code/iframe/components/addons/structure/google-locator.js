import React from 'react'
import path from 'path'
const spinner = require('components/snippets/spinner').default
const btnDefaultGroup = require('components/snippets/classes/btn-default-group').default
const btnPrimary = require('components/snippets/classes/btn-primary').default
const inputDefaultGroup = require('components/snippets/classes/input-default-group').default
const switchDefault = require('components/snippets/classes/form-switch-default').default
const iconLocate = require('components/snippets/icons').iconLocate
const iconSearch = require('components/snippets/icons').iconSearch

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

  <div class="google-locator-aside">

    <div class="google-locator-aside-head">

      <div class="form">
        <div class="row row-x-3 row-y-2">

          <div class="w-full">
            <div class="list">
              <div class="list-inner flex-auto">
                <input type="text" class="form-item rounded-l-md ${inputDefaultGroup()}" placeholder="Search">
                <button type="button" class="btn-locate btn btn-md rounded-md ${btnDefaultGroup()}">
                  ${iconLocate({ classes: 'icon-lg' })}
                </button>
                <button type="button" class="btn-search btn btn-md rounded-r-md ${btnDefaultGroup()}">
                  ${iconSearch({ classes: 'icon-lg' })}
                </button>
              </div>
            </div>
          </div>

          <div class="w-full">
            <label class="form-label-check">
              <input type="radio" class="form-check form-radio rounded-full ${switchDefault()}" name="google-locator-options" value="" checked/>
              <span class="ml-3">All types</span>
            </label>
          </div>

          <div class="w-full">
            <label class="form-label-check">
              <input type="radio" class="form-check form-radio rounded-full ${switchDefault()}" name="google-locator-options" value="restaurant"/>
              <span class="ml-3">Restaurant</span>
            </label>
          </div>

          <div class="w-full">
            <label class="form-label-check" for="google-locator-options-school">
              <input type="radio" class="form-check form-radio rounded-full ${switchDefault()}" id="google-locator-options-school" name="google-locator-options" value="school"/>
              <span class="ml-3">School</span>
            </label>
          </div>

          <div class="w-full">
            <label class="form-label-check" for="google-locator-options-fav">
              <input type="checkbox" class="form-check form-switch rounded-full ${switchDefault()}" id="google-locator-options-fav" name="google-locator-fav" value="fav"/>
              <span class="ml-3">Favourite</span>
            </label>
          </div>

        </div>
      </div>

    </div>

    <div class="google-locator-aside-body">

      <div class="google-locator-result google-locator-result-initial">
        Insert your position and find a place near you
      </div>

      <div class="google-locator-result google-locator-result-error">
        Request timed out, retry
      </div>

      <div class="google-locator-result google-locator-result-noplace">
        Not a valid place
      </div>

      <div class="google-locator-result google-locator-result-empty">
        No place found
      </div>

      <div class="google-locator-result google-locator-result-founds">
        <span class="google-locator-result-found"></span>
        places found
      </div>

      <div class="google-locator-items">

        <script type="text/x-template">
          <div class="google-locator-item" tabindex="-1">
            <div class="list">
              <div class="google-locator-item-content">
                <div class="google-locator-item-name" data-xt-populate="name"></div>
                <address class="google-locator-item-address" data-xt-populate="address"></address>
                <div class="google-locator-item-additional" data-xt-populate="additional"></div>
              </div>
              <a href="#" target="_blank" class="google-locator-item-directions list list-1 flex-col items-center" title="directions" data-xt-populate="direction">
                ${iconLocate({ classes: 'icon-lg' })}
                <span data-xt-populate="distance"></span>
              </a>
            </div>
          </div>
        </script>

      </div>

    </div>

  </div>

  <div class="google-locator-main">
    <div class="google-locator-main-inner">

      <div class="google-locator-main-map">
      </div>

      <button type="button" class="btn-repeat btn btn-md rounded-md ${btnPrimary()}">
        Search in this area
      </button>

    </div>
  </div>

  <div class="loader bg-white bg-opacity-75 toggle">
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
