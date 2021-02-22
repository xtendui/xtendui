const spinner = require('components/snippets/spinner').default

export default () => {
  return `
<div class="xt-slides">
  <div class="xt-slides-inner xt-row xt-row-4">

    <div class="xt-slide">

      <div class="xt-media-container bg-gray-700">
        <div class="xt-media-inner relative">
          <img class="xt-media" src="/img.svg" loading="lazy" alt=""/>
        </div>
        <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            ${spinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

    </div>

    <div class="xt-slide">

      <div class="xt-media-container bg-gray-700">
        <div class="xt-media-inner relative">
          <img class="xt-media" src="/img-ratio.svg" loading="lazy" alt=""/>
        </div>
        <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            ${spinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

    </div>

    <div class="xt-slide">

      <div class="xt-media-container bg-gray-700">
        <div class="xt-media-inner relative">
          <img class="xt-media" src="https://source.unsplash.com/ruJm3dBXCqw" loading="lazy" alt=""/>
        </div>
        <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            ${spinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

    </div>

    <div class="xt-slide">

      <div class="xt-media-container bg-gray-700">
        <div class="xt-media-inner relative">
          <img class="xt-media" src="https://source.unsplash.com/wQLAGv4_OYs" loading="lazy" alt=""/>
        </div>
        <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            ${spinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

    </div>

    <div class="xt-slide">

      <div class="xt-media-container bg-gray-700">
        <div class="xt-media-inner relative">
          <img class="xt-media" src="https://source.unsplash.com/OlTjeydUpQw" loading="lazy" alt=""/>
        </div>
        <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            ${spinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

    </div>

    <div class="xt-slide">

      <div class="xt-media-container bg-gray-700">
        <div class="xt-media-inner relative">
          <img class="xt-media" src="https://source.unsplash.com/wEL2zPX3jDg" loading="lazy" alt=""/>
        </div>
        <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            ${spinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

    </div>

    <div class="xt-slide">

      <div class="xt-media-container bg-gray-700">
        <div class="xt-media-inner relative">
          <img class="xt-media" src="https://source.unsplash.com/Tyg0rVhOTrE" loading="lazy" alt=""/>
        </div>
        <div class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75">
          <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
            ${spinner({ classes: 'animate-xt-spinner' })}
          </div>
        </div>
      </div>

    </div>

  </div>
</div>

<nav class="xt-slider-pagination xt-slider-ui w-full xt-list xt-list-3 pt-4 items-center justify-center">
  <button type="button" class="xt-button text-2xs py-2 px-3.5 active:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
  </button>
</nav>
`
}
