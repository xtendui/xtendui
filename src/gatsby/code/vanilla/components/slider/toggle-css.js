import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--slider-toggle-css"
     data-xt-slider="{ instant: false, drag: false }">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide col-12">
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

      <li class="slide col-12">
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

      <li class="slide col-12">
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

      <li class="slide col-12">
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

      <li class="slide col-12">
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

          <div class="card card-slide"
            style="height: 15rem">
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

</div>
`
