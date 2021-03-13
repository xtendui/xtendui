const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-tooltip>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          Black
        </button>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br />Proin
            molestie ${classes.iconLink()} diam nec euismod commodo.
          </div>
        </div>
      </div>

      <div data-xt-tooltip>
        <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
          Primary
        </button>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardPrimary()}">
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.<br />Proin
            molestie ${classes.iconLink()} diam nec euismod commodo.
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
