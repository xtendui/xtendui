const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ queue: false, duration: 500 }">
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 1</button>

      <div class="relative w-full">
        <div
          class="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
        >
          Target 0
        </div>

        <div
          class="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
          data-xt-toggle-target
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
