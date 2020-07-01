// const markupSlider = require('components/snippets/components/markup-slider').default
// const indentString = require('indent-string')
// ${indentString(markupSlider(), 2)}

export default () => {
  return `
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

    <li class="slide col-7 col-5-sm">
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

    <li class="slide col-7 col-5-sm">
      <div class="slide-inner">

        <div class="card card-slide card-large">
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

  </ul>
</div>

<nav class="slider-pagination">
  <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
</nav>
`
}
