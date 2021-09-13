const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique' }">dolor</a> sit&nbsp;
    <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique' }">amet</a>

    <div class="*** xt-tooltip p-3 ***" id="tooltip--unique">
      <div
        class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}">
        <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
