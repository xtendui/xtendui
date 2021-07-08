const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle="{ targets: '#toggle--animation-0', duration: 500 }"
      >
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle="{ targets: '#toggle--animation-1', duration: 500 }"
      >
        Toggle 1
      </button>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        id="toggle--animation-0"
      >
        Target 0
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} *** transition opacity-0 -translate-x-4 in:opacity-100 in:translate-x-0 out:translate-x-4 ***"
        id="toggle--animation-1"
      >
        Target 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
