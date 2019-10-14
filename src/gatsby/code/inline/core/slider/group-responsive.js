import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="slider"
     data-xt-slider="{ groupMq: {'all': 1, '(min-width: 768px)': 0.5 } }">

  <div class="slides">
    <ul class="slides_inner">

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>1</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>2</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>3</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>4</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide_inner">

          <div class="card card--default text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>5</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-12">
        <div class="slide_inner">

          <div class="card card--default text-align--center" style="height: 15rem;">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>6</h1>
            </div>
          </div>

        </div>
      </li>
    </ul>
  </div>

  <nav class="slider_pagination">
    <div class="list list--default list-space--small align-items--center">
      <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
      </button>
    </div>
  </nav>

</div>
`
