const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="xt-list xt-list-3 items-center"
      data-xt-toggle="{ elements: '[data-xt-toggle-element]', targets: '[data-xt-toggle-target]' }"
    >
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element data-xt-group="group0">
        Toggle Group 0
      </button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 1</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element data-xt-group="group0">
        Toggle Group 0
      </button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element>Toggle 2</button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-element data-xt-group="group1">
        Toggle Group 1
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonToggle()}"
        data-xt-toggle-element
        data-xt-group="group0,group1"
      >
        Toggle Group 0 and 1
      </button>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 1</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target data-xt-group="group0">
        Target Group 0
      </div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target data-xt-group="group1">
        Target Group 1a
      </div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target data-xt-group="group1">
        Target Group 1b
      </div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target>Target 2</div>

      <div class="*** xt-toggle *** ${classes.cardToggle()}" data-xt-toggle-target data-xt-group="group0,group1">
        Target Group 0 and 1
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
