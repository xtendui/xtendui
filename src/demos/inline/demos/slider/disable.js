import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: true,
  js: false,
}

demo.htmlSource = `
<div class="slider slider--disable--example"
     data-xt-slider>

  <div class="slides">
    <ul class="slides_inner">

      <li class="slide col--6 col--4-sm">
        <div class="slide_inner">

          <div class="card card--big text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>1</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col--6 col--4-sm">
        <div class="slide_inner">

          <div class="card card--big text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>2</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col--6 col--4-sm">
        <div class="slide_inner">

          <div class="card card--big text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>3</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col--6 col--4-sm">
        <div class="slide_inner">

          <div class="card card--big text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>4</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col--6 col--4-sm">
        <div class="slide_inner">

          <div class="card card--big text-align--center">
            <div class="card_design"></div>
            <div class="card_content">
              <h1>5</h1>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col--12">
        <div class="slide_inner">

          <div class="card card--big text-align--center" style="height: 15rem;">
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
    <div class="list list-space--small align-items--center">
      <button type="button" class="btn xt-ignore" data-xt-pag title="Slide xt-num">
        <span></span>
      </button>
    </div>
  </nav>

</div>
`
