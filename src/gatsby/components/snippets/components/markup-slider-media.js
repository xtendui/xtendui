const btnDefault = require('components/snippets/classes/btn-default').default

export default () => {
  return `
<div class="slides">
  <nav class="slides-inner">

    <div class="slide">
      <div class="slide-inner">

        <div class="media-container">
          <div class="media-inner relative">
            <img class="media" src="/img.svg" loading="eager" alt=""/>
          </div>
        </div>

      </div>
    </div>

    <div class="slide">
      <div class="slide-inner">

        <div class="media-container">
          <div class="media-inner relative">
            <img class="media" src="/img-ratio.svg" loading="eager" alt=""/>
          </div>
        </div>

      </div>
    </div>

    <div class="slide">
      <div class="slide-inner">

        <div class="media-container">
          <div class="media-inner relative">
            <img class="media" src="/img.svg" loading="eager" alt=""/>
          </div>
        </div>

      </div>
    </div>

    <div class="slide">
      <div class="slide-inner">

        <div class="media-container">
          <div class="media-inner relative">
            <img class="media" src="/img-ratio.svg" loading="eager" alt=""/>
          </div>
        </div>

      </div>
    </div>

    <div class="slide">
      <div class="slide-inner">

        <div class="media-container">
          <div class="media-inner relative">
            <img class="media" src="/img.svg" loading="eager" alt=""/>
          </div>
        </div>

      </div>
    </div>

    <div class="slide">
      <div class="slide-inner">

        <div class="media-container">
          <div class="media-inner relative">
            <img class="media" src="/img-ratio.svg" loading="eager" alt=""/>
          </div>
        </div>

      </div>
    </div>

  </nav>
</div>

<nav class="slider-pagination">
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
</nav>
`
}
