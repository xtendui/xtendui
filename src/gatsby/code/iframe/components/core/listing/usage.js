import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="listing py-10">
  <div class="container">
    <div class="xt-row xt-row-6">

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75 md:xt-ratio-50">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12">
        <a href="#" class="listing-item text-black">
          <div class="xt-media-container bg-gray-200 xt-ratio-75 md:xt-ratio-50">
            <div class="xt-media-inner">
              <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="py-4">
            <div class="xt-h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
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
