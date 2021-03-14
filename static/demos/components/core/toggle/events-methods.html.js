const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--toggle-event-methods">
    <div class="xt-list xt-list-3 items-center mb-4">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-first-element">
        1st element
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-first-target">
        1st target
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-autostart">
        Autostart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-autostop">
        Autostop
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-add">
        Add
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-remove">
        Remove
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-reinit">
        Reinit
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-restart">
        Restart
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-destroy">
        Destroy
      </button>
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}"
        id="demo--toggle-events-unmount">
        Unmount
      </button>
    </div>

    <div id="demo--toggle-events">
      <div class="xt-list xt-list-3 items-center mb-4" id="demo--toggle-events-elements">
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
          data-xt-group="0"
        >
          Toggle Group 0
        </button>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
          data-xt-group="0"
        >
          Toggle Group 0
        </button>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Toggle 1
        </button>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
          Toggle 2
        </button>
      </div>

      <div class="xt-list xt-list-3 items-center" id="demo--toggle-events-targets">
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="0">Target Group 0</div>
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="0">Target Group 0</div>
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>
        <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2</div>
      </div>
    </div>

    <div class="xt-card rounded-md ${classes.cardDefault()} mt-6">
      <div
        class="${classes.cardSm()} overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
        id="demo--toggle-events-log"></div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
