const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group,group-another"
        data-xt-hash="demo--toggle-hash-all"
      >
        Toggle Group all
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group"
        data-xt-hash="demo--toggle-hash-group-0"
      >
        Toggle Group
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-hash="demo--toggle-hash-1"
      >
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group"
        data-xt-hash="demo--toggle-hash-group-1"
      >
        Toggle Group
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-hash="demo--toggle-2"
      >
        Toggle 2
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group-another"
      >
        Toggle Group another
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="group">Target Group</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="group-another">
        Target Group another
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()} on" data-xt-group="group">Target Group</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 2</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}" data-xt-group="group-another">
        Target Group another
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
