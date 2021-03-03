import React from 'react'
import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const spinner = require('components/snippets/spinner').default
const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="py-10" data-xt-infinitescroll="{
    get: false,
    max: 4,
    elements: {
      scrollOffset: '.infinitescroll',
      trigger: '.infinitescroll-trigger .xt-button',
      reset: '.infinitescroll-pre .xt-button',
      items: '.xt-row',
      spaceAdditional: '.infinitescroll-pre',
      pagination: '.infinitescroll-pagination',
      item: ':scope > *',
    },
  }">
  <div class="container">

    <div class="infinitescroll-pre mb-4">
      <div class="xt-list xt-list-2 flex-col items-center">
        <div>
          <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
            Load previous pages
          </button>
        </div>
      </div>
    </div>

    <div class="xt-row xt-row-6">

      <div class="w-6/12 md:w-4/12">
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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
        <a href="https://github.com/minimit/xtendui" class="listing-item block text-black">
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

  <div class="infinitescroll mt-4">
    <div class="xt-list xt-list-2 flex-col items-center">

      <div class="infinitescroll-trigger">
        <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">

          <span class="infinitescroll-trigger-content">
            Show more products
          </span>

          <span class="infinitescroll-trigger-content-nomore">
            There are no more products
          </span>

          <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden infinitescroll-spinner">
            <span class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-white">
              ${spinner({ classes: 'animate-xt-spinner' })}
            </span>
          </span>

        </button>
      </div>

      <div class="infinitescroll-pagination h6">
        Page xt-num of xt-tot
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
