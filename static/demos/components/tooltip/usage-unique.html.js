const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique' }">dolor</a> sit <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique' }">amet</a>

    <div class="*** xt-tooltip *** p-2" id="tooltip--unique">
      <div
        class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textWhite()} ${classes.cardBlack()}"
      >
        Lorem ipsum dolor sit amet
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
