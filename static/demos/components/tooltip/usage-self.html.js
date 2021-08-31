const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      class="*** xt-tooltip *** p-2 relative inline-block *** on ***"
      data-xt-tooltip="{ closeOutside: false, classSkip: false }"
    >
      <div
        class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()}"
      >
        <div class="${classes.tooltipMd()}">Lorem ipsum dolor sit amet</div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
