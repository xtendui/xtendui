const cardSlide = require('components/snippets/classes').cardSlide

export default () => {
  return `
<div class="xt-slides">
  <div class="xt-slides-inner xt-row xt-row-4">

    <div class="xt-slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
      <div class="xt-card rounded-md ${cardSlide()}">
        <div class="xt-h4">1</div>
      </div>
    </div>

    <div class="xt-slide w-10/12 sm:w-6/12 opacity-50 active:opacity-100">
      <div class="xt-card rounded-md ${cardSlide()}">
        <div class="xt-h4">2</div>
      </div>
    </div>

  </div>
</div>

<nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
  <button type="button" class="xt-button text-2xs py-2 px-3.5 active:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
</nav>
`
}
