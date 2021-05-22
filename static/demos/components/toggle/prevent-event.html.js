const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, preventEvent: true }">
      <a
        href="#toggle--prevent-event-0"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Toggle 0
      </a>

      <a
        href="#toggle--prevent-event-1"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Toggle 1
      </a>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle ${classes.cardRadius()} ${classes.cardToggle()}">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
