import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--2019-sun68-hero">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_img">
              <div class="slide_img_inner">
                ${img({ classes: 'media-cover', height: '100%' })}
              </div>
            </div>
            <div class="slide_content">
              <div class="container full">
                <h2>Lorem ipsum</h2>
              </div>
            </div>
          </a>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_img">
              <div class="slide_img_inner">
                ${img({ classes: 'media-cover', height: '100%' })}
              </div>
            </div>
            <div class="slide_content">
              <div class="container full">
                <h2>Dolor sit amet</h2>
              </div>
            </div>
          </a>
        </div>
      </li>

      <li class="slide">
        <div class="slide-inner">
          <a href="#" class="slide_item">
            <div class="slide_img">
              <div class="slide_img_inner">
                ${img({ classes: 'media-cover', height: '100%' })}
              </div>
            </div>
            <div class="slide_content">
              <div class="container full">
                <h2>Consectetur adipiscing elit</h2>
              </div>
            </div>
          </a>
        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

  <div class="slider-navigation-sides slider-navigation-sides-prev" data-xt-nav="-1" aria-label="previous slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-xt-chevron-left"></span></span>
    </div>
  </div>

  <div class="slider-navigation-sides slider-navigation-sides-next" data-xt-nav="1" aria-label="next slide">
    <div class="slider-navigation-sides-btn">
      <span><span class="icon-xt-chevron-right"></span></span>
    </div>
  </div>

</div>
`
