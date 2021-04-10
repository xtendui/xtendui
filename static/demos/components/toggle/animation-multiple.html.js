const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
      >
        Target 0
      </div>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()} transform transition ease-out duration-500 opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4"
        data-xt-duration="500"
      >
        Target 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
