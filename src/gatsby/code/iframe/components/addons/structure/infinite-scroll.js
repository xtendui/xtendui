import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt
const spinner = require('components/snippets/spinner').default

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
<div class="listing"
    data-xt-infinite-scroll="{ max: 2 }">
  <div class="container">

    <div class="listing_inner">
      <div class="row"
        data-xt-infinite-scroll-items>

        <div class="listing_col">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${img({ classes: 'media-cover' })}
            </div>
            <div class="listing_content">
              <div class="listing_title">
                Lorem ipsum
              </div>
              <div class="listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${imgAlt({ classes: 'media-cover' })}
            </div>
            <div class="listing_content">
              <div class="listing_title">
                Dolor sit amet
              </div>
              <div class="listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${img({ classes: 'media-cover' })}
            </div>
            <div class="listing_content">
              <div class="listing_title">
                Consectetur
              </div>
              <div class="listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${imgAlt({ classes: 'media-cover' })}
            </div>
            <div class="listing_content">
              <div class="listing_title">
                Adipiscing elit
              </div>
              <div class="listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col">
          <a href="#" class="listing_item">
            <div class="listing_img">
              ${img({ classes: 'media-cover' })}
            </div>
            <div class="listing_content">
              <div class="listing_title">
                Lorem Ipsum
              </div>
              <div class="listing_price">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing_col">
            <a href="#" class="listing_item">
              <div class="listing_img">
                ${imgAlt({ classes: 'media-cover' })}
              </div>
              <div class="listing_content">
                <div class="listing_title">
                  Dolor sit amet
                </div>
                <div class="listing_price">
                  3.772,00 €
                </div>
              </div>
            </a>
        </div>

      </div>
    </div>

    <div class="infinite-scroll"
       data-xt-infinite-scroll-scroll>
      <div class="list-block">
        <div class="infinite-scroll--trigger">
          <button type="button" class="btn btn-primary btn-wide btn-tall"
                  data-xt-infinite-scroll-trigger>
            <span class="content">
              Show more products
            </span>
            <span class="content-nomore">
              There are no more products
            </span>
            <span class="loader loader-spinner infinite-scroll--spinner">
              <span class="spinner">
                ${spinner({})}
              </span>
            </span>
          </button>
        </div>
        <div class="infinite-scroll--more">
          Page <span data-xt-infinite-scroll-num></span> of <span data-xt-infinite-scroll-tot></span>
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
