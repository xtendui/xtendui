import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--slider-nooverflow"
     data-xt-slider="{ align: 'center', drag: { wrap: true } }">

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

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn-default" data-xt-nav="-1" title="Previous slide">
      <span class="icon-xt-chevron-left icon-left"></span> prev
    </button>
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
    <button type="button" class="btn btn-default" data-xt-nav="1" title="Next slide">
      next <span class="icon-xt-chevron-right icon-right"></span>
    </button>
  </nav>

</div>
`
