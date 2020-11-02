import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt
const spinner = require('components/snippets/spinner').default
const btnDefault = require('components/snippets/classes/btn-default').default
const btnPrimary = require('components/snippets/classes/btn-primary').default

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
<div class="listing" data-xt-infinite-scroll="{
    get: false,
    max: 4,
    elements: {
      scrollOffset: '.infinite-scroll',
      trigger: '.infinite-scroll-trigger .btn',
      reset: '.infinite-scroll-pre .btn',
      items: '.listing-inner .row',
      spaceAdditional: '.infinite-scroll-pre',
      pagination: '.infinite-scroll-pagination',
      item: ':scope > *',
    },
  }">
  <div class="container">

    <div class="infinite-scroll-pre mb-4">
      <div class="list list-1 flex-col items-center">
        <div>
          <button type="button" class="btn btn-md ${btnDefault()}">
            Load previous pages
          </button>
        </div>
      </div>
    </div>

    <div class="listing-inner">
      <div class="row row-3" >

        <div class="listing-col w-full md:w-6/12 lg:w-4/12">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${img({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Lorem ipsum
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing-col w-full md:w-6/12 lg:w-4/12">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Dolor sit amet
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing-col w-full md:w-6/12 lg:w-4/12">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${img({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Consectetur
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing-col w-full md:w-6/12 lg:w-4/12">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Adipiscing elit
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing-col w-full md:w-6/12 lg:w-4/12">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${img({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Lorem Ipsum
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing-col w-full md:w-6/12 lg:w-4/12">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '75%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Dolor sit amet
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing-col w-full">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${img({ classes: 'object-cover object-center', ratio: '37.5%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Lorem Ipsum
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

        <div class="listing-col w-full">
          <a href="https://github.com/minimit/xtendui" class="listing-item">
            <div class="listing-img">
              ${imgAlt({ classes: 'object-cover object-center', ratio: '37.5%' })}
            </div>
            <div class="listing-content py-4">
              <div class="listing-title h5">
                Dolor sit amet
              </div>
              <div class="listing-price -mt-2 text-sm font-semibold">
                3.772,00 €
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>

    <div class="infinite-scroll mt-4">
      <div class="list list-1 flex-col items-center">

        <div class="infinite-scroll-trigger">
          <button type="button" class="btn btn-md ${btnPrimary()}">

            <span class="infinite-scroll-trigger-content">
              Show more products
            </span>

            <span class="infinite-scroll-trigger-content-nomore">
              There are no more products
            </span>

            <span class="loader infinite-scroll-spinner">
              <span class="spinner spinner-animated text-white">
                ${spinner({})}
              </span>
            </span>

          </button>
        </div>

        <div class="infinite-scroll-pagination h6">
          Page xt-num of xt-tot
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
