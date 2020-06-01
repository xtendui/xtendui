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
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `

<div class="h5 header-block">
  Constant speed
</div>

<div class="slider demo--2020-brands-infinite demo--2020-brands-infinite--text">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <a href="#test-link-1" class="slide_content">
              One
            </a>
            <a href="#test-link-2" class="slide_content">
              Two
            </a>
            <a href="#test-link-3" class="slide_content">
              Three
            </a>
            <a href="#test-link-4" class="slide_content">
              Four
            </a>
            <a href="#test-link-5" class="slide_content">
              Five
            </a>
            <a href="#test-link-6" class="slide_content">
              Six
            </a>
            <a href="#test-link-7" class="slide_content">
              Seven
            </a>
            <a href="#test-link-8" class="slide_content">
              Eight
            </a>
            <a href="#test-link-9" class="slide_content">
              Nine
            </a>
            <a href="#test-link-10" class="slide_content">
              Ten
            </a>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>

<div class="h5 header-block">
  Faster the less horizontal space
</div>

<div class="slider demo--2020-brands-infinite demo--2020-brands-infinite--text demo--2020-brands-infinite--factor">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <a href="#test-link-1" class="slide_content">
              One
            </a>
            <a href="#test-link-2" class="slide_content">
              Two
            </a>
            <a href="#test-link-3" class="slide_content">
              Three
            </a>
            <a href="#test-link-4" class="slide_content">
              Four
            </a>
            <a href="#test-link-5" class="slide_content">
              Five
            </a>
            <a href="#test-link-6" class="slide_content">
              Six
            </a>
            <a href="#test-link-7" class="slide_content">
              Seven
            </a>
            <a href="#test-link-8" class="slide_content">
              Eight
            </a>
            <a href="#test-link-9" class="slide_content">
              Nine
            </a>
            <a href="#test-link-10" class="slide_content">
              Ten
            </a>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>

<div class="h5 header-block">
  Images
</div>

<div class="slider demo--2020-brands-infinite demo--2020-brands-infinite--img">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="slide_item">
            <a href="#test-link-1" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%' })}
            </a>
            <a href="#test-link-2" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%' })}
            </a>
            <a href="#test-link-3" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%' })}
            </a>
            <a href="#test-link-4" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%' })}
            </a>
            <a href="#test-link-5" class="slide_content">
              ${img({ classes: 'media-cover', ratio: '25%' })}
            </a>
            <a href="#test-link-6" class="slide_content">
              ${imgAlt({ classes: 'media-cover', ratio: '25%' })}
            </a>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination display-none">
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
