const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div
      data-xt-tooltip="{ elements: '[data-xt-tooltip-element]', targets: '[data-xt-tooltip-target]', preventEvent: true }"
    >
      <a
        href="#tooltip-with-link-1"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-tooltip-element
      >
        tooltip
      </a>

      <div class="xt-tooltip p-2" data-xt-tooltip-target>
        <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
