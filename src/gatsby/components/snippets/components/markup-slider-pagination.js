const btnDefault = require('components/snippets/classes/btn-default').default
const cardSlide = require('components/snippets/classes/card-slide').default

export default () => {
  return `
<div class="slides">
  <nav class="slides-inner row row-2">

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card ${cardSlide()}">
        <div class="h4 slide-pagination-content">1</div>
        <nav class="slider-pagination list list-2">
          <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card ${cardSlide()}">
        <div class="h4 slide-pagination-content">2</div>
        <nav class="slider-pagination list list-2">
          <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card ${cardSlide()}">
        <div class="h4 slide-pagination-content">3</div>
        <nav class="slider-pagination list list-2">
          <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="card ${cardSlide()}">
        <div class="h4 slide-pagination-content">4</div>
        <nav class="slider-pagination list list-2">
          <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="card ${cardSlide()}">
        <div class="h4 slide-pagination-content">5</div>
        <nav class="slider-pagination list list-2">
          <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

  </nav>
</div>

<nav class="slider-pagination list list-2">
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
    xt-num of xt-tot
  </button>
</nav>
`
}
