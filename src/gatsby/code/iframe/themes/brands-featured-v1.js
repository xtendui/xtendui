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
<div class="h5 header-block">
  Constant speed
</div>

<div class="slider slider--text">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="hero">
            <a href="#test-link-1" class="hero_content">
              One
            </a>
            <a href="#test-link-2" class="hero_content">
              Two
            </a>
            <a href="#test-link-3" class="hero_content">
              Three
            </a>
            <a href="#test-link-4" class="hero_content">
              Four
            </a>
            <a href="#test-link-5" class="hero_content">
              Five
            </a>
            <a href="#test-link-6" class="hero_content">
              Six
            </a>
            <a href="#test-link-7" class="hero_content">
              Seven
            </a>
            <a href="#test-link-8" class="hero_content">
              Eight
            </a>
            <a href="#test-link-9" class="hero_content">
              Nine
            </a>
            <a href="#test-link-10" class="hero_content">
              Ten
            </a>
            <a href="#test-link-11" class="hero_content">
              Eleven
            </a>
            <a href="#test-link-12" class="hero_content">
              Twelve
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
  Faster or slower depending on horizontal space
</div>

<div class="slider slider--text slider--factor">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="hero">
            <a href="#test-link-1" class="hero_content">
              One
            </a>
            <a href="#test-link-2" class="hero_content">
              Two
            </a>
            <a href="#test-link-3" class="hero_content">
              Three
            </a>
            <a href="#test-link-4" class="hero_content">
              Four
            </a>
            <a href="#test-link-5" class="hero_content">
              Five
            </a>
            <a href="#test-link-6" class="hero_content">
              Six
            </a>
            <a href="#test-link-7" class="hero_content">
              Seven
            </a>
            <a href="#test-link-8" class="hero_content">
              Eight
            </a>
            <a href="#test-link-9" class="hero_content">
              Nine
            </a>
            <a href="#test-link-10" class="hero_content">
              Ten
            </a>
            <a href="#test-link-11" class="hero_content">
              Eleven
            </a>
            <a href="#test-link-12" class="hero_content">
              Twelve
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

<div class="slider slider--img">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <div class="hero">
            <a href="#test-link-1" class="hero_content">
              ${img({ classes: 'media-cover', ratio: '37.5%', loading: 'eager' })}
            </a>
            <a href="#test-link-2" class="hero_content">
              ${img({ classes: 'media-cover', ratio: '37.5%', loading: 'eager' })}
            </a>
            <a href="#test-link-3" class="hero_content">
              ${img({ classes: 'media-cover', ratio: '37.5%', loading: 'eager' })}
            </a>
            <a href="#test-link-4" class="hero_content">
              ${img({ classes: 'media-cover', ratio: '37.5%', loading: 'eager' })}
            </a>
            <a href="#test-link-5" class="hero_content">
              ${img({ classes: 'media-cover', ratio: '37.5%', loading: 'eager' })}
            </a>
            <a href="#test-link-6" class="hero_content">
              ${imgAlt({ classes: 'media-cover', ratio: '37.5%', loading: 'eager' })}
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
