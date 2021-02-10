const cardSlide = require('components/snippets/classes/card-slide').default

export default () => {
  return `
<div class="slides">
  <div class="slides-inner row row-4">

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4 slide-pagination-content">1</div>
        <nav class="slider-pagination slider-ui w-full list list-3 pt-4 items-center justify-center">
          <button type="button" class="btn text-2xs py-2 px-3.5 active:px-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4 slide-pagination-content">2</div>
        <nav class="slider-pagination slider-ui w-full list list-3 pt-4 items-center justify-center">
          <button type="button" class="btn text-2xs py-2 px-3.5 active:px-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4 slide-pagination-content">3</div>
        <nav class="slider-pagination slider-ui w-full list list-3 pt-4 items-center justify-center">
          <button type="button" class="btn text-2xs py-2 px-3.5 active:px-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4 slide-pagination-content">4</div>
        <nav class="slider-pagination slider-ui w-full list list-3 pt-4 items-center justify-center">
          <button type="button" class="btn text-2xs py-2 px-3.5 active:px-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

    <div class="slide w-7/12 sm:w-5/12 opacity-50 active:opacity-100">
      <div class="card rounded-md ${cardSlide()}">
        <div class="h4 slide-pagination-content">5</div>
        <nav class="slider-pagination slider-ui w-full list list-3 pt-4 items-center justify-center">
          <button type="button" class="btn text-2xs py-2 px-3.5 active:px-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
            xt-content
          </button>
        </nav>
      </div>
    </div>

  </div>
</div>

<nav class="slider-pagination slider-ui w-full list list-3 pt-4 items-center justify-center">
  <button type="button" class="btn text-2xs py-2 px-3.5 active:px-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
    xt-num of xt-tot
  </button>
</nav>
`
}
