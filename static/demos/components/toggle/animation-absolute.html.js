const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', queue: false, duration: 500 }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

      <div class="relative w-full">
        <div
          class="*** xt-toggle *** *** xt-toggle-absolute *** ${classes.cardRadius()} ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-tr
        >
          Target 0
        </div>

        <div
          class="*** xt-toggle *** *** xt-toggle-absolute *** ${classes.cardRadius()} ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-tr
        >
          Target 1
        </div>
      </div>

      <div class="mt-2">Active targets are not absolute so content flow normally.</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
