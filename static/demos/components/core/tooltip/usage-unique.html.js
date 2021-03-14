const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    Lorem ipsum <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique-1, #tooltip--unique-2' }">dolor</a> sit amet

    <div class="xt-tooltip p-2" id="tooltip--unique-1">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

    <div class="xt-tooltip p-2" id="tooltip--unique-2" data-xt-position="right-end">
      <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
        Consectetur adipiscing elit
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
