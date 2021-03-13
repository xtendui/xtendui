const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <div class="demo--tooltip-animation-js">
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          tooltip
        </button>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
