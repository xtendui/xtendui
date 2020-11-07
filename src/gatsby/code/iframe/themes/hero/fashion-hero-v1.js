import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight

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
<div class="slider">

  <div class="slides">
    <nav class="slides-inner duration-none transform-none">

      <div class="slide w-full slide-absolute">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center">
              <a href="#" class="group block w-full max-w-xl container-y text-white links-inverse">
                <div class="h1 h1-display">
                  Lorem ipsum
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="slide w-full slide-absolute">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:justify-start md:text-left">
              <a href="#" class="group block w-full max-w-xl container-y text-white links-inverse">
                <div class="h1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="slide w-full slide-absolute">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
              </div>
              <div class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent to-black opacity-50"></div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-start md:text-left">
              <div class="block w-full max-w-xl container-y text-white links-inverse">
                <div class="h1">
                  Lorem ipsum dolor sit amet
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                <div class="list list-2 justify-center md:justify-start">
                  <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
                    Lorem ipsum
                  </a>
                  <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
                    Dolor sit amet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide w-full slide-absolute">
        <div class="hero relative block overflow-hidden w-full">
          <div class="hero-inner">
            <div class="media-container h-screen">
              <div class="media-inner">
                <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
              </div>
              <div class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black opacity-50"></div>
            </div>
            <div class="hero-content container absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-end md:text-right">
              <div class="block w-full max-w-xl container-y text-white links-inverse">
                <div class="h1">
                  Lorem ipsum dolor sit amet
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
                <div class="list list-2 justify-center md:justify-end">
                  <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
                    Lorem ipsum
                  </a>
                  <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
                    Dolor sit amet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>
  </div>

  <button type="button" class="nav-sides left-0" data-xt-nav="-1" aria-label="Previous slide" data-xt-mouse-follow="{ targets: '.nav-sides-btn' }">
    <div class="nav-sides-btn mouse-follow text-white text-2xl">
      ${iconArrowLeft({ classes: 'icon-md' })}
    </div>
  </button>

  <button type="button" class="nav-sides right-0" data-xt-nav="1" aria-label="Next slide" data-xt-mouse-follow="{ targets: '.nav-sides-btn' }">
    <div class="nav-sides-btn mouse-follow text-white text-2xl">
      ${iconArrowRight({ classes: 'icon-md' })}
    </div>
  </button>

  <nav class="slider-pagination w-full list list-2 hidden">
    <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
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
