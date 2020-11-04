const btnDefault = require('components/snippets/classes/btn-default').default

export default () => {
  return `
<div class="slides">
  <nav class="slides-inner row row-2">

    <div class="slide">

      <div class="media-container">
        <div class="media-inner relative">
          <img class="media" src="/img.svg" loading="lazy" alt=""/>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container">
        <div class="media-inner relative">
          <img class="media" src="/img-ratio.svg" loading="lazy" alt=""/>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container">
        <div class="media-inner relative">
          <img class="media" src="/img.svg" loading="lazy" alt=""/>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container">
        <div class="media-inner relative">
          <img class="media" src="/img-ratio.svg" loading="lazy" alt=""/>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container">
        <div class="media-inner relative">
          <img class="media" src="/img.svg" loading="lazy" alt=""/>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container">
        <div class="media-inner relative">
          <img class="media" src="/img-ratio.svg" loading="lazy" alt=""/>
        </div>
      </div>

    </div>

  </nav>
</div>

<nav class="slider-pagination w-full list list-2">
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
</nav>
`
}
