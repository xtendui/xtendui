const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-events">
    <div class="xt-list xt-list-3 items-center mb-4">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-first-element"
      >
        on 1st element
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-first-target"
      >
        on 1st target
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-events-autostart"
      >
        Autostart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--toggle-events-autostop"
      >
        Autostop
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-add"
      >
        Add
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-remove"
      >
        Remove
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-reinit"
      >
        Reinit
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-restart"
      >
        Restart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-destroy"
      >
        Destroy
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-eventmethods-unmount"
      >
        Unmount
      </button>
    </div>

    <div class="xt-slider" id="slider--eventmethods">
      <div class="xt-slides">
        <div class="xt-slides-inner xt-row xt-row-4" id="slider--eventmethods-targets">
          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-5/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
            </div>
          </div>

          <div class="xt-slide w-7/12 sm:w-5/12">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
            </div>
          </div>
        </div>
      </div>

      <nav class="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
        <button
          type="button"
          class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
          data-xt-nav="-1"
          title="Previous slide"
        >
          ${classes.iconChevronLeft({ classes: 'text-xl -my-1' })}
        </button>
        <button
          type="button"
          class="xt-button text-2xs py-2 px-3.5 in:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 in:bg-gray-400 transition-all xt-ignore"
          data-xt-pag
          title="Slide xt-num"
        ></button>
        <button
          type="button"
          class="xt-button text-2xs py-2 px-2 w-7 h-7 rounded-full ${classes.buttonDefault()}"
          data-xt-nav="1"
          title="Next slide"
        >
          ${classes.iconChevronRight({ classes: 'text-xl -my-1' })}
        </button>
      </nav>
    </div>

    <div class="xt-card rounded-md ${classes.cardDefault()} mt-6">
      <div
        class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
        id="card--slider-eventmethods-log"
      ></div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
