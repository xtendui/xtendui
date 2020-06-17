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
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="demo--2020-bertani-mask">

  <div class="block-listing">
    <div class="container">
      <div class="block-listing_inner">
        <div class="row">

          <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${img({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Lorem ipsum
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${imgAlt({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Dolor sit amet
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${img({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Consectetur
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${imgAlt({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Adipiscing elit
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${img({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Lorem Ipsum
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="block-listing_col">
              <a href="#" class="block-listing_item">
                <div class="block-listing_img">
                  ${imgAlt({ classes: 'media-cover' })}
                </div>
                <div class="block-listing_content">
                  <div class="block-listing_title">
                    Dolor sit amet
                  </div>
                  <div class="block-listing_price">
                    3.772,00 €
                  </div>
                </div>
              </a>
          </div>

          <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${img({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Consectetur
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="block-listing_col">
            <a href="#" class="block-listing_item">
              <div class="block-listing_img">
                ${imgAlt({ classes: 'media-cover' })}
              </div>
              <div class="block-listing_content">
                <div class="block-listing_title">
                  Adipiscing elit
                </div>
                <div class="block-listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

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
