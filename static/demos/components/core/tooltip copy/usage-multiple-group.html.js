const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div data-xt-tooltip>
      Lorem ipsum

      <div class="xt-tooltip-item" data-xt-group="my-group">
        <a href="#">dolor</a>

        <div class="xt-tooltip p-2" data-xt-group="my-group">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Lorem ipsum dolor sit amet
          </div>
        </div>

        <div class="xt-tooltip p-2" data-xt-position="right-end" data-xt-group="my-group">
          <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
            Consectetur adipiscing elit
          </div>
        </div>
      </div>

      sit

      <div class="xt-tooltip-item">
        <a href="#">amet</a>

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
