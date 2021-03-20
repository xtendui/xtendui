const classes = require('src/gatsby/components/snippets/classes').classes
const markupSlider = require('src/gatsby/components/snippets/markup-slider-eventmethods').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="CCC--slider-events">
    <div class="xt-list xt-list-3 items-center mb-4">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-events-first-element"
      >
        1st element
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-events-first-target"
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
        id="button--slider-events-add"
      >
        Add
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-events-remove"
      >
        Remove
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-events-reinit"
      >
        Reinit
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-events-restart"
      >
        Restart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-events-destroy"
      >
        Destroy
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="button--slider-events-unmount"
      >
        Unmount
      </button>
    </div>

    <div class="xt-slider" id="slider--events">${indentString(markupSlider(), 2)}</div>

    <div class="xt-card rounded-md ${classes.cardDefault()} mt-6">
      <div
        class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
        id="card--slider-events-log"
      ></div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
