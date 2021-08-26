const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-disable">
    <div data-xt-tooltip>
      Lorem ipsum

      <span data-xt-tooltip-element>
        <a href="#">dolor</a>

        <div class="xt-tooltip p-3" data-xt-tooltip-target>
          <div
            class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
          >
            <div class="${classes.tooltipMd()}">
              Lorem ipsum dolor sit amet

              <div
                class="inline-block"
                data-xt-tooltip="{ elements: '[data-xt-tooltip-element-nested]', targets: '[data-xt-tooltip-target-nested]', matches: { '(min-width: 768px)': { disabled: true } } }"
              >
                <span data-xt-tooltip-element-nested>
                  <a href="#">dolor</a>

                  <div class="xt-tooltip p-3" data-xt-tooltip-target-nested>
                    <div
                      class="xt-card rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()}"
                    >
                      <div class="${classes.tooltipMd()}">Consectetur adipiscing elit</div>
                    </div>
                  </div>
                </span>
              </div>

              sit amet
            </div>
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
