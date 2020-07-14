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
<div class="product-page">
    <div class="container">
        <div class="product-page_inner">

            <div class="row">

                <div class="product-page_left_col">
                    <div class="product-page_left_outer">
                        <div class="product-page_left">

                            <button type="button" class="product_images"
                                    data-xt-overlay="{ targets: '#overlay--product_images' }">
                                <div class="list-block">
                                    <img id="product-image-0" src="/img.svg" loading="lazy" alt=""/>
                                    <img id="product-image-1" src="/img.svg" loading="lazy" alt=""/>
                                    <img id="product-image-2" src="/img.svg" loading="lazy" alt=""/>
                                    <img id="product-image-3" src="/img.svg" loading="lazy" alt=""/>
                                    <img id="product-image-4" src="/img.svg" loading="lazy" alt=""/>
                                </div>
                            </button>
                            
                            <div class="product_images_nav">
                                <div class="list-block">
                                    <a href="#product-image-0" class="product_images_nav_item" title="Go to image 0">
                                        <div class="product_images_nav_item_inner">
                                            <span></span>
                                        </div>
                                    </a>
                                    <a href="#product-image-1" class="product_images_nav_item" title="Go to image 1">
                                        <div class="product_images_nav_item_inner">
                                            <span></span>
                                        </div>
                                    </a>
                                    <a href="#product-image-2" class="product_images_nav_item" title="Go to image 2">
                                        <div class="product_images_nav_item_inner">
                                            <span></span>
                                        </div>
                                    </a>
                                    <a href="#product-image-3" class="product_images_nav_item" title="Go to image 3">
                                        <div class="product_images_nav_item_inner">
                                            <span></span>
                                        </div>
                                    </a>
                                    <a href="#product-image-4" class="product_images_nav_item" title="Go to image 3">
                                        <div class="product_images_nav_item_inner">
                                            <span></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="overlay overlay-default overlay-screen overlay-size-full" id="overlay--product_images">
                                <div class="overlay-container">
                                    <div class="overlay-inner">
                                        <div class="overlay-design"></div>
                            
                                        <div class="card card-overlay">
                                            <div class="card-design"></div>
                                            <div class="btn btn-close" aria-label="Close"></div>
                                            <div class="card-inner">
                                                <div class="card-content">
                            
                                                    <div class="card-asset">
                                                        <div class="list-block">
                                                            <img id="product-image-0" src="/img.svg" loading="lazy" alt=""/>
                                                            <img id="product-image-1" src="/img.svg" loading="lazy" alt=""/>
                                                            <img id="product-image-2" src="/img.svg" loading="lazy" alt=""/>
                                                            <img id="product-image-3" src="/img.svg" loading="lazy" alt=""/>
                                                            <img id="product-image-4" src="/img.svg" loading="lazy" alt=""/>
                                                        </div>
                                                    </div>
                            
                                                </div>
                                            </div>
                                        </div>
                            
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="product-page_right_col" id="header-continue-target">
                    <div class="product-page_right">

                        <h1 class="product-page_title">
                            Lorem ipsum dolor sit amet
                        </h1>
                        
                        <div class="product-page_price">
                           €&nbsp;229,00
                        </div>
                        
                        <div class="product-page_actions">
                            <a href="#" class="btn btn-primary btn-big btn-wide btn-tall">
                                Add to cart
                            </a>
                        </div>
                        
                        <div class="product-page_details">
                            <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                        </div>
                        
                        <div class="product-page_attributes">
                          <dl class="dl-line">
                            <dt>
                              Product Code:
                            </dt>
                            <dd>
                              012345
                            </dd>
                            <dt>
                              Internal Code:
                            </dt>
                            <dd>
                              543210
                            </dd>
                          </dl>
                        </div>
                          
                    </div>
                </div>
            </div>

        </div>
    </div>
    <a href="#header-continue-target" class="header-continue">
        <span class="icon-xt-chevron-down"></span>
    </a>
    <div class="product-page_limit-bottom"></div>
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
