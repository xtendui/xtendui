import React from 'react'
import path from 'path'

const btnLine = 'px-0 text-xs'
const btnLineDesign = 'absolute w-4 border-t border-current opacity-50'
const btnLineContent = 'pl-8'

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
<div class="inline-block w-full bg-accent-900 text-white links-inverse">

  <a href="#" class="featured-item block my-28">
    <div class="container-fluid">
      <div class="row items-center">
        <div class="w-full md:w-5/12 z-0">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
        </div>
        <div class="w-full md:w-7/12 z-10">
          <div class="featured-content pt-16 md:pt-0 md:pl-12">
            <div class="h1 mb-6 md:-ml-32">
              Lorem ipsum
            </div>
            <div class="leading-loose">
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <div class="btn btn-line ${btnLine}">
                <span class="btn-line-design ${btnLineDesign}"></span>
                <span class="btn-line-content ${btnLineContent}">
                  Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>

  <a href="#" class="featured-item block my-28">
    <div class="container-fluid">
      <div class="row items-center">
        <div class="w-full md:w-5/12 z-0 sm:order-2">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
        </div>
        <div class="w-full md:w-7/12 z-10 sm:order-1">
          <div class="featured-content pt-16 md:pt-0 md:pr-12">
            <div class="h1 mb-6">
              Dolor sit amet
            </div>
            <div class="leading-loose md:-mr-32 md:pl-12">
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <div class="btn btn-line ${btnLine}">
                <span class="btn-line-design ${btnLineDesign}"></span>
                <span class="btn-line-content ${btnLineContent}">
                  Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>

  <a href="#" class="featured-item block my-28">
    <div class="container-fluid">
      <div class="row items-center">
        <div class="w-full md:w-5/12 z-0">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
        </div>
        <div class="w-full md:w-7/12 z-10">
          <div class="featured-content pt-16 md:pt-0 md:pl-12">
            <div class="h1 mb-6 md:-ml-32">
              Consectetur adipiscing elit
            </div>
            <div class="leading-loose">
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <div class="btn btn-line ${btnLine}">
                <span class="btn-line-design ${btnLineDesign}"></span>
                <span class="btn-line-content ${btnLineContent}">
                  Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>

</div>

<div class="inline-block w-full bg-white">

  <a href="#" class="featured-item block my-28">
    <div class="container-fluid">
      <div class="row items-center">
        <div class="w-full md:w-5/12 z-0 sm:order-2">
          <div class="media-container bg-gray-700 ratio-75">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
            </div>
          </div>
        </div>
        <div class="w-full md:w-7/12 z-10">
          <div class="featured-content pt-16 md:pt-0 md:pr-12 md:text-right sm:order-1">
            <div class="h1 mb-6 md:-mr-32">
              Lorem ipsum
            </div>
            <div class="leading-loose">
              <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
              <div class="btn btn-line ${btnLine}">
                <span class="btn-line-design ${btnLineDesign}"></span>
                <span class="btn-line-content ${btnLineContent}">
                  Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
