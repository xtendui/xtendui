const btnDefault = require('components/snippets/classes/btn-default').default
const cardSlide = require('components/snippets/classes/card-slide').default

export default () => {
  return `
<div class="slides">
  <nav class="slides-inner row row-space-2">

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">1</div>
        </div>

      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">2</div>
        </div>

      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">3</div>
        </div>

      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">4</div>
        </div>

      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()} h-40">
          <div class="h4">5</div>
        </div>

      </div>
    </div>

  </nav>
</div>

<nav class="slider-pagination list list-space-2">
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
</nav>
`
}
