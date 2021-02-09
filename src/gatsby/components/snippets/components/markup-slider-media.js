const btnDefault = require('components/snippets/classes/btn-default').default

export default () => {
  return `
<div class="slides">
  <div class="slides-inner row row-4">

    <div class="slide">

      <div class="media-container bg-gray-700">
        <div class="media-inner relative">
          <img class="media" src="/img.svg" loading="lazy" alt=""/>
        </div>
        <div class="loader bg-white bg-opacity-75">
          <div class="spinner spinner-animated text-accent-500">
            <svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/></svg><svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/></svg>
          </div>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container bg-gray-700">
        <div class="media-inner relative">
          <img class="media" src="/img-ratio.svg" loading="lazy" alt=""/>
        </div>
        <div class="loader bg-white bg-opacity-75">
          <div class="spinner spinner-animated text-accent-500">
            <svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/></svg><svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/></svg>
          </div>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container bg-gray-700">
        <div class="media-inner relative">
          <img class="media" src="https://source.unsplash.com/ruJm3dBXCqw" loading="lazy" alt=""/>
        </div>
        <div class="loader bg-white bg-opacity-75">
          <div class="spinner spinner-animated text-accent-500">
            <svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/></svg><svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/></svg>
          </div>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container bg-gray-700">
        <div class="media-inner relative">
          <img class="media" src="https://source.unsplash.com/wQLAGv4_OYs" loading="lazy" alt=""/>
        </div>
        <div class="loader bg-white bg-opacity-75">
          <div class="spinner spinner-animated text-accent-500">
            <svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/></svg><svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/></svg>
          </div>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container bg-gray-700">
        <div class="media-inner relative">
          <img class="media" src="https://source.unsplash.com/OlTjeydUpQw" loading="lazy" alt=""/>
        </div>
        <div class="loader bg-white bg-opacity-75">
          <div class="spinner spinner-animated text-accent-500">
            <svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/></svg><svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/></svg>
          </div>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container bg-gray-700">
        <div class="media-inner relative">
          <img class="media" src="https://source.unsplash.com/wEL2zPX3jDg" loading="lazy" alt=""/>
        </div>
        <div class="loader bg-white bg-opacity-75">
          <div class="spinner spinner-animated text-accent-500">
            <svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/></svg><svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/></svg>
          </div>
        </div>
      </div>

    </div>

    <div class="slide">

      <div class="media-container bg-gray-700">
        <div class="media-inner relative">
          <img class="media" src="https://source.unsplash.com/Tyg0rVhOTrE" loading="lazy" alt=""/>
        </div>
        <div class="loader bg-white bg-opacity-75">
          <div class="spinner spinner-animated text-accent-500">
            <svg viewBox="0 0 240 240"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current"/></svg><svg viewBox="0 0 240 240" preserveAspectRatio="xMinYMin meet"><circle cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628" class="stroke-current opacity-25"/></svg>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>

<nav class="slider-pagination w-full list list-2">
  <button type="button" class="btn ${btnDefault()} xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
</nav>
`
}
