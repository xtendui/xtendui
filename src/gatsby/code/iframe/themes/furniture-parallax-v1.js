import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default

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

  <div class="parallax parallax--inverse">

    <a href="#" class="parallax_item">
      <div class="container">
        <div class="parallax_item_inner">
          <div class="row">
            <div class="parallax_img_col">
              ${img({ classes: 'media-cover', ratio: '121%' })}
            </div>
            <div class="parallax_content_col">
              <div class="parallax_content">
                <div class="parallax_title">
                  Lorem ipsum
                </div>
                <div class="parallax_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    Discover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="#" class="parallax_item parallax_item--big parallax_item--right parallax_item--desc-right">
      <div class="container">
        <div class="parallax_item_inner">
          <div class="row">
            <div class="parallax_img_col">
              ${img({ classes: 'media-cover', ratio: '72.6%' })}
            </div>
            <div class="parallax_content_col">
              <div class="parallax_content">
                <div class="parallax_title">
                  Dolor sit amet
                </div>
                <div class="parallax_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    Discover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

    <a href="#" class="parallax_item">
      <div class="container">
        <div class="parallax_item_inner">
          <div class="row">
            <div class="parallax_img_col">
              ${img({ classes: 'media-cover', ratio: '121%' })}
            </div>
            <div class="parallax_content_col">
              <div class="parallax_content">
                <div class="parallax_title">
                  Consectetur adipiscing elit
                </div>
                <div class="parallax_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    Discover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>

  </div>

  <div class="parallax">

    <a href="#" class="parallax_item parallax_item--right parallax_item--align-right">
      <div class="container">
        <div class="parallax_item_inner">
          <div class="row">
            <div class="parallax_img_col">
              ${img({ classes: 'media-cover', ratio: '121%' })}
            </div>
            <div class="parallax_content_col">
              <div class="parallax_content">
                <div class="parallax_title">
                  Lorem ipsum
                </div>
                <div class="parallax_desc">
                  <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                  <div class="btn btn--line">
                    Discover
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
