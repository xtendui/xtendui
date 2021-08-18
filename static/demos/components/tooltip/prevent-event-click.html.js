const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ on: 'click', off: 'click', preventEvent: true }">
      <a
        href="#tooltip-with-link-0"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-tooltip-element
      >
        tooltip
      </a>

      <div class="xt-tooltip p-2" data-xt-tooltip-target>
        <div
          class="relative ${classes.tooltipMd()} rounded${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
        >
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
