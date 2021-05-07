const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--slider-api">
    <div class="p-4 md:p-6 lg:p-8">
      <div class="xt-list xt-list-3 items-center">
        <button
          type="button"
          class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
          id="button--slider-api-first-element"
        >
          1st element
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
          id="button--slider-api-first-target"
        >
          1st target
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
          id="button--slider-api-add"
        >
          Add
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
          id="button--slider-api-remove"
        >
          Remove
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
          id="button--slider-api-reinit"
        >
          Reinit
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
          id="button--slider-api-restart"
        >
          Restart
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
          id="button--slider-api-destroy"
        >
          Destroy
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
          id="button--slider-api-unmount"
        >
          Unmount
        </button>
      </div>
    </div>

    <div class="xt-slider" id="slider--eventmethods">
      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-slides xt-row xt-row-4" id="slider--eventmethods-targets">
          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">1</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">2</div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">3</div>
            </div>
          </div>

          <div class="xt-slide w-full ${classes.slide()}">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">4</div>
            </div>
          </div>

          <div class="xt-slide w-8/12 sm:w-6/12 md:w-5/12 ${classes.slide()}">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">5</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">6</div>
            </div>
          </div>

          <div class="xt-slide w-6/12 sm:w-4/12 md:w-3/12 ${classes.slide()}">
            <div class="xt-card rounded-md ${classes.cardSlide()}">
              <div class="xt-h4">7</div>
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
            class="xt-button text-2xs py-2 px-3.5 w-5 h-6 rounded-full text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 on:px-5 on:bg-gray-400 transition-all hidden"
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

      <div class="p-4 md:p-6 lg:p-8">
        <div class="xt-card rounded-md ${classes.cardDefault()}">
          <div
            class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
            id="card--slider-api-log"
          ></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
