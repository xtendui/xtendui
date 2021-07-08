const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 500 }">
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 0</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 1</button>

      <div
        class="*** done:hidden *** ${classes.cardToggle()} w-full *** transition opacity-100 translate-x-0 on:opacity-0 on:translate-x-4 out:transition-none out:opacity-0 out:-translate-x-4 ***"
        data-xt-toggle-target
        data-xt-duration-out="raf"
      >
        Target 0
      </div>

      <div
        class="*** done:hidden *** ${classes.cardToggle()} w-full *** transition opacity-100 translate-x-0 on:opacity-0 on:translate-x-4 out:transition-none out:opacity-0 out:-translate-x-4 ***"
        data-xt-toggle-target
        data-xt-duration-out="raf"
      >
        Target 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
