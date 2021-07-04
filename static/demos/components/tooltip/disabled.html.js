const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-disable">
    <div data-xt-tooltip="{ elements: '[data-xt-tooltip-element]', targets: '[data-xt-tooltip-target]' }">
      Lorem ipsum

      <span data-xt-tooltip-element>
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2" data-xt-tooltip-target>
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum

            <div
              class="inline-block"
              data-xt-tooltip="{ elements: '[data-xt-tooltip-element-nested]', targets: '[data-xt-tooltip-target-nested]', matches: { '(min-width: 768px)': { disabled: true } } }"
            >
              <span data-xt-tooltip-element-nested>
                <a href="#">dolor</a>

                <div class="xt-tooltip p-2" data-xt-tooltip-target-nested>
                  <div
                    class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}"
                  >
                    Consectetur adipiscing elit
                  </div>
                </div>
              </span>
            </div>

            sit amet
          </div>
        </div>
      </span>

      sit amet
    </div>
  </div>
`

export const object = {
  html: html,
}
