const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center" data-xt-toggle>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="my-group">
        Toggle Group 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="my-group">
        Toggle Group 0
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 2
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="another-group">
        Toggle Group 3
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="my-group">Target Group 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="another-group">
        Target Group 3
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="my-group">Target Group 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="another-group">
        Target Group 3
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
