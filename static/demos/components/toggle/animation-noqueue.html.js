const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: ':scope > .xt-button', targets: '.xt-toggle', queue: false, duration: 500 }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}">Toggle 1</button>

      <div class="relative w-full">
        <div
          class="*** xt-toggle *** *** xt-toggle-absolute *** ${classes.cardRadius()} ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        >
          Target 0
        </div>

        <div
          class="*** xt-toggle *** *** xt-toggle-absolute *** ${classes.cardRadius()} ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
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
