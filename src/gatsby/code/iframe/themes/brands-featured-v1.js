import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

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
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Constant speed
</div>

<div class="slider slider--text py-12">

  <div class="slides">
    <ul class="slides-inner row row-10 transition-none">

      <div class="slide">
        <div class="brand list list-10 flex-no-wrap whitespace-no-wrap">
          <a href="#test-link-1" class="brand_content">
            <div class="h4">One</div>
          </a>
          <a href="#test-link-2" class="brand_content">
            <div class="h4">Two</div>
          </a>
          <a href="#test-link-3" class="brand_content">
            <div class="h4">Three</div>
          </a>
          <a href="#test-link-4" class="brand_content">
            <div class="h4">Four</div>
          </a>
          <a href="#test-link-5" class="brand_content">
            <div class="h4">Five</div>
          </a>
          <a href="#test-link-6" class="brand_content">
            <div class="h4">Six</div>
          </a>
          <a href="#test-link-7" class="brand_content">
            <div class="h4">Seven</div>
          </a>
          <a href="#test-link-8" class="brand_content">
            <div class="h4">Eight</div>
          </a>
          <a href="#test-link-9" class="brand_content">
            <div class="h4">Nine</div>
          </a>
          <a href="#test-link-10" class="brand_content">
            <div class="h4">Ten</div>
          </a>
          <a href="#test-link-11" class="brand_content">
            <div class="h4">Eleven</div>
          </a>
          <a href="#test-link-12" class="brand_content">
            <div class="h4">Twelve</div>
          </a>
        </div>
      </div>

    </ul>
  </div>

  <nav class="slider-pagination w-full list list-2 hidden">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Faster or slower depending on horizontal space
</div>

<div class="slider slider--text slider--factor py-12">

  <div class="slides">
    <ul class="slides-inner row row-10 transition-none">

      <div class="slide">
        <div class="brand list list-10 flex-no-wrap whitespace-no-wrap">
          <a href="#test-link-1" class="brand_content">
            <div class="h4">One</div>
          </a>
          <a href="#test-link-2" class="brand_content">
            <div class="h4">Two</div>
          </a>
          <a href="#test-link-3" class="brand_content">
            <div class="h4">Three</div>
          </a>
          <a href="#test-link-4" class="brand_content">
            <div class="h4">Four</div>
          </a>
          <a href="#test-link-5" class="brand_content">
            <div class="h4">Five</div>
          </a>
          <a href="#test-link-6" class="brand_content">
            <div class="h4">Six</div>
          </a>
          <a href="#test-link-7" class="brand_content">
            <div class="h4">Seven</div>
          </a>
          <a href="#test-link-8" class="brand_content">
            <div class="h4">Eight</div>
          </a>
          <a href="#test-link-9" class="brand_content">
            <div class="h4">Nine</div>
          </a>
          <a href="#test-link-10" class="brand_content">
            <div class="h4">Ten</div>
          </a>
          <a href="#test-link-11" class="brand_content">
            <div class="h4">Eleven</div>
          </a>
          <a href="#test-link-12" class="brand_content">
            <div class="h4">Twelve</div>
          </a>
        </div>
      </div>

    </ul>
  </div>

  <nav class="slider-pagination w-full list list-2 hidden">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Images
</div>

<div class="slider slider--img py-12">

  <div class="slides">
    <ul class="slides-inner row row-px transition-none">

      <div class="slide">
        <div class="brand list list-px flex-no-wrap">
          <a href="#test-link-1" class="brand_content">
            ${img({ classes: 'object-cover object-center', ratio: '37.5%', loading: 'eager' })}
          </a>
          <a href="#test-link-2" class="brand_content">
            ${img({ classes: 'object-cover object-center', ratio: '37.5%', loading: 'eager' })}
          </a>
          <a href="#test-link-3" class="brand_content">
            ${img({ classes: 'object-cover object-center', ratio: '37.5%', loading: 'eager' })}
          </a>
          <a href="#test-link-4" class="brand_content">
            ${img({ classes: 'object-cover object-center', ratio: '37.5%', loading: 'eager' })}
          </a>
          <a href="#test-link-5" class="brand_content">
            ${img({ classes: 'object-cover object-center', ratio: '37.5%', loading: 'eager' })}
          </a>
          <a href="#test-link-6" class="brand_content">
            ${imgAlt({ classes: 'object-cover object-center', ratio: '37.5%', loading: 'eager' })}
          </a>
        </div>
      </div>

    </ul>
  </div>

  <nav class="slider-pagination w-full list list-2 hidden">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
