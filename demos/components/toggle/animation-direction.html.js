const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 500 }">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 0
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded-full ${classes.buttonLower()} ${classes.buttonGray()} ${classes.buttonTextAnim()}"
        data-xt-toggle-element>
        Toggle 1
      </button>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** opacity-0 dir-before:translate-x-4 dir-after:-translate-x-4 in:transition in:opacity-100 in:translate-x-0 out:transition out:opacity-0 out:dir-before:-translate-x-4 out:dir-after:translate-x-4 ***"
        data-xt-toggle-target>
        Target 0
      </div>

      <div
        class="off:hidden out:pointer-events-none ${classes.cardToggle()} w-full *** opacity-0 dir-before:translate-x-4 dir-after:-translate-x-4 in:transition in:opacity-100 in:translate-x-0 out:transition out:opacity-0 out:dir-before:-translate-x-4 out:dir-after:translate-x-4 ***"
        data-xt-toggle-target>
        Target 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
