const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="*** xt-tooltip *** p-2 relative inline-block *** on ***"
      data-xt-tooltip="{ closeOutside: false, classSkip: false }"
    >
      <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
