const btnDefault = require('components/snippets/classes/btn-default').default
const cardSlide = require('components/snippets/classes/card-slide').default

export default () => {
  return `
<div class="slides">
  <nav class="slides-inner">

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">1</div>
          <nav class="slider-navigation">
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
              <span class="icon-chevron-left"></span>
            </button>
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
              <span class="icon-chevron-right"></span>
            </button>
          </nav>
        </div>

      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">2</div>
          <nav class="slider-navigation">
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
              <span class="icon-chevron-left"></span>
            </button>
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
              <span class="icon-chevron-right"></span>
            </button>
          </nav>
        </div>

      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">3</div>
          <nav class="slider-navigation">
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
              <span class="icon-chevron-left"></span>
            </button>
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
              <span class="icon-chevron-right"></span>
            </button>
          </nav>
        </div>

      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">4</div>
          <nav class="slider-navigation">
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
              <span class="icon-chevron-left"></span>
            </button>
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
              <span class="icon-chevron-right"></span>
            </button>
          </nav>
        </div>

      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">5</div>
          <nav class="slider-navigation">
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="-1" title="Previous slide">
              <span class="icon-chevron-left"></span>
            </button>
            <button type="button" class="btn ${btnDefault()}" data-xt-nav="1" title="Next slide">
              <span class="icon-chevron-right"></span>
            </button>
          </nav>
        </div>

      </div>
    </div>

  </nav>
</div>

<nav class="slider-pagination">
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
