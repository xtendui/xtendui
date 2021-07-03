const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-el]', targets: '[data-xt-toggle-tr]', queue: false, duration: 500 }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>Toggle 2 inverse</button>

      <div
        class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-tr
      >
        Target 0
      </div>

      <div
        class="*** xt-toggle *** ${classes.cardRadius()} ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        data-xt-toggle-tr
      >
        Target 1
      </div>

      <div
        class="*** done:hidden *** ${classes.cardRadius()} ${classes.cardToggle()} *** transition opacity-100 translate-x-0 on:opacity-0 on:translate-x-4 out:transition-none out:opacity-0 out:-translate-x-4 ***"
        data-xt-toggle-tr
        data-xt-duration-out="25"
      >
        Target 2 inverse
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
