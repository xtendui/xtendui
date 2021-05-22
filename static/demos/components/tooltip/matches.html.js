const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      Lorem ipsum

      <div class="xt-tooltip-item">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>

      sit amet
    </div>
  </div>
`

export const object = {
  html: html,
}
