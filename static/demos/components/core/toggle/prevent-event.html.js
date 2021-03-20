const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--">
    <div class="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, autoDisable: false, preventEvent: true }">
      <a href="#toggle--prevent-event-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
      </a>

      <a href="#toggle--prevent-event-1" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
      </a>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 0</div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">Target 1</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
