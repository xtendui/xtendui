import path from 'path'
const spinner = require('components/snippets/spinner').default

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="slider demo--slider--progress">
  <div class="loader loader--spinner loader--mouse loader--js">
    <span class="spinner">
      ${spinner}
    </span>
  </div>

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-inner">
              <div class="card-design"></div>
              <div class="card-content">
                <div class="card-item">
                  <h1>1</h1>
                  <div class="loader loader--x loader--size-bottom loader--js">
                    <div class="filler">
                      <span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-inner">
              <div class="card-design"></div>
              <div class="card-content">
                <div class="card-item">
                  <h1>2</h1>
                  <div class="loader loader--x loader--size-bottom loader--js">
                    <div class="filler">
                      <span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-inner">
              <div class="card-design"></div>
              <div class="card-content">
                <div class="card-item">
                  <h1>3</h1>
                  <div class="loader loader--x loader--size-bottom loader--js">
                    <div class="filler">
                      <span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-inner">
              <div class="card-design"></div>
              <div class="card-content">
                <div class="card-item">
                  <h1>4</h1>
                  <div class="loader loader--x loader--size-bottom loader--js">
                    <div class="filler">
                      <span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-inner">
              <div class="card-design"></div>
              <div class="card-content">
                <div class="card-item">
                  <h1>5</h1>
                  <div class="loader loader--x loader--size-bottom loader--js">
                    <div class="filler">
                      <span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-12">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-inner">
              <div class="card-design"></div>
              <div class="card-content">
                <div class="card-item" style="height: 15rem;">
                  <h1>6</h1>
                  <div class="loader loader--x loader--size-bottom loader--js">
                    <div class="filler">
                      <span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
      <span>
        <span class="loader loader--y loader--js">
          <span class="filler">
            <span></span><span></span>
          </span>
        </span>
      </span>
    </button>
  </nav>

</div>
`
