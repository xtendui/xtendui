const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ hash: 'data-xt-hash' }">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group,group-another" data-xt-hash="demo--toggle-hash-0"
      >
        Toggle Group all
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group" data-xt-hash="demo--toggle-hash-1"
      >
        Toggle Group
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}" data-xt-hash="demo--toggle-hash-2">
        Toggle 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}"
        data-xt-group="group" data-xt-hash="demo--toggle-hash-3"
      >
        Toggle Group
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}" data-xt-hash="demo--toggle-hash-4">
        Toggle 3
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

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
        Target 3
      </div>

      <div
        class="xt-card xt-toggle rounded-md ${classes.cardToggle()}"
        data-xt-group="group-another"
      >
        Target Group another
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
  container: true,
}
