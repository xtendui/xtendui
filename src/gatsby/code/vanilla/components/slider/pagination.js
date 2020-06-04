import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
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
                  <div class="card-title slide-pagination-content">1</div>
                  <nav class="slider-pagination">
                    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
                    </button>
                  </nav>
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
                  <div class="card-title slide-pagination-content">2</div>
                  <nav class="slider-pagination">
                    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
                    </button>
                  </nav>
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
                  <div class="card-title slide-pagination-content">3</div>
                  <nav class="slider-pagination">
                    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
                    </button>
                  </nav>
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
                  <div class="card-title slide-pagination-content">4</div>
                  <nav class="slider-pagination">
                    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
                    </button>
                  </nav>
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
                  <div class="card-title slide-pagination-content">5</div>
                  <nav class="slider-pagination">
                    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-12">
        <div class="slide-inner">

          <div class="card card-slide"
            style="height: 15rem">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title slide-pagination-content">6</div>
                  <nav class="slider-pagination">
                    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
                    </button>
                  </nav>
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
      xt-num of xt-tot : xt-content
    </button>
  </nav>

</div>
`
