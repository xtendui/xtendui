const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ targets: '.xt-toggle', queue: false }">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <div class="relative w-full">
        <div
          class="xt-card xt-toggle xt-toggle-absolute rounded-md ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 xt-in:opacity-100 xt-in:translate-x-0 xt-out:translate-x-4"
          data-xt-duration="500"
        >
          Target 0
        </div>

        <div
          class="xt-card xt-toggle xt-toggle-absolute rounded-md ${classes.cardToggle()} transform transition opacity-0 -translate-x-4 xt-in:opacity-100 xt-in:translate-x-0 xt-out:translate-x-4"
          data-xt-duration="500"
        >
          Target 1
        </div>
      </div>

      <div class="mt-2">This text is below targets.</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
