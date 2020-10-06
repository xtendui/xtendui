const spinner = require('components/snippets/spinner').default
const btnDefault = require('components/snippets/classes/btn-default').default
const cardSlide = require('components/snippets/classes/card-slide').default

export default () => {
  return `
<span class="loader loader-animated">
  <span class="spinner text-accent-500">
      ${spinner({})}
  </span>
</span>

<div class="slides">
  <nav class="slides-inner row row-space-2">

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">1</div>
          <span class="loader loader-x loader-size-bottom">
            <span class="filler text-accent-500">
              <span class="bg-current"></span>
              <span class="bg-current opacity-25"></span>
            </span>
          </span>
        </div>

      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">2</div>
          <span class="loader loader-x loader-size-bottom">
            <span class="filler text-accent-500">
              <span class="bg-current"></span>
              <span class="bg-current opacity-25"></span>
            </span>
          </span>
        </div>

      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">3</div>
          <span class="loader loader-x loader-size-bottom">
            <span class="filler text-accent-500">
              <span class="bg-current"></span>
              <span class="bg-current opacity-25"></span>
            </span>
          </span>
        </div>

      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">4</div>
          <span class="loader loader-x loader-size-bottom">
            <span class="filler text-accent-500">
              <span class="bg-current"></span>
              <span class="bg-current opacity-25"></span>
            </span>
          </span>
        </div>

      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="slide-inner">

        <div class="card ${cardSlide()}">
          <div class="h4">5</div>
          <span class="loader loader-x loader-size-bottom">
            <span class="filler text-accent-500">
              <span class="bg-current"></span>
              <span class="bg-current opacity-25"></span>
            </span>
          </span>
        </div>

      </div>
    </div>

  </nav>
</div>

<nav class="slider-pagination list list-space-2">
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
    <span class="loader loader-y">
      <span class="filler text-accent-500">
        <span class="bg-current"></span>
        <span class="bg-current opacity-25"></span>
      </span>
    </span>
  </button>
</nav>
`
}
