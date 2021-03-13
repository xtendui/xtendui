const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="demo--tooltip-disable" data-xt-tooltip="{ matches: { '(min-width: 768px)': { disabled: true } } }">
      Lorem ipsum

      <div class="xt-tooltip-item">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet

            <div class="inline-block" data-xt-tooltip="{ on: 'click', off: 'click', position: 'auto' }">
              <a href="#">nested</a>

              <div class="xt-tooltip p-2">
                <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
                  Consectetur adipiscing elit
                </div>
              </div>
            </div>
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
