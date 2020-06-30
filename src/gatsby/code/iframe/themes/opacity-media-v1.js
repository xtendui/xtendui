import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="block-listing">
  <div class="container">
    <div class="block-listing_inner">
      <div class="row">

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col block-listing_col--big">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="block-listing_col block-listing_col--big">
          <a href="#" class="card block-listing_item">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-asset">
                  ${imgAlt({})}
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
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
