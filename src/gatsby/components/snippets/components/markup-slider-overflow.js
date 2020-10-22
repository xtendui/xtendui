const btnDefault = require('components/snippets/classes/btn-default').default
const cardSlide = require('components/snippets/classes/card-slide').default

export default () => {
  return `
<div class="slides">
  <nav class="slides-inner row row-2">

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card ${cardSlide()}">
        <div class="h4">1</div>
      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card ${cardSlide()}">
        <div class="h4">2</div>
      </div>
    </div>

  </nav>
</div>

<nav class="slider-pagination list list-2">
  <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
    prev
  </button>
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
  <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
    next
  </button>
</nav>
`
}
