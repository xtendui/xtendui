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
<div class="container">
  <div class="row row-3">

    <div class="listing_col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${img({
            classes: 'object-cover object-center',
            ratio: '150%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Lorem ipsum
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing_col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${imgAlt({
            classes: 'object-cover object-center',
            ratio: '150%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Dolor sit amet
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing_col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${img({
            classes: 'object-cover object-center',
            ratio: '150%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Consectetur
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing_col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${imgAlt({
            classes: 'object-cover object-center',
            ratio: '150%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Adipiscing elit
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing_col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${img({
            classes: 'object-cover object-center',
            ratio: '150%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Lorem Ipsum
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing_col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${imgAlt({
            classes: 'object-cover object-center',
            ratio: '150%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Dolor sit amet
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing_col w-full">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${img({
            classes: 'object-cover object-center',
            ratio: '50%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Lorem Ipsum
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing_col w-full">
      <a href="#" class="listing_item">
        <div class="listing_img">
          ${imgAlt({
            classes: 'object-cover object-center',
            ratio: '50%',
            prepend: '<div class="media-mask absolute z-active top-0 lelft-0 w-full h-0 bg-white"></div>',
          })}
        </div>
        <div class="listing_content py-4">
          <div class="listing_title h5">
            Dolor sit amet
          </div>
          <div class="listing_price h6">
            3.772,00 €
          </div>
        </div>
      </a>
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
