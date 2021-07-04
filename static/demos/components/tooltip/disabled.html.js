const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--tooltip-disable">
    <div
      data-xt-tooltip="{ elements: '[data-xt-tooltip-el]', targets: '[data-xt-tooltip-tr]', matches: { '(min-width: 768px)': { disabled: true } } }"
    >
      Lorem ipsum

      <span data-xt-tooltip-el>
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2" data-xt-tooltip-tr>
          <div class="relative ${classes.tooltipMd()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum

            <div
              class="inline-block"
              data-xt-tooltip="{ elements: '[data-xt-tooltip-el-nested]', targets: '[data-xt-tooltip-tr-nested]' }"
            >
              <span data-xt-tooltip-el-nested>
                <a href="#">dolor</a>

                <div class="xt-tooltip p-2" data-xt-tooltip-tr-nested>
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
