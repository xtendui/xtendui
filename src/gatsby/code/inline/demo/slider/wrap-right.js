import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="slider"
     data-xt-slider="{ align: 'right', drag: { wrap: true, overflow: false } }">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-design"></div>
            <div class="card-item">
              <h1>1</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-design"></div>
            <div class="card-item">
              <h1>2</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-design"></div>
            <div class="card-item">
              <h1>3</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-design"></div>
            <div class="card-item">
              <h1>4</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="card card--default text-align--center">
            <div class="card-design"></div>
            <div class="card-item">
              <h1>5</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-12">
        <div class="slide-inner">

          <div class="card card--default text-align--center" style="height: 15rem;">
            <div class="card-design"></div>
            <div class="card-item">
              <h1>6</h1>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`
