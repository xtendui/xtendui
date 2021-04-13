const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-animation-multiple-delay">
    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}" data-xt-group="0">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}" data-xt-group="1">
        Toggle 1
      </button>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
        data-xt-group="0"
      >
        Toggle 0a
      </div>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
        data-xt-group="0"
      >
        Toggle 0b
      </div>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
        data-xt-group="0"
      >
        Toggle 0c
      </div>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
        data-xt-group="1"
      >
        Target 1a
      </div>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
        data-xt-group="1"
      >
        Target 1b
      </div>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
        data-xt-group="1"
      >
        Target 1c
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
