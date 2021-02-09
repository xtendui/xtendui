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
<div class="py-10">

  <div class="slider slider--listing" data-xt-slider="{ contain: true, jumpOverflow: true }">
    <div class="slides">
      <div class="container">

        <div class="h2 mb-8">Latest Products</div>

        <div class="slides-inner row row-4">

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
                <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                  <div class="list list-1.5 items-center flex-nowrap">
                    <div class="text-xl font-semibold">
                      -35%
                    </div>
                    <div class="max-w-xs text-xs leading-tight uppercase opacity-50">
                      For Exhibition<br/>Renewal
                    </div>
                  </div>
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
                <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
                  <div class="list list-1.5 items-center flex-nowrap">
                    <div class="text-xl font-semibold">
                      -40%
                    </div>
                    <div class="max-w-xs text-xs leading-tight uppercase opacity-50">
                      Black<br/>Friday
                    </div>
                  </div>
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Lorem ipsum
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

          <div class="slide w-6/12 md:w-4/12">
            <a href="#" class="listing-item block">
              <div class="media-container bg-gray-700 ratio-75">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                </div>
              </div>
              <div class="listing-content py-4">
                <div class="h5">
                  Dolor sit amet
                </div>
                <div class="-mt-2 text-sm font-semibold">
                  3.772,00 €
                </div>
              </div>
            </a>
          </div>

        </div>

        <nav class="slider-pagination slider-ui">
          <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
          </button>
        </nav>

      </div>
    </div>
  </div>

  <div class="container">

    <div class="h2 mb-8">Category</div>

    <div class="row row-6">

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
            <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
              <div class="list list-1.5 items-center flex-nowrap">
                <div class="text-xl font-semibold">
                  -35%
                </div>
                <div class="max-w-xs text-xs leading-tight uppercase opacity-50">
                  For Exhibition<br/>Renewal
                </div>
              </div>
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
            <div class="absolute top-0 left-0 py-2 px-4 bg-black bg-opacity-50 text-white">
              <div class="list list-1.5 items-center flex-nowrap">
                <div class="text-xl font-semibold">
                  -40%
                </div>
                <div class="max-w-xs text-xs leading-tight uppercase opacity-50">
                  Black<br/>Friday
                </div>
              </div>
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Lorem Ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Lorem ipsum
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Dolor sit amet
            </div>
            <div class="-mt-2 text-sm font-semibold">
              3.772,00 €
            </div>
          </div>
        </a>
      </div>

      <div class="w-6/12 md:w-4/12">
        <a href="#" class="listing-item block">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
          <div class="listing-content py-4">
            <div class="h5">
              Lorem ipsum
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
