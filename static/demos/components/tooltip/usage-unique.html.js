const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique-1, #tooltip--unique-2' }">dolor</a> sit amet

    <div class="*** xt-tooltip *** p-2" id="tooltip--unique-1">
      <div
        class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.textWhite()} ${classes.cardBlack()}"
      >
        Lorem ipsum dolor sit amet
      </div>
    </div>

    <div class="*** xt-tooltip *** p-2" id="tooltip--unique-2" data-xt-position="right-end">
      <div
        class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.textWhite()} ${classes.cardBlack()}"
      >
        Consectetur adipiscing elit
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
