import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="slider"
    data-xt-slider>

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">1</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">2</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">3</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">4</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">5</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-12">
        <div class="slide-inner">

          <div class="card card-slide card-large">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">6</div>
                </div>
              </div>
            </div>
          </div>

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
