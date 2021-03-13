const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div data-xt-tooltip="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
      Lorem ipsum

      <div class="xt-tooltip-item">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
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
