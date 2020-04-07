import React from 'react'
import path from 'path'

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
<div class="googlelocator googlelocator-default">

    <div class="googlelocator_aside">

        <div class="googlelocator_aside_head">

            <h1 class="h5">
                polyphoto.storelocator.title
            </h1>

            <div class="form-item field">
                <div class="group full">
                    <input type="text" class="form-input" placeholder="polyphoto.storelocator.input"
                           data-xt-googlelocator-search-input>
                    <span class="group_inner">
                        <button type="button" class="btn googlelocator_locate" data-xt-googlelocator-locate-btn="polyphoto.storelocator.locate">
                            <span><span class="icon-locate"></span></span>
                        </button>
                    </span>
                    <span class="group_inner">
                        <button type="button" class="btn btn--primary" data-xt-googlelocator-search-btn>
                            <span><span class="icon-search"></span></span>
                        </button>
                    </span>
                </div>
            </div>

            <div class="form-item--tiny field">
                <input type="radio" id="googlelocator-options-all" name="googlelocator-options" value="" checked
                       data-xt-googlelocator-option/>
                <label for="googlelocator-options-all" class="form-label">Tutti i Rivenditori</label>
            </div>

            <div class="form-item--tiny field">
                <input type="radio" id="googlelocator-options-opd" name="googlelocator-options" value="opd"
                       data-xt-googlelocator-option/>
                <label for="googlelocator-options-opd" class="form-label">Olympus Premium Dealer</label>
            </div>

            <div class="form-item--tiny field">
                <input type="radio" id="googlelocator-options-opdPro" name="googlelocator-options" value="opd_pro"
                       data-xt-googlelocator-option/>
                <label for="googlelocator-options-opdPro" class="form-label">Olympus Premium Dealer Pro</label>
            </div>

            <div class="form-item--tiny field">
                <input type="radio" id="googlelocator-options-opdProPlus" name="googlelocator-options" value="opd_pro_plus"
                       data-xt-googlelocator-option/>
                <label for="googlelocator-options-opdProPlus" class="form-label">Olympus Premium Dealer Pro +</label>
            </div>

            <div class="form-item--tiny field">
                <input type="checkbox" id="googlelocator-options-pickupinstore" name="googlelocator-pickupinstore" value="isAvailableForPickup"
                       data-xt-googlelocator-option/>
                <label for="googlelocator-options-pickupinstore" class="form-label">Disponibili al ritiro in negozio</label>
            </div>

        </div>

        <div class="googlelocator_aside_body" data-xt-googlelocator-results>

            <div class="googlelocator_result" data-xt-googlelocator-result-initial>
                polyphoto.storelocator.initial_message
            </div>
            <div class="googlelocator_result" data-xt-googlelocator-result-error>
                polyphoto.storelocator.hang_message
            </div>
            <div class="googlelocator_result" data-xt-googlelocator-result-noplace>
                polyphoto.storelocator.noplace_message
            </div>
            <div class="googlelocator_result" data-xt-googlelocator-result-empty>
                polyphoto.storelocator.empty_message
            </div>
            <div class="googlelocator_result" data-xt-googlelocator-result-founds>
                <span data-xt-googlelocator-result-found></span>
                polyphoto.storelocator.results_found
            </div>

            <div class="googlelocator_items" data-xt-googlelocator-items>

                <script type="text/x-template">
                    <div class="googlelocator_item">
                        <div class="googlelocator_item_content">
                            <div class="googlelocator_item_name" data-xt-googlelocator-data="name"></div>
                            <address class="googlelocator_item_address" data-xt-googlelocator-data="address"></address>
                            <div class="googlelocator_item_additional" data-xt-googlelocator-data="additional"></div>
                        </div>
                        <a href="#" target="_blank" class="googlelocator_item_directions" data-xt-googlelocator-data="direction">
                            <span class="googlelocator_item_directions_icon">
                                <span class="icon-directions"></span>
                            </span>
                            <span>polyphoto.storelocator.directions</span>
                            <span data-xt-googlelocator-data="distance"></span>
                        </a>
                    </div>
                </script>

            </div>

        </div>

    </div>

    <div class="googlelocator_main">
        <div class="googlelocator_main_inner">

            <div class="googlelocator_main_map" data-xt-googlelocator-map></div>

            <button type="button" class="btn btn--primary googlelocator_repeat" data-xt-googlelocator-repeat>
                <span>polyphoto.storelocator.repeat</span>
            </button>

        </div>
    </div>

    <div class="loader loader--x loader--size-top loader--background loader--toggle" data-xt-googlelocator-loader>
        <div class="spinner">
            <svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg>
            <svg viewBox="0 0 250 250" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"></circle></svg>
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

