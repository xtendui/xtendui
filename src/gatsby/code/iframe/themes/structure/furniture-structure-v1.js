import React from 'react'
import path from 'path'

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
<div id="body--smooth">

  <div class="featured featured--inverse">

    <a href="#" class="featured_item">
      <div class="container">
        <div class="featured_item_inner">
          <div class="row">
            <div class="featured_img_col">
              <div class="media-container" style="padding-bottom: 121%;">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
            </div>
            <div class="featured_content_col">
              <div class="featured_content">
                <div class="featured_title">
                  Lorem ipsum
                </div>
                <div class="featured_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    <span class="btn--line_line"></span>
                    <span class="btn--line_text">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="#" class="featured_item featured_item--big featured_item--right featured_item--desc-right">
      <div class="container">
        <div class="featured_item_inner">
          <div class="row">
            <div class="featured_img_col">
              <div class="media-container" style="padding-bottom: 72.6%;">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
            </div>
            <div class="featured_content_col">
              <div class="featured_content">
                <div class="featured_title">
                  Dolor sit amet
                </div>
                <div class="featured_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    <span class="btn--line_line"></span>
                    <span class="btn--line_text">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="#" class="featured_item">
      <div class="container">
        <div class="featured_item_inner">
          <div class="row">
            <div class="featured_img_col">
              <div class="media-container" style="padding-bottom: 121%;">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
            </div>
            <div class="featured_content_col">
              <div class="featured_content">
                <div class="featured_title">
                  Consectetur adipiscing elit
                </div>
                <div class="featured_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    <span class="btn--line_line"></span>
                    <span class="btn--line_text">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

  </div>

  <div class="featured">

    <a href="#" class="featured_item featured_item--right featured_item--align-right">
      <div class="container">
        <div class="featured_item_inner">
          <div class="row">
            <div class="featured_img_col">
              <div class="media-container" style="padding-bottom: 121%;">
                <div class="media-inner">
                  <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                </div>
              </div>
            </div>
            <div class="featured_content_col">
              <div class="featured_content">
                <div class="featured_title">
                  Lorem ipsum
                </div>
                <div class="featured_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    <span class="btn--line_line"></span>
                    <span class="btn--line_text">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
