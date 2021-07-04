const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]' }"
    >
      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle-el
        data-xt-group="group0"
        data-xt-hash="demo--toggle-hash-group-0a"
      >
        Toggle Group 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle-el
        data-xt-hash="demo--toggle-hash-1"
      >
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle-el
        data-xt-group="group0"
        data-xt-hash="demo--toggle-hash-group-0b"
      >
        Toggle Group 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle-el
        data-xt-hash="demo--toggle-hash-2"
      >
        Toggle 2
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle-el
        data-xt-group="group1"
        data-xt-hash="demo--toggle-hash-group-1"
      >
        Toggle Group 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle-el
        data-xt-group="group0,group1"
        data-xt-hash="demo--toggle-hash-group-01"
      >
        Toggle Group 0 and 1
      </button>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr>Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr data-xt-group="group0">
        Target Group 0
      </div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr data-xt-group="group1">
        Target Group 1a
      </div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr data-xt-group="group1">
        Target Group 1b
      </div>

      <div class="*** xt-toggle *** ${classes.cardToggle()} *** on ***" data-xt-toggle-tr>Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-tr data-xt-group="group0,group1">
        Target Group 0 and 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
