const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group"
      >
        Toggle Group
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group"
      >
        Toggle Group
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 3
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="another-group"
      >
        Toggle Group another
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="group">Target Group</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="another-group">
        Target Group another
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="group">Target Group</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 3</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()} on" data-xt-group="another-group">
        Target Group another
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
